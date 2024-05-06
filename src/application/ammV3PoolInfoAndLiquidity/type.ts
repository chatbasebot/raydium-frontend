// import { ClmmPoolInfo, ApiPoolInfoItem, PoolType } from '@raydium-io/raydium-sdk'
import { ClmmPoolInfo, ApiPoolInfoItem, PoolType } from 'raydium-sdk-devnet'


export type BestResultStartTimeInfo = {
  ammId: string
  startTime: number
  poolType: PoolType
  poolInfo: BestResultStartTimePoolInfo
}

export type BestResultStartTimePoolInfo = {
  rawInfo: ClmmPoolInfo | ApiPoolInfoItem
  ammId: string
  quoteMint: string
  baseMint: string
}
