//login
//after-login
const initState = {
    root: 'login',
}

const ActionsType = {
    CHANGE_ROOT : 'CHANGE_ROOT'
}

export const actionCreators = {
    changeRoot: (root) => {
        return {
            root:root,
            type: ActionsType.CHANGE_ROOT
        }
    }
}

export default function UserReducer(state=initState, action = {}){
    switch (action.type){
        case ActionsType.CHANGE_ROOT:
            return {
                root: action.root
            }

        default:
            return{
                ...initState
            }
    }
}