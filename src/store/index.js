/* eslint-disable */
// SuperVuex实例
import { SuperVuex } from 'super-vuex'
import persistedState from 'vuex-persistedstate'
// 引入模块
import tokenModule from './token.js'
import addressModule from './address'

const Main = new SuperVuex()
// 装载模块
Main.setModule(tokenModule, addressModule)
Main.setPlugin(persistedState());
export default Main.init()