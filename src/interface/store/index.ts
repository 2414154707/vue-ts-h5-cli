/*
 * @Author: hdq
 * @Date: 2023-06-29 21:23:06
 * @Last Modified by: hdq
 * @Last Modified time: 2023-06-29 21:24:33
 */
export interface CommitInterface<T> {
  commit: (type: string, value: any) => void
  state: T
}
export interface IPayload {
  type: string
  payload?: any
}
