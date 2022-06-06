import React from "react";
import Joi from "joi-browser";
import Form from "./Common/Form";

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

    doSubmit = () => {
        // Call the server
        console.log("submit");
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