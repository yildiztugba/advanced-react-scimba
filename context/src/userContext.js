import React from "react"

const {Provider,Consumer} = React.createContext()

class userContextProvider extends React.Component(){
    state={
        username: "tugba"
    }

    handleClick =(username)=>{
    this.setState({username})
    }

    render(){
    return(
        <Provider value={{username: this.state.username, handleClick: this.handleClick}}>
            { this.props.children}
        </Provider>
    )
}

}


export  {userContextProvider, Consumer  }