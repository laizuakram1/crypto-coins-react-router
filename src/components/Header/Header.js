import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-6 flex justify-center md:justify-between shadow-lg'>
            <div className='hidden md:block'>
                <Link className='font-sans font-medium text-3xl text-grey-500' to = '/'>Crypto Coins</Link>
            </div>
            <div className='flex gap-5 text-xl'>
                <Link to = '/'>Home</Link>
                <Link to = '/coins'>Coins</Link>
                <Link to = '/contact'>Contact</Link>
                <Link to = '/about'>About</Link>
                
            </div>
        </div>
    );
};

export default Header;<div>
<Link>Crypto Coins</Link></div>