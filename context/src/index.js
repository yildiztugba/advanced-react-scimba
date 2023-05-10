import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {userContextProvider} from "./userContext"

ReactDOM.render(
    <userContextProvider>
        <App />
    </userContextProvider>, 
    document.getElementById("root")
)
