import React from "react"

const {Provider,Consumer} = React.createContext()

class userContextProvider extends React.Component(){
render(){
    this.state={
        username: "tugba"
    }

   function handleClick (username){
    this.setState(username)
    }

    return(
        <Provider value={{username: this.state.username, handleClick}}>
            { this.props.children}
        </Provider>
    )
}

}


export  {userContextProvider, Consumer as userContextConsumer }