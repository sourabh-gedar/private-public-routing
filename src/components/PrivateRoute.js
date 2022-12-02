import React, { useEffect } from "react";
import {Route , useNavigate} from 'react-router-dom'
// {Componenet ,HanleAuthData ,childern}
function PrivateRoute({Componenet ,HanleAuthData ,childern}){

    const navigate = useNavigate()
    useEffect(()=>{
        const varification  = localStorage.getItem("isAuthenticate")
        const finalVarification = JSON.parse(varification)
        console.log(finalVarification,"varification")
            if(!finalVarification){
                navigate('/')
            }    
    })
    return(
        // <Route />
        <div>
            {<Componenet HanleAuthData={HanleAuthData} />}
        </div>
    )
}

export default PrivateRoute;