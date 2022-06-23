import React from "react";
import Joi from "joi-browser";
import Form from "./Common/Form";
import * as UserService from '../services/UserService';
import auth from "../services/AuthService";

class RegisterForm extends Form {
    state = { 
        data: { username: "", password: "", name: "" },
        errors: {}
     };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
        name    : Joi.string().required().label("Name")
    };

    doSubmit = async () => {
        try {
            const response = await UserService.register(this.state.data); 
            // console.log(response)
            auth.loginWithJwt(response.headers["x-auth-token"]);
            window.location = "/";
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = error.response.data;
                this.setState({ errors });
            }
        }
    }

    render() { 
        return (
            <>
                <div>
                    <h1>Register</h1>
                    <form onSubmit={this.handleSubmit} >
                        {this.renderInput('username', 'Username')}
                        {this.renderInput('password', 'Password', "password")}
                        {this.renderInput('name', 'Name')}
                        {this.renderButton('Register')}
                    </form>
                </div>
            </>
        );
    }
}
 
export default RegisterForm;