import * as types from './mutation-types';

const commonModule = {
    state: {
        userInfo: {},
       
      
    },
    mutations: {
        
        [types.UPDATE_USER_PROFILE]: (state: any,userinfo: any) => {
           
            state.userInfo =userinfo;
        },
       
    },
    actions: {
        updateUserInfo: (context: any,userinfo: any) =>
        {     
           context.commit(types.UPDATE_USER_PROFILE,userinfo);
        },
       
        
    },
    getters: {
        getUserInfo: (state: any) => {
            return state.userInfo;
        },
        
    }
}

export default commonModule;