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
            <div className='flex items-center justify-center mt-1'>
                <div style={{ height: '1px' }} className='bg-[#B8880B]	 w-1/2'></div>
                <p className=' px-2 text-black'>OR</p>
                <div style={{ height: '1px' }} className='bg-[#B8880B]	 w-1/2'></div>
            </div>


            <div>
                <button onClick={() => signInWithGoogle()} className=' hover:shadow-gray-500/40 rounded text-white flex items-center justify-center mt-5 transition duration-500 bg-orange-400 hover:bg-orange-400/75 text-white font-bold py-1 px-4 rounded focus:outline-none w-full focus:shadow-outline'  >
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <ToastContainer></ToastContainer>

            </div>
        </div>
    );
};

export default SocialLogin;