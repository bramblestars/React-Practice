import React from 'react';
import { StateContext } from '../stateContext';

class Login extends React.Component {

    render() {
        return (
        <h1>Login Page</h1>
        )
    }
}

Login.contextType = StateContext;

export default Login;