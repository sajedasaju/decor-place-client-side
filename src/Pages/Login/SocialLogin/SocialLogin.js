import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/social/google.png'
import auth from './../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (googleUser) {
        navigate('/')
    }
    useEffect(() => {

        if (googleError) {
            toast.error(`${googleError?.message}`)

        }

    }, [googleError])

    return (
        <div>
            <div className='flex items-center justify-center'>
                <div style={{ height: '1px' }} className='bg-teal-500	 w-1/2'></div>
                <p className='mt-2 px-2 text-white'>OR</p>
                <div style={{ height: '1px' }} className='bg-teal-500	 w-1/2'></div>
            </div>


            <div>
                <button onClick={() => signInWithGoogle()} className='mt-0 w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded text-white flex items-center justify-center mt-5'  >
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <ToastContainer></ToastContainer>

            </div>
        </div>
    );
};

export default SocialLogin;