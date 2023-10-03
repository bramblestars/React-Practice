import React from 'react';
import connect from '../store/connect';

class Login extends React.Component {

    render() {
        return (
        <h1>Login Page</h1>
        )
    }
}

export default connect(Login);