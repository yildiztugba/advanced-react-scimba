import React from "react"
import {userContextConsumer} from "./userContext"
function Header (){
    return(
        <userContextConsumer>
            {
                ({username})=>(
                <p>Welcome, {username}!</p> 
                )
            }
        </userContextConsumer>
    )
}
export default Header