import React from 'react';

const CoinCard = ({ coin }) => {
    console.log(coin);
    const { image, name, symbol } = coin;
    return (
        <div className='flex justify-between bg-white w-[250px] rounded-2xl shadow-lg p-5'>
            <div>
                <img className='mx-auto object-cover rounded-full h-16 w-16' src={image} alt="coinImg" />
            </div>
            <div className='align-middle'>
                <h2 className='text-gray-600 font-medium'>{name}</h2>
                <p className='text-xs text-gray-400'>{symbol}</p>
            </div>
        </div>
    );
};

export default CoinCard;