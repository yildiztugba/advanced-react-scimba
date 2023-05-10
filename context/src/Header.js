import React from "react"
import {Consumer} from "./userContext"
function Header (){
    return(
        <Consumer>
            {
                ({username})=>(
                <p>Welcome, {username}!</p> 
                )
            }
        </Consumer>
    )
}
export default Header