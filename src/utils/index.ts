/*
 * @Author: hdq
 * @Date: 2023-06-29 23:46:35
 * @Last Modified by: hdq
 * @Last Modified time: 2023-06-29 23:57:23
 */
import { BASE_URL } from '@/config'
export const resolveUrl = (url: string): string => {
  return BASE_URL + url
}
