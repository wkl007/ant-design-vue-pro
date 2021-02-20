import request from '@/utils/request'
import { BaseFormDataReq, FormDataReq, FormDataResp } from '@/types/api/form'

export default class FormServer {
  // 基础表单提交
  static saveBasicFormData (data: BaseFormDataReq): Promise<FormDataResp> {
    return request.request({
      url: '/forms/basic-form',
      method: 'post',
      data
    })
  }

  // 分布表单提交
  static saveFormData (data: FormDataReq): Promise<FormDataResp> {
    return request.request({
      url: '/forms',
      method: 'post',
      data
    })
  }
}
