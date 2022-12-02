
import React from "react"
import { useSelector } from "react-redux"

function UserList (){

    const data = useSelector(state=>state.data)
    console.log("ggggggggggggggggg",data[0])
    return(
        <>
        <h1>hello</h1>
        {
           data[0] ? data[0].map((el,i)=>{
                return(
                    <React.Fragment key={i} >
                        <h3>{el.title}</h3>
                    </React.Fragment>
                )
            }) : <h1>NO data Found</h1>
        }

        </>
    )
}

export default UserList;