import {UserDataSuccessed} from './Action'

let initialstate = [];

export const getUserDataReducer = (state=initialstate,action) =>{
    console.log("&&&&&&&&&&&&&",state,)

    switch(action.type){
        case 'USER_DATA_SUCCESSED':
            return [...state,action.payload]
        default:
            return state;
    }
}