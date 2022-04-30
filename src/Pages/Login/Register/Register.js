import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className='bg-gray-100 login-container flex flex-col justify-center border-solid rounded-md shadow-xl'>
            <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                <h2 className='text-3xl text-white font-bold text-center'>Register</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" name="email" id="email" placeholder='email' required />

                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name="password" id="password" placeholder='Password' required />

                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Confirm Password</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name="confirm-password" id="password" placeholder='confirm-password' required />

                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p>Already have an account?</p>
                    <Link to='/login' onClick={navigateLogin} className='text-primary pe-auto text-decoration-none'>Please Login</Link>

                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded text-white'>Register</button>
                <SocialLogin></SocialLogin>

            </form>
        </div>
    );
};

export default Register;