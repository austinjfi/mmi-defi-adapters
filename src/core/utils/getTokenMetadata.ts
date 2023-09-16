import { ethers } from 'ethers'
import { Erc20, Erc20__factory } from '../../contracts/index.js'
import { Chain } from '../constants/chains.js'
import TOKEN_METADATA_ARBITRUM from '../metadata/token-metadata-arbitrum.json' assert { type: 'json' }
import TOKEN_METADATA_ETHEREUM from '../metadata/token-metadata-ethereum.json' assert { type: 'json' }
import { chainProviders } from './chainProviders.js'
import { extractErrorMessage } from './error.js'
import { logger } from './logger.js'

export type Erc20Metadata = {
  address: string
  name: string
  symbol: string
  decimals: number
  iconUrl?: string
}

const CHAIN_METADATA: Partial<
  Record<Chain, Record<string, Erc20Metadata | undefined>>
> = {
  [Chain.Ethereum]: TOKEN_METADATA_ETHEREUM,
  [Chain.Arbitrum]: TOKEN_METADATA_ARBITRUM,
}

export const getThinTokenMetadata = async (
  tokenAddress: string,
  chainId: Chain,
) => {
  const { iconUrl: _, ...token } = await getTokenMetadata({
    tokenAddress,
    chainId,
  })

  return token
}

export const getTokenMetadata = async ({
  tokenAddress,
  chainId,
}: {
  tokenAddress: string
  chainId: Chain
}): Promise<Erc20Metadata> => {
  const fileMetadata = CHAIN_METADATA[chainId]
  if (fileMetadata) {
    const fileTokenMetadata = fileMetadata[tokenAddress]
    if (fileTokenMetadata) {
      logger.debug(
        { tokenAddress, chainId },
        'Token metadata found on cached file',
      )
      return fileTokenMetadata
    }
  }

  const onChainTokenMetadata = await getOnChainTokenMetadata(
    tokenAddress,
    chainId,
  )
  if (onChainTokenMetadata) {
    logger.debug({ tokenAddress, chainId }, 'Token metadata found on chain')
    return onChainTokenMetadata
  }

  const errorMessage = 'Cannot find token metadata for token'
  logger.error({ tokenAddress, chainId }, errorMessage)
  throw new Error(errorMessage)
}

const getOnChainTokenMetadata = async (
  tokenAddress: string,
  chainId: Chain,
): Promise<Erc20Metadata | undefined> => {
  const provider = chainProviders[chainId]
  if (!provider) {
    return undefined
  }

  const tokenContract = Erc20__factory.connect(tokenAddress, provider)

  try {
    const name = await getTokenName(tokenContract, provider)
    const symbol = await getTokenSymbol(tokenContract, provider)
    const decimals = Number(await tokenContract.decimals())
    return {
      address: (await tokenContract.getAddress()).toLowerCase(),
      name,
      symbol,
      decimals,
    }
  } catch (error) {
    const errorMessage = extractErrorMessage(error)
    logger.warn(
      { tokenAddress, chainId, errorMessage },
      'Failed to fetch token metadata on-chain',
    )
    return undefined
  }
}

const getTokenName = async (
  tokenContract: Erc20,
  provider: ethers.JsonRpcProvider,
) => {
  try {
    return await tokenContract.name()
  } catch (error) {
    if (!isCallExceptionCodeError(error)) {
      throw error
    }

    const contractAddress = await tokenContract.getAddress()

    logger.warn(
      { contractAddress },
      'Failed to fetch token name as a string. Using bytes32 fallback',
    )

    // Fallback for contracts that return bytes32 instead of string
    const result = await provider.call({
      to: contractAddress,
      data: '0x06fdde03', // Function signature for name()
    })
    return ethers.decodeBytes32String(result)
  }
}

const getTokenSymbol = async (
  tokenContract: Erc20,
  provider: ethers.JsonRpcProvider,
) => {
  try {
    return await tokenContract.symbol()
  } catch (error) {
    if (!isCallExceptionCodeError(error)) {
      throw error
    }

    const contractAddress = await tokenContract.getAddress()

    logger.debug(
      { contractAddress },
      'Failed to fetch token symbol as a string. Using bytes32 fallback',
    )

    // Fallback for contracts that return bytes32 instead of string
    const result = await provider.call({
      to: contractAddress,
      data: '0x95d89b41', // Function signature for symbol()
    })
    return ethers.decodeBytes32String(result)
  }
}

const isCallExceptionCodeError = (error: unknown): boolean =>
  error instanceof Error && 'code' in error && error.code === 'CALL_EXCEPTION'
