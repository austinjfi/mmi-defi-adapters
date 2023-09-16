import fs from 'fs'
import path from 'path'
import { Protocol } from '../../adapters/index.js'
import { Json } from '../../types/json.js'
import { Chain, ChainName } from '../constants/chains.js'

export interface IMetadataBuilder {
  product: string
  buildMetadata(writeToFile?: boolean): Promise<Json>
}

export async function fetchMetadata<AdapterMetadata extends Json>({
  productDir,
  fileKey,
  chainId,
}: {
  productDir: string
  fileKey: string
  chainId: Chain
}): Promise<AdapterMetadata> {
  const filePath = path.resolve(
    productDir,
    `./metadata/${ChainName[chainId]}.${fileKey}.json`,
  )

  if (!fs.existsSync(filePath)) {
    throw new Error('Metadata not found')
  }

  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as AdapterMetadata
}

export async function writeMetadataToFile({
  protocolId,
  product,
  chainId,
  fileKey,
  metadataObject,
}: {
  protocolId: Protocol
  product: string
  chainId: Chain
  fileKey: string
  metadataObject: Json
}) {
  const newFilePath = path.resolve(
    `src/adapters/${protocolId}/products/${product}/metadata/${ChainName[chainId]}.${fileKey}.json`,
  )

  fs.mkdirSync(path.dirname(newFilePath), { recursive: true })

  fs.writeFileSync(
    newFilePath,
    JSON.stringify(metadataObject, null, 2),
    'utf-8',
  )
}
