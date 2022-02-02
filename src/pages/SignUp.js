import React from 'react'
import './SignUp.css'
import {useForm} from "react-hook-form";
import { signup } from '../firebase';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const {register, handleSubmit} = useForm();
    let history = useHistory()

    const redirect = () => {
        history.push("/dashboard")
    }

    const onSubmit = async (data, e) => {
        const email = data.email
        const password = data.password
        const repeatpassword = data.repeatpassword
        
        if(!(password && repeatpassword)){
            return 
        }
        
        if(!(password === repeatpassword)) {
            console.log('palavras são diferents')
            return
        }

        if((password.length < 7)){
            console.log('word é pequena')
            return
        }

        await signup( email, password)
        e.target.reset(data)
        redirect()

    }

    return (
        <div className="divSuperInput">
            <div className="divSignup">
                <form onSubmit={handleSubmit(onSubmit)} id="signUpForm">
                    <fieldset>
                        <h1> Sign up </h1>
                        <input placeholder="email" {...register("email", { required: true, maxLength: 50})} />
                        <input type="password" placeholder="password" {...register("password", {required: true, maxLength:20})}/>
                        <input type="password" placeholder="repeat password" {...register("repeatpassword", {required: true, maxLength:20})}/>
                        <input type="submit" value="Submit"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default SignUp
