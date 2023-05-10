import React from "react"

const {Provider,Consumer} = React.createContext()

class userContextProvider extends React.Component(){
render(){
    state={
        username: "tugba"
    }

    handleClick = (username)=>{
    setState(username)
    }
    return(
        <Provider value={{username, handleClick}}>
            { this.props.children}
        </Provider>
    )
}

}


export  {userContextProvider, Consumer as userContextConsumer }