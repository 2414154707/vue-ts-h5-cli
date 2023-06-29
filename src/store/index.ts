/*
 * @Author: hdq
 * @Date: 2023-06-29 21:08:23
 * @Last Modified by: hdq
 * @Last Modified time: 2023-06-29 21:25:43
 */
//@ts-nocheck
import { createStore } from 'vuex'
import { BadicManageType } from '@/interface/common'
import { CommitInterface } from '@/interface/store'

const moduleCreator = function () {
  const modules: BadicManageType.Data<CommitInterface<string>> = {}
  const context = require.context('./modules', true, /\.ts|js$/)
  const files = context.keys().map(key => context(key))
  console.log(files, 'files')

  files.forEach(file => {
    modules[file.default.name] = file.default
  })
  console.log(modules, 'modules')
}
moduleCreator()
export default createStore({
  modules: moduleCreator()
})
