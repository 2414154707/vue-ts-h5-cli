/*
 * @Author: hdq
 * @Date: 2023-06-29 23:58:48
 * @Last Modified by: hdq
 * @Last Modified time: 2023-06-30 00:26:30
 */
import { resolveUrl } from '@/utils'
export const API_HOME_CONFIG = {
  getCarouselList: () => resolveUrl('/carousel/list'),
  getGoodsList: () => resolveUrl('/product/list')
}
