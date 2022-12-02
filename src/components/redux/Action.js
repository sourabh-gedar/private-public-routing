
export  const UserFatchData = (payload) =>{
    return{
        type:"USER_DATA_FATCHING",
        payload:payload
    }
}

export const  UserDataSuccessed = (payload) =>{
    return{
        type:"USER_DATA_SUCCESSED",
        payload:payload
    }
}