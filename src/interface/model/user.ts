/*
 * @Author: hdq
 * @Date: 2023-06-29 23:17:23
 * @Last Modified by: hdq
 * @Last Modified time: 2023-06-29 23:22:30
 */
export namespace UserManageType {
  export class UserLoginFormState {
    username: string = 'hdq'
    password: string = '123'
  }
  export class UserRegistryFormState {
    username: string | undefined
    password: string | undefined
    mobile: string | undefined
  }
}
