import React from 'react';

const Footer = () => {
    return (
        <div>
            <p className="text-white text-center mt-2"><small>copyright @ {new Date().getFullYear()}</small></p>
        </div>
    );
};

export default Footer;