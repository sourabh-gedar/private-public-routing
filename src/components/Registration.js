import React from "react";
import { useNavigate } from "react-router-dom";

function Registration({HandleSetData }){
    const navigate = useNavigate()
    function handleNavigate(){
        navigate('/login')
    }
    return(<>
    <h1>Registration</h1>
    <input type="email" onChange={(e)=>{HandleSetData(e)}} name="email" placeholder="Enter Email" /><br/>
    <input type="text" onChange={(e)=>{HandleSetData(e)}} name="password" placeholder="Enter password" /><br/>
    <button onClick={handleNavigate} > Log in</button>
    </>)
}


export default Registration