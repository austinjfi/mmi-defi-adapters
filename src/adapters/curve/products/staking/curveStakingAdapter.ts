import { SimplePoolAdapter } from '../../../../core/adapters/SimplePoolAdapter'
import {
  IMetadataBuilder,
  CacheToFile,
} from '../../../../core/decorators/cacheToFile'
import { NotImplementedError } from '../../../../core/errors/errors'
import { filterMapSync } from '../../../../core/utils/filters'
import { getTokenMetadata } from '../../../../core/utils/getTokenMetadata'
import { logger } from '../../../../core/utils/logger'
import { IProtocolAdapter } from '../../../../types/IProtocolAdapter'
import {
  ProtocolDetails,
  PositionType,
  GetEventsInput,
  MovementsByBlock,
  GetAprInput,
  GetApyInput,
  GetTotalValueLockedInput,
  TokenBalance,
  ProtocolTokenApr,
  ProtocolTokenApy,
  ProtocolTokenTvl,
  UnderlyingTokenRate,
  Underlying,
  ProtocolRewardPosition,
  GetClaimableRewardsInput,
  ProtocolAdapterParams,
} from '../../../../types/adapter'
import { Erc20Metadata } from '../../../../types/erc20Metadata'
import { getPoolData } from '../../common/getPoolData'
import { MetaRegistry__factory } from '../../contracts'
import {
  CURVE_META_REGISTRY_CONTRACT,
  CurvePoolAdapterMetadata,
} from '../pool/curvePoolAdapter'

type CurveStakingAdapterMetadata = Record<
  string,
  {
    protocolToken: Erc20Metadata
    underlyingTokens: Erc20Metadata[]
  }
>

export class CurveStakingAdapter
  extends SimplePoolAdapter
  implements IMetadataBuilder
{
  productId = 'staking'

  poolAdapter: IProtocolAdapter & IMetadataBuilder

  constructor(params: ProtocolAdapterParams) {
    super(params)

    this.poolAdapter = params.adaptersController.fetchAdapter(
      params.chainId,
      params.protocolId,
      'pool',
    ) as IProtocolAdapter & IMetadataBuilder
  }

  /**
   * Update me.
   * Add your protocol details
   */
  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'Curve',
      description: 'Curve pool adapter',
      siteUrl: 'https:',
      iconUrl: 'https://',
      positionType: PositionType.Supply,
      chainId: this.chainId,
      productId: this.productId,
    }
  }

  /**
   * Update me.
   * Add logic to build protocol token metadata
   * For context see dashboard example ./dashboard.png
   * We need protocol token names, decimals, and also linked underlying tokens
   */
  @CacheToFile({ fileKey: 'protocol-token' })
  async buildMetadata() {
    const metadata = {} as CurveStakingAdapterMetadata
    const metaRegistryContract = MetaRegistry__factory.connect(
      CURVE_META_REGISTRY_CONTRACT,
      this.provider,
    )

    const poolCount = Number(await metaRegistryContract.pool_count())

    const poolDataPromises = Array.from({ length: poolCount }, (_, i) =>
      getPoolData(i, this.chainId, this.provider),
    )

    const results = await Promise.all(poolDataPromises)

    filterMapSync(results, async (token) => {
      if (!token || !token.stakingToken) {
        return undefined
      }

      metadata[token.protocolToken.address] = {
        protocolToken: {
          ...token.protocolToken, // curve staking tokens dont have name, decimals, and symbol on their token contracts
          address: token.protocolToken.address,
        },
        underlyingTokens: [token.protocolToken],
      }
    })

    return metadata
  }

  /**
   * Update me.
   * Below implementation might fit your metadata if not update it.
   */
  async getProtocolTokens(): Promise<Erc20Metadata[]> {
    return Object.values(await this.buildMetadata()).map(
      ({ protocolToken }) => protocolToken,
    )
  }

  /**
   * Update me.
   * Add logic to turn the LP token balance into the correct underlying token(s) balance
   * For context see dashboard example ./dashboard.png
   */
  protected async getUnderlyingTokenBalances(
    _protocolTokenBalance: TokenBalance,
    _blockNumber?: number,
  ): Promise<Underlying[]> {
    throw new NotImplementedError()
  }

  /**
   * Update me.
   * Add logic to return current claimable rewards.
   * Ensure you support blocknumber override param
   *
   */
  async getClaimableRewards(
    _input: GetClaimableRewardsInput,
  ): Promise<ProtocolRewardPosition[]> {
    throw new NotImplementedError()
  }

  /**
   * Update me.
   * Add logic to return claimed rewards between blocknumber range
   * Implement as you wish, use event logs or chain data if possible
   *
   */
  async getClaimedRewards(_input: GetEventsInput): Promise<MovementsByBlock[]> {
    throw new NotImplementedError()
  }

  /**
   * Update me.
   * Add logic to find tvl in a pool
   *
   */
  async getTotalValueLocked(
    _input: GetTotalValueLockedInput,
  ): Promise<ProtocolTokenTvl[]> {
    throw new NotImplementedError()
  }

  /**
   * Update me.
   * Below implementation might fit your metadata if not update it.
   */
  protected async fetchProtocolTokenMetadata(
    protocolTokenAddress: string,
  ): Promise<Erc20Metadata> {
    const { protocolToken } = await this.fetchPoolMetadata(protocolTokenAddress)

    return protocolToken
  }

  /**
   * Update me.
   * Add logic that finds the underlying token rates for 1 protocol token
   */
  protected async getUnderlyingTokenConversionRate(
    _protocolTokenMetadata: Erc20Metadata,
    _blockNumber?: number | undefined,
  ): Promise<UnderlyingTokenRate[]> {
    throw new NotImplementedError()
  }

  async getApr(_input: GetAprInput): Promise<ProtocolTokenApr> {
    throw new NotImplementedError()
  }

  async getApy(_input: GetApyInput): Promise<ProtocolTokenApy> {
    throw new NotImplementedError()
  }
  async getRewardApr(_input: GetAprInput): Promise<ProtocolTokenApr> {
    throw new NotImplementedError()
  }

  async getRewardApy(_input: GetApyInput): Promise<ProtocolTokenApy> {
    throw new NotImplementedError()
  }

  /**
   * Update me.
   * Below implementation might fit your metadata if not update it.
   */
  protected async fetchUnderlyingTokensMetadata(
    protocolTokenAddress: string,
  ): Promise<Erc20Metadata[]> {
    const { underlyingTokens } = await this.fetchPoolMetadata(
      protocolTokenAddress,
    )

    return underlyingTokens
  }

  /**
   * Update me.
   * Below implementation might fit your metadata if not update it.
   */
  private async fetchPoolMetadata(protocolTokenAddress: string) {
    const poolMetadata = (await this.buildMetadata())[protocolTokenAddress]

    if (!poolMetadata) {
      logger.error({ protocolTokenAddress }, 'Protocol token pool not found')
      throw new Error('Protocol token pool not found')
    }

    return poolMetadata
  }
}
