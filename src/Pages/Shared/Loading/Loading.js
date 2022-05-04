import React from 'react';
import loadingSpinner from '../../../images/loading/loading1.gif'

const Loading = () => {
    return (
        <div className='w-full h-screen items-center flex items-center justify-center'>
            <img src={loadingSpinner} className=' w-14	h-14 text-center' alt="" />
        </div>
    );
};

export default Loading;