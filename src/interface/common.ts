/*
 * @Author: hdq
 * @Date: 2023-06-29 21:16:44
 * @Last Modified by: hdq
 * @Last Modified time: 2023-06-30 00:16:48
 */

//公共类型
export namespace BadicManageType {
  export interface Data<T> {
    [key: string]: T
  }
  export interface IAxiosResponse {
    code?: number
    msg?: string
    result?: any
    data?: any
  }
}
