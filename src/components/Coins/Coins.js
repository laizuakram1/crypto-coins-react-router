import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([])
    console.log(coins);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
            .then(res => res.json())
            .then(data => setCoins(data));
    }, [])
    return (
        <div className='px-5'>
            <h2 className='text-center text-4xl mt-12 font-mono font-medium'>Available Crypto Coins</h2>
            <p className='text-center text-gray-500 font-medium text-2xl'>Total Coins: {coins.length}</p>
            <div className='grid grid-cols-4 gap-4 mt-10'>
                {
                    coins.map(coin => <CoinCard
                        key={coin.id}
                        coin={coin}
                    ></CoinCard>)
                }
            </div>

        </div>
    );
};

export default Coins;