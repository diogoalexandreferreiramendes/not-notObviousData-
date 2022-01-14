import React from "react";
import './SignUp.css';
import {useForm} from "react-hook-form";

const LoginPage = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="divSuperInput">
            <div className="divSignup">
                <form onSubmit={handleSubmit(onSubmit)} id="signUpForm">
                    <fieldset>
                        <h1> Login </h1>
                        <input placeholder="username" {...register("username", { required: true, maxLength: 20})} />
                        <input type="password" placeholder="password" {...register("password", {required: true, maxLength:20})}/>
                        <input type="submit" value="Submit"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
