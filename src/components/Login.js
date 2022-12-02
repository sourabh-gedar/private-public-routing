import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({HanleAuthData,userData , authData}){
    const navigate = useNavigate()

    function handleIsLogin(){
        console.log(userData,"5555555555555555555")
        const {email , password} = userData
        const {authEmail , authPassword} = authData
        if(email==authEmail && password==authPassword){
            console.log(true)
            localStorage.setItem("isAuthenticate",true);
            navigate("/dashboard")  
        }
        else{
            console.log(false)
            localStorage.setItem("isAuthenticate",false);
        
        }
        
    }

    return(<>
    <h1>Login</h1>
    <h3>log in please...</h3>
    <input type="email" onChange={(e)=>{HanleAuthData(e)}} name="authEmail" placeholder="Enter Email" /><br/>
    <input type="text" onChange={(e)=>{HanleAuthData(e)}} name="authPassword" placeholder="Enter password" /><br/>
    <button onClick={handleIsLogin} > Log in</button>
    </>)
}


export default Login