import * as actionTypes from '../action';
const initialState={
    header:true,
    sidebar:true,
    footer:true,
    loginpage:false,
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case actionTypes.HEADER:
        return{
            ...state,
            header:!state.header
        };
        case actionTypes.SIDEBAR:
        return{
            ...state,
            sidebar:!state.sidebar
        };
        case actionTypes.FOOTER:
        return{
            ...state,
            footer:!state.footer
        };
        case actionTypes.LOGINPAGE:
        return{
            ...state,
            loginpage:!state.loginpage
        };
        default :
        return state;
    }
}

export default reducer;