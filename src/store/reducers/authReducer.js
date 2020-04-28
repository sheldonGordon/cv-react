const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR' :
            console.log('login error')
            return {
                ...state,
                authError: 'Echec de connexion'
            }
            
        case 'LOGIN_SUCCESS' :
            console.log('login ok')
            return{
                ...state,
                authError: null
            }

            case 'SIGNOUT_SUCCESS' :
                console.log('logout')
                return state

        default : 
            return state
    }
}

export default authReducer