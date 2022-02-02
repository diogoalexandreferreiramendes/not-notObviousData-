import React from "react";
import './SignUp.css';
import {useForm} from "react-hook-form";
import { login } from "../firebase";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const {register, handleSubmit} = useForm()
    let history = useHistory()

    const redirect = () => {
        history.push("/dashboard")
    }


    const onSubmit = async (data, e) => {
        
        await login(data.email, data.password)
        e.target.reset(data)
        redirect()
        
    }

    return (
        <div className="divSuperInput">
            <div className="divSignup">
                <form onSubmit={handleSubmit(onSubmit)} id="signUpForm">
                    <fieldset>
                        <h1> Login </h1>
                        <input placeholder="email" {...register("email", { required: true, maxLength: 50})} />
                        <input type="password" placeholder="password" {...register("password", {required: true, maxLength:20})}/>
                        <input type="submit" value="Submit"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
