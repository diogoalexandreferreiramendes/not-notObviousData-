import React, {useState} from "react";
import './SignUp.css';
import {useForm} from "react-hook-form";
import { login } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';
import validator from 'validator'

const LoginPage = () => {
    const {register, handleSubmit} = useForm()
    let history = useHistory()
    const [error, setError] = useState("");
    const [gotosignup, setGotosignup] = useState(false)

    const redirect = () => {
        history.push("/dashboard")
    }

    // this should be the one tho use, but for now 
    // on the inputs the onClick are not good!
    const onSubmit = async (data, e) => {

        if(!(validator.isEmail(data.email))){
            setError('Thats not a email')
            e.target.reset(data)
            return
        }

        try{
            await login(data.email, data.password)
            e.target.reset(data)
            redirect()
        }catch(error){
            if(error.message === 'Firebase: Error (auth/user-not-found).'){
                setError('Email not found, go to signup')
                setGotosignup(true)
                e.target.reset(data)
                return
            }
            if(error.message === 'Firebase: Error (auth/wrong-password).'){
                setError('Password is wrong')
                e.target.reset(data)
                return
            }
        }
    }


    //note on the form should be onSubmit(handleSubmit) in instead onClick 

    return (
        <div className="divSuperInput">
            <div className="divSignup">
                <form onSubmit={handleSubmit(onSubmit)} id="signUpForm">
                    <fieldset>
                        <h1> Login </h1>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {gotosignup && <div id="linkSignup" className="mb-3"><Link to="/signup"> Signup </Link></div>}
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
