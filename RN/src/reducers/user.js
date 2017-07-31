
const initState = {
    isLogin: false,
    isLoginning:false,
    token: '',
    profile: {}
}

const ActionsType = {
    IS_FETCHING_USER_INFO : 'IS_FETCHING_USER',
    FETCHING_USER_INFO_SUCCESS : 'FETCHING_USER_INFO_SUCCESS',
    FETCHING_USER_INFO_FAIL : 'FETCHING_USER_INFO_FAIL',
    IS_LOGINNING : 'IS_LOGINNING',
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',
    LOGIN_FAIL : 'LOGIN_FAIL'
}

export const actionCreators = {
    fetchingUserInfo: () => {

    },
    fetchingUserInfoSuccess: ()=>{

    },
    fetchingUserInfoFail: ()=>{

    },
    login: () => {

    },
    loginSuccess: ()=>{

    },
    loginFail: ()=>{

    }
}

export default function UserReducer(state=initState, action = {}){
    switch (action.type){
        case ActionsType.IS_FETCHING_USER_INFO:
            return Object.assign({},...state,{

            })

        case ActionsType.FETCHING_USER_INFO_SUCCESS:
            return Object.assign({},...state,{

            })

        case ActionsType.FETCHING_USER_INFO_FAIL:
            return Object.assign({},...state,{

            })

        case ActionsType.IS_LOGINNING:
            return Object.assign({},...state,{

            })

        case ActionsType.LOGIN_SUCCESS:
            return Object.assign({},...state,{

            })

        case ActionsType.LOGIN_FAIL:
            return Object.assign({},...state,{

            })

        default:
            return{
                ...initState
            }
    }
}