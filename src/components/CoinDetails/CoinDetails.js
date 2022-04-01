import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const [coinDetails, setCoinDetails] = useState({});
    const { id } = useParams();
    console.log(coinDetails);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => res.json())
            .then(data => setCoinDetails(data))
    }, [id])


    return (
        <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center px-4 py-5 mt-10'>
            <div>
                <h2 className='text-3xl'>General Info:</h2>
                <div className='text-lg'>
                    <p>Coin Name: {coinDetails.name}</p>
                    <p>Market Cap Rank: {coinDetails.market_cap_rank ? coinDetails.market_cap_rank : 'Not available'}</p>
                    <p>Origin: {coinDetails.country_origin ? coinDetails.country_origin : 'Not available'}</p>
                    <p>Contract Address: </p>
                    <p>Hashing Algorithm: {coinDetails.hashing_algorithm ? coinDetails.hashing_algorithm : 'Not available'}</p>
                    <p>Genesis Date: {coinDetails.genesis_date ? coinDetails.genesis_date : 'Not available'}</p>
                    <p>Last Updated: {coinDetails.last_updated ? coinDetails.last_updated : 'Not available'}</p>
                </div>
                <h2 className='text-3xl mt-5'>Scores:</h2>
                <div>
                    <p>Community Scores: {coinDetails.community_score ? coinDetails.community_score : 'Not available'}</p>
                    <p>Developers Scores: {coinDetails.developer_score ? coinDetails.developer_score : 'Not available'}</p>
                    <p>Liquidity Score: {coinDetails.liquidity_score ? coinDetails.liquidity_score : 'Not available'}</p>
                    <p>Public Interest Score: {coinDetails.public_interest_score ? coinDetails.public_interest_score : 'Not available'}</p>
                </div>

            </div>
            <div>
                <img src={coinDetails.image?.large} alt='coinImg' />
            </div>
        </div>
    );
};

export default CoinDetails;