// import { ApiPoolInfoItem } from '@raydium-io/raydium-sdk'
import { ApiPoolInfoItem } from 'raydium-sdk-devnet'


export function isApiPoolInfoItem(info: any): info is ApiPoolInfoItem {
  return 'marketId' in info
}
