import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
function PublicRoutes({Componenet ,authData, userData,HanleAuthData,HandleSetData,setArr,arr}){

    const navigate = useNavigate()
    useEffect(()=>{
        const varification  = localStorage.getItem("isAuthenticate")
        const finalVarification = JSON.parse(varification)
        console.log(finalVarification,"varification")
            if(finalVarification === true){
                navigate('/dashboard')
            }    
    })

    return(<>
    <div>
        <Componenet HandleSetData={HandleSetData} 
        setArr={setArr} arr={arr}
        authData={authData}
        HanleAuthData={HanleAuthData}
        userData={userData}
        />
    </div>

    </>)
}

export default PublicRoutes;