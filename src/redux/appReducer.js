import { Auth } from "./authReducer";
import { requestUsers } from "./users-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initilialState = {
    initialized: false,
};

const appReducer = (state = initilialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;

    }
};

export const intilializedSuccess = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => async (dispatch) => {
    let promiseAuth =  dispatch(Auth(),
    requestUsers()
    );
       await Promise.all([promiseAuth])
            dispatch(intilializedSuccess());
   

}

export default appReducer;