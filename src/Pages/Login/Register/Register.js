import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import Loading from './../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        generalError: "",
    })
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // const [updateProfile, updating, error] = useUpdateProfile(auth);


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


    const handleConfirmPasswordChange = (event) => {
        if (userInfo.password === event.target.value) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value })
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setUserInfo({ ...userInfo, confirmPassword: "" })
            setErrors({ ...errors, passwordError: "Password and confirm password does not match" })
        }
    }

    if (user) {
        navigate('/')
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);

    }
    useEffect(() => {
        if (hookError) {

            if (hookError?.code === 'auth/invalid-email') {
                toast("Invalid email provided, please provide a valid email");
            }
            else if (hookError.code === 'auth/missing-email') {
                toast("Missing Email.");
            }
            else if (hookError.code === 'auth/wrong-password') {
                toast("Wrong password.");
            }
            else if (hookError.code === 'auth/internal-error') {
                toast("Internal Error.");
            }
            else {
                toast.error(`${hookError?.message}`)
            }

        }

    }, [hookError])

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='bg-gray-100 login-container flex flex-col justify-center border-solid rounded-md shadow-xl'>
            <form onSubmit={handleRegister} className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                <h2 className='text-3xl text-white font-bold text-center'>Register</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input onChange={handleEmailChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" name="email" id="email" placeholder='email' required />

                </div>
                {errors?.emailError && <p className='error-message'>{errors.emailError}</p>}

                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input onChange={handlePasswordChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name="password" id="password" placeholder='Password' required />

                </div>


                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Confirm Password</label>
                    <input onChange={handleConfirmPasswordChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name="confirm-password" id="confirm-password" placeholder='confirm-password' required />

                </div>
                {errors?.passwordError && <p className='error-message'>{errors.passwordError}</p>}

                <div className='flex justify-between text-gray-400 py-2'>
                    <p>Already have an account?</p>
                    <Link to='/login' onClick={navigateLogin} className='text-primary pe-auto text-decoration-none'>Please Login</Link>

                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded text-white'>Register</button>
                <ToastContainer></ToastContainer>
                <SocialLogin></SocialLogin>

            </form>
        </div>
    );
};

export default Register;