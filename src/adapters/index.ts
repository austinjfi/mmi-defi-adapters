/* Autogenerated file. Edit at your own risk */
import { Chain } from '../core/constants/chains'
import { ProtocolAdapterParams } from '../types/adapter'
import { IProtocolAdapter } from '../types/IProtocolAdapter'
import { AaveV2ATokenPoolAdapter } from './aave-v2/products/a-token/aaveV2ATokenPoolAdapter'
import { AaveV2StableDebtTokenPoolAdapter } from './aave-v2/products/stable-debt-token/aaveV2StableDebtTokenPoolAdapter'
import { AaveV2VariableDebtTokenPoolAdapter } from './aave-v2/products/variable-debt-token/aaveV2VariableDebtTokenPoolAdapter'
import { AaveV3ATokenPoolAdapter } from './aave-v3/products/a-token/aaveV3ATokenPoolAdapter'
import { AaveV3StableDebtTokenPoolAdapter } from './aave-v3/products/stable-debt-token/aaveV3StableDebtTokenPoolAdapter'
import { AaveV3VariableDebtTokenPoolAdapter } from './aave-v3/products/variable-debt-token/aaveV3VariableDebtTokenPoolAdapter'
import { CompoundPoolAdapter } from './compound/products/pool/compoundPoolAdapter'
import { CurvePoolAdapter } from './curve/products/pool/curvePoolAdapter'
import { ExampleProductAdapter } from './example/products/example-product/exampleProductAdapter'
import { GMXGlpAdapter } from './gmx/products/glp/gmxGlpAdapter'
import { LidoStEthAdapter } from './lido/products/st-eth/lidoStEthAdapter'
import { LidoWstEthAdapter } from './lido/products/wst-eth/lidoWstEthAdapter'
import { SDaiAdapter } from './maker/products/yield/sDaiAdapter'
import { Protocol } from './protocols'
import { StargatePoolAdapter } from './stargate/products/pool/stargatePoolAdapter'
import { StargateVestingAdapter } from './stargate/products/vesting/stargateVestingAdapter'
import { UniswapV3PoolAdapter } from './uniswap-v3/products/pool/uniswapV3PoolAdapter'

export const supportedProtocols: Record<
  Protocol,
  Partial<
    Record<Chain, (new (input: ProtocolAdapterParams) => IProtocolAdapter)[]>
  >
> = {
  [Protocol.Stargate]: {
    [Chain.Ethereum]: [StargatePoolAdapter, StargateVestingAdapter],
    [Chain.Arbitrum]: [StargatePoolAdapter, StargateVestingAdapter],
  },

  [Protocol.Example]: {
    [Chain.Ethereum]: [ExampleProductAdapter],
  },

  [Protocol.AaveV2]: {
    [Chain.Ethereum]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
    [Chain.Polygon]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
    [Chain.Avalanche]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
  },

  [Protocol.AaveV3]: {
    [Chain.Ethereum]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Polygon]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Avalanche]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Base]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Arbitrum]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Fantom]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Optimism]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
  },

  [Protocol.UniswapV3]: {
    [Chain.Ethereum]: [UniswapV3PoolAdapter],
    [Chain.Arbitrum]: [UniswapV3PoolAdapter],
    [Chain.Optimism]: [UniswapV3PoolAdapter],
    [Chain.Polygon]: [UniswapV3PoolAdapter],
    [Chain.Bsc]: [UniswapV3PoolAdapter],
    [Chain.Base]: [UniswapV3PoolAdapter],
  },

  [Protocol.Lido]: {
    [Chain.Ethereum]: [LidoStEthAdapter, LidoWstEthAdapter],
  },

  [Protocol.Curve]: {
    [Chain.Ethereum]: [CurvePoolAdapter],
  },

  [Protocol.Compound]: {
    [Chain.Ethereum]: [CompoundPoolAdapter],
  },

  [Protocol.Maker]: {
    [Chain.Ethereum]: [SDaiAdapter],
  },

  [Protocol.GMX]: {
    [Chain.Arbitrum]: [GMXGlpAdapter],
    [Chain.Avalanche]: [GMXGlpAdapter],
  },
}
