import React from 'react';
import './NotFound.css'
import notfound from '../../../images/notFound/dribbble_1.gif'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/')
    }
    return (
        <section className='notFound'>
            <div>
                <h1 className='text-center four-o-four'>404</h1>

            </div>
            <div className='container mx-auto flex flex-col	justify-center items-center h-full	'>
                <h1 className='text-white  w-full	align-bottom	 text-center four-o-four-h1-color'>Sorry Searched Page is Not Found</h1>
                <button onClick={navigateHome} className='bg-yellow-500	 hover:bg-yellow-400	text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:bg-yellow-600	rounded'>Go to Home</button>
            </div>
        </section>
        // <section className="page_404">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-sm-12 ">
        //                 <div className="col-sm-10 col-sm-offset-1  text-center">
        //                     <div className="four_zero_four_bg">
        //                         <h1 className="text-center ">404</h1>


        //                     </div>

        //                     <div className="contant_box_404">
        //                         <h3 className="h2">
        //                             Look like you're lost
        //                         </h3>

        //                         <p>the page you are looking for not avaible!</p>

        //                         <a href="" className="link_404">Go to Home</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default NotFound;