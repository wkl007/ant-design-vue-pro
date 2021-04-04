import request from '@/utils/request'
import { FakeListReq, FakeListResp, RuleReq, RuleResp } from '@/types/api/list'

export default class ListServer {
  // 标准列表/卡片列表
  static getFakeList (params?: FakeListReq): Promise<FakeListResp[]> {
    return request.request({
      url: '/fake_list',
      method: 'get',
      params
    })
  }

  static getRule (params?: RuleReq): Promise<RuleResp> {
    return request.request({
      url: '/rule',
      method: 'get',
      params
    })
  }
}
