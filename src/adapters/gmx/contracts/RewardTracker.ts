/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface RewardTrackerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BASIS_POINTS_DIVISOR"
      | "PRECISION"
      | "allowance"
      | "allowances"
      | "approve"
      | "averageStakedAmounts"
      | "balanceOf"
      | "balances"
      | "claim"
      | "claimForAccount"
      | "claimable"
      | "claimableReward"
      | "cumulativeRewardPerToken"
      | "cumulativeRewards"
      | "decimals"
      | "depositBalances"
      | "distributor"
      | "gov"
      | "inPrivateClaimingMode"
      | "inPrivateStakingMode"
      | "inPrivateTransferMode"
      | "initialize"
      | "isDepositToken"
      | "isHandler"
      | "isInitialized"
      | "name"
      | "previousCumulatedRewardPerToken"
      | "rewardToken"
      | "setDepositToken"
      | "setGov"
      | "setHandler"
      | "setInPrivateClaimingMode"
      | "setInPrivateStakingMode"
      | "setInPrivateTransferMode"
      | "stake"
      | "stakeForAccount"
      | "stakedAmounts"
      | "symbol"
      | "tokensPerInterval"
      | "totalDepositSupply"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "unstake"
      | "unstakeForAccount"
      | "updateRewards"
      | "withdrawToken"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Approval" | "Claim" | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BASIS_POINTS_DIVISOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowances",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "averageStakedAmounts",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "claim", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "claimForAccount",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimable",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimableReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeRewardPerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeRewards",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositBalances",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "distributor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "inPrivateClaimingMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inPrivateStakingMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inPrivateTransferMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isDepositToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isHandler",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "previousCumulatedRewardPerToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositToken",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "setHandler",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setInPrivateClaimingMode",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setInPrivateStakingMode",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setInPrivateTransferMode",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeForAccount",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedAmounts",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokensPerInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalDepositSupply",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeForAccount",
    values: [AddressLike, AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS_DIVISOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "averageStakedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimableReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "inPrivateClaimingMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inPrivateStakingMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inPrivateTransferMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isDepositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "previousCumulatedRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setInPrivateClaimingMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInPrivateStakingMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInPrivateTransferMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensPerInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalDepositSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unstakeForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimEvent {
  export type InputTuple = [receiver: AddressLike, amount: BigNumberish];
  export type OutputTuple = [receiver: string, amount: bigint];
  export interface OutputObject {
    receiver: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RewardTracker extends BaseContract {
  connect(runner?: ContractRunner | null): RewardTracker;
  waitForDeployment(): Promise<this>;

  interface: RewardTrackerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  BASIS_POINTS_DIVISOR: TypedContractMethod<[], [bigint], "view">;

  PRECISION: TypedContractMethod<[], [bigint], "view">;

  allowance: TypedContractMethod<
    [_owner: AddressLike, _spender: AddressLike],
    [bigint],
    "view"
  >;

  allowances: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [_spender: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  averageStakedAmounts: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  balanceOf: TypedContractMethod<[_account: AddressLike], [bigint], "view">;

  balances: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  claim: TypedContractMethod<[_receiver: AddressLike], [bigint], "nonpayable">;

  claimForAccount: TypedContractMethod<
    [_account: AddressLike, _receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;

  claimable: TypedContractMethod<[_account: AddressLike], [bigint], "view">;

  claimableReward: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  cumulativeRewardPerToken: TypedContractMethod<[], [bigint], "view">;

  cumulativeRewards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  depositBalances: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  distributor: TypedContractMethod<[], [string], "view">;

  gov: TypedContractMethod<[], [string], "view">;

  inPrivateClaimingMode: TypedContractMethod<[], [boolean], "view">;

  inPrivateStakingMode: TypedContractMethod<[], [boolean], "view">;

  inPrivateTransferMode: TypedContractMethod<[], [boolean], "view">;

  initialize: TypedContractMethod<
    [_depositTokens: AddressLike[], _distributor: AddressLike],
    [void],
    "nonpayable"
  >;

  isDepositToken: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isHandler: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isInitialized: TypedContractMethod<[], [boolean], "view">;

  name: TypedContractMethod<[], [string], "view">;

  previousCumulatedRewardPerToken: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  rewardToken: TypedContractMethod<[], [string], "view">;

  setDepositToken: TypedContractMethod<
    [_depositToken: AddressLike, _isDepositToken: boolean],
    [void],
    "nonpayable"
  >;

  setGov: TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;

  setHandler: TypedContractMethod<
    [_handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  setInPrivateClaimingMode: TypedContractMethod<
    [_inPrivateClaimingMode: boolean],
    [void],
    "nonpayable"
  >;

  setInPrivateStakingMode: TypedContractMethod<
    [_inPrivateStakingMode: boolean],
    [void],
    "nonpayable"
  >;

  setInPrivateTransferMode: TypedContractMethod<
    [_inPrivateTransferMode: boolean],
    [void],
    "nonpayable"
  >;

  stake: TypedContractMethod<
    [_depositToken: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  stakeForAccount: TypedContractMethod<
    [
      _fundingAccount: AddressLike,
      _account: AddressLike,
      _depositToken: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  stakedAmounts: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  tokensPerInterval: TypedContractMethod<[], [bigint], "view">;

  totalDepositSupply: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [_recipient: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [_sender: AddressLike, _recipient: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  unstake: TypedContractMethod<
    [_depositToken: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  unstakeForAccount: TypedContractMethod<
    [
      _account: AddressLike,
      _depositToken: AddressLike,
      _amount: BigNumberish,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  updateRewards: TypedContractMethod<[], [void], "nonpayable">;

  withdrawToken: TypedContractMethod<
    [_token: AddressLike, _account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BASIS_POINTS_DIVISOR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [_owner: AddressLike, _spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "allowances"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [_spender: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "averageStakedAmounts"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "balances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[_receiver: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "claimForAccount"
  ): TypedContractMethod<
    [_account: AddressLike, _receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimable"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimableReward"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "cumulativeRewardPerToken"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "cumulativeRewards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "depositBalances"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "distributor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "inPrivateClaimingMode"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "inPrivateStakingMode"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "inPrivateTransferMode"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_depositTokens: AddressLike[], _distributor: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isDepositToken"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isHandler"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isInitialized"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "previousCumulatedRewardPerToken"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setDepositToken"
  ): TypedContractMethod<
    [_depositToken: AddressLike, _isDepositToken: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setGov"
  ): TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setHandler"
  ): TypedContractMethod<
    [_handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setInPrivateClaimingMode"
  ): TypedContractMethod<
    [_inPrivateClaimingMode: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setInPrivateStakingMode"
  ): TypedContractMethod<
    [_inPrivateStakingMode: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setInPrivateTransferMode"
  ): TypedContractMethod<
    [_inPrivateTransferMode: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<
    [_depositToken: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakeForAccount"
  ): TypedContractMethod<
    [
      _fundingAccount: AddressLike,
      _account: AddressLike,
      _depositToken: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakedAmounts"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokensPerInterval"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalDepositSupply"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [_recipient: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [_sender: AddressLike, _recipient: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unstake"
  ): TypedContractMethod<
    [_depositToken: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unstakeForAccount"
  ): TypedContractMethod<
    [
      _account: AddressLike,
      _depositToken: AddressLike,
      _amount: BigNumberish,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateRewards"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawToken"
  ): TypedContractMethod<
    [_token: AddressLike, _account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "Claim"
  ): TypedContractEvent<
    ClaimEvent.InputTuple,
    ClaimEvent.OutputTuple,
    ClaimEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "Claim(address,uint256)": TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;
    Claim: TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
