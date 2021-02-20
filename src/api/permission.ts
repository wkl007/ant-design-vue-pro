import request from '@/utils/request'
import { PermissionsReq, PermissionsResp, RolesReq, RolesResp } from '@/types/api/permission'

export default class PermissionServer {
  // 角色列表
  static getRoles (params: RolesReq): Promise<RolesResp> {
    return request.request({
      url: '/roles',
      method: 'get',
      params
    })
  }

  // 权限列表
  static getPermissions (params: PermissionsReq): Promise<PermissionsResp> {
    return request.request({
      url: '/permissions',
      method: 'get',
      params
    })
  }
}
