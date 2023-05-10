import React from "react"

const {Provider,Consumer} = React.createContext()

class userContextProvider extends React.Component(){
render(){
    state={
        username: "tugba"
    }
    return(
        <Provider value={this.state.username}>
            { this.props.children}
        </Provider>
    )
}

}


export  {userContextProvider, Consumer as userContextConsumer }