import Vue from 'vue';
import Vuex from 'vuex';
/* Modules imports will be here */
import commonModule from './Modules/CommonStore'
/* Modules imports will be here */
Vue.use(Vuex);
export default new Vuex.Store({
 modules: {
  
    commonModule:commonModule
 }
})
