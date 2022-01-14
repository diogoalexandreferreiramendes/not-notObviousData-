import React from 'react'
import './SignUp.css'
import {useForm} from "react-hook-form";

const SignUp = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="divSuperInput">
            <div className="divSignup">
                <form onSubmit={handleSubmit(onSubmit)} id="signUpForm">
                    <fieldset>
                        <h1> Sign up </h1>
                        <input placeholder="username" {...register("username", { required: true, maxLength: 20})} />
                        <input placeholder="email" {...register("email", { required: true, maxLength: 50})} />
                        <input type="password" placeholder="password" {...register("password", {required: true, maxLength:20})}/>
                        <input type="submit" value="Submit"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default SignUp
