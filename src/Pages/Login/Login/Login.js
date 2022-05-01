import React from 'react';
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigateRegister = () => {
        navigate('/register')
    }
    const from = location.state?.from?.pathname || "/";

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        generalError: "",
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);


    if (user) {
        navigate(from, { replace: true });
    }

    const handleEmailChange = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, emailError: "" });
        }
        else {
            setErrors({ ...errors, emailError: "Invalid Email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePasswordChange = (event) => {
        const passwordRegex = /.{6,}/
        const validPassword = passwordRegex.test(event.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "Password must be up to 6 length" })
            setUserInfo({ ...userInfo, password: "" })

        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    const resetPassword = async () => {

        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast("Sent Email")
        }
        else {
            toast("Please enter your email")
        }

    }


    useEffect(() => {
        let error = hookError;
        if (error) {
            if (error?.code === 'auth/invalid-email') {
                toast("Invalid email provided, please provide a valid email");
            }
            else if (error?.code === 'auth/user-not-found') {
                toast("User Not Found");
            }
            else if (error?.code === 'auth/wrong-password') {
                toast("Wrong password.");
            }
            else {
                toast("Something went wrong");
            }

        }

    }, [hookError])

    return (
        <div className=' login-container flex flex-col justify-center border-solid rounded-md shadow-xl'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-gray-300 p-8 px-8 rounded-lg'>
                <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>

                    <label>Email</label>
                    <input onChange={handleEmailChange} className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" name="email" id="email" placeholder='email' />
                    {errors?.emailError && <p className='error-message'>{errors.emailError}</p>}


                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input onChange={handlePasswordChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name="password" id="password" placeholder='Password' />
                    {errors?.passwordError && <p className='error-message'>{errors.passwordError}</p>}

                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
                    <Link to='/login' onClick={resetPassword}>Forget password?</Link>
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p>New to Decor Place?</p>
                        <Link to='/register' onClick={navigateRegister} className='text-primary pe-auto text-decoration-none'>Please Register</Link>

                    </div>

                </div>
                <ToastContainer />
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded text-white'>Sign in</button>
                <SocialLogin></SocialLogin>

            </form>
        </div>

    );
};

export default Login;