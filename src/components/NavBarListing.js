import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, NavLink, useNavigate } from "react-router-dom";
import { UserDataSuccessed } from './redux/Action'

function NavBarListing({ arr, setArr }) {
    const varLocal = localStorage.getItem("isAuthenticate")
    const isAuthenticate = JSON.parse(varLocal)
    const navigate = useNavigate()
    const data = useSelector(state=>state.data)

    console.log(data,"++++++++++++++++")
    const dispatch = useDispatch()
    function handlePage(e, el) {
        console.log(el)
        if (el == 'Register') {
            navigate('/')
        }
        else if (el == "logout") {
            navigate("/logout")
            setArr(['Register', 'login '])
            localStorage.removeItem('isAuthenticate')
        }
        else {
            navigate(el)
        }

    }
    console.log(isAuthenticate, 'isAuthenticate isAuthenticate')

    async function fetchUserData(){
      let data = await  fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json =>dispatch( UserDataSuccessed(json)))
    }

    useEffect(() => {
        if (isAuthenticate == true) {

            fetchUserData()
            setArr(["user list", "logout"])

        } else {
            setArr(['Register', 'login '])  
        }
    }, [isAuthenticate])

    return (
        <>
            <div>
                <ul>
                    {arr.map((el, i) => {
                        return <React.Fragment key={i} >
                            <li onClick={(e) => { handlePage(e, el) }} >
                                <NavLink>
                                    {el}
                                </NavLink>
                            </li>
                        </React.Fragment>
                    })}
                </ul>
            </div>

        </>
    )
}

export default NavBarListing