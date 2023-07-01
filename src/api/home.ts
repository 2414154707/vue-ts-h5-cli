/*
 * @Author: hdq
 * @Date: 2023-06-29 23:29:43
 * @Last Modified by: hdq
 * @Last Modified time: 2023-06-30 19:42:44
 */
import { API_HOME_CONFIG } from '@/config/api/home'

import { request } from '@/utils/request'
import { BadicManageType } from '@/interface/common'
// import { UserManageType } from '@/interface/model/user'
interface HomeSeriviceInterface {
  getCarouselList: (params: { type?: number; pagesize?: number; pagecount?: number }) => Promise<any>
  getGoodsList: (params: { pagesize?: number; pagecount?: number }) => Promise<any>
}
export const useHomeSerivice = function (): HomeSeriviceInterface {
  class HomeService {
    getCarouselList(params: { type?: number; pagesize?: number; pagecount?: number }) {
      const url = API_HOME_CONFIG.getCarouselList()
      return request
        .get(url, { params })
        .then(({ data }: BadicManageType.IAxiosResponse) => {
          return Promise.resolve(data)
        })
        .catch((err: any) => {
          return Promise.reject(err)
        })
    }
    getGoodsList(params: { pagesize?: number; pagecount?: number }) {
      const url = API_HOME_CONFIG.getGoodsList()
      return request
        .get(url, { params })
        .then(({ data }: BadicManageType.IAxiosResponse) => {
          return Promise.resolve(data)
        })
        .catch((err: any) => {
          return Promise.reject(err)
        })
    }
  }
  return new HomeService()
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
