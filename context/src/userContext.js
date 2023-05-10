import React from "react"

const {Provider,Consumer} = React.createContext()

class userContextProvider extends React.Component(){
render(){
    return(
        <Provider>
            this.props.children
        </Provider>
    )
}

}


export  {userContextProvider, Consumer as userContextConsumer }