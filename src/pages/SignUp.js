import React, {useState} from 'react'
import './SignUp.css'
import {useForm} from "react-hook-form";
import { signup } from '../firebase';
import { Link, useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import validator from 'validator'
import 'bootstrap/dist/css/bootstrap.min.css';



const SignUp = () => {
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("");
    const [gotologin, setGotologin] = useState(false)
    let history = useHistory()

    const redirect = () => {
        history.push("/dashboard")
    }

    const onSubmit = async (data, e) => {
        const email = data.email
        const password = data.password
        const repeatpassword = data.repeatpassword


        if(!(validator.isEmail(email))){
            setError('Thats not a email')
            e.target.reset(data)
            return
        }

        if(!(password === repeatpassword)){
            setError('The passwords are diferent')
            e.target.reset(data)
            return
        }

        if((password.length < 7)){
            setError('Your password is small')
            e.target.reset(data)
            return
        }

        try{
            await signup( email, password)
            e.target.reset(data)
            redirect()
        }catch(err) {
            setError("This Email is already register")
            setGotologin(true)
            e.target.reset(data)
            return
        }

    }

    return (
        <div className="divSuperInput">
            <div className="divSignup">
                <form onSubmit={handleSubmit(onSubmit)} id="signUpForm">
                    <fieldset>
                        <h1> Sign up </h1>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {gotologin && <div id="linkSignup" className="mb-3"><Link to="/loginpage"> Login </Link></div>}
                        <input type="email" placeholder="email" {...register("email", { required: true, maxLength: 50})} />
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
