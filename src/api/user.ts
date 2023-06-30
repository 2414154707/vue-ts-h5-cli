/*
 * @Author: hdq
 * @Date: 2023-06-29 23:29:43
 * @Last Modified by: hdq
 * @Last Modified time: 2023-06-30 19:42:44
 */
import { API_USER_CONFIG } from '@/config/api/user'
import { request } from '@/utils/request'
import { BadicManageType } from '@/interface/common'
import { UserManageType } from '@/interface/model/user'
interface UserSeriviceInterface {
  login: (params: UserManageType.UserLoginFormState) => Promise<any>
  registry: (params: UserManageType.UserRegistryFormState) => Promise<any>
}
export const useUserSerivice = function (): UserSeriviceInterface {
  class UserService {
    login(params: UserManageType.UserLoginFormState) {
      const url = API_USER_CONFIG.login()
      return request
        .post(url, params)
        .then(({ data }: BadicManageType.IAxiosResponse) => {
          return Promise.resolve(data)
        })
        .catch((err: any) => {
          return Promise.reject(err)
        })
    }
    registry(params: UserManageType.UserRegistryFormState) {
      const url = API_USER_CONFIG.registry()
      return request
        .post(url, params)
        .then(({ data }: BadicManageType.IAxiosResponse) => {
          return Promise.resolve(data)
        })
        .catch((err: any) => {
          return Promise.reject(err)
        })
    }
  }
  return new UserService()
}
// export const useUserOutLineSerivice = function(){
//     class UserService{
//         login(){}
//         registry(){}
//     }
//     return new UserService()
// }

// const userServer = useUserSerivice()
// const userOutLineSerivice = useUserOutLineSerivice()
// userServer.login()
// userOutLineSerivice.login()
