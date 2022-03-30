import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-2xl text-grey-500' to = '/'>Crypto Coins</Link>
            </div>
            <div className='flex gap-3 text-xl'>
                <Link to = '/'>Home</Link>
                <Link to = '/'>Coins</Link>
                <Link to = '/'>Contact</Link>
                <Link to = '/'>About</Link>
            </div>
        </div>
    );
};

export default Header;<div>
<Link>Crypto Coins</Link></div>