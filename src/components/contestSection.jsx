import React from 'react';

const ContestSection = () => {
    return (
        <div className='h-[450px] flex items-center mx-auto w-10/12 mt-24 px-10'>
            <div className='w-1/2'>
            <h1 className='text-6xl font-bold'>Craft Masters Challenge</h1>
            <p className='mt-5'>Embark on the Craft Masters Challenge and put your crafting skills to the test! Create stunning jute and wooden masterpieces that showcase your talent and creativity. Compete against fellow crafters, earn recognition for your craftsmanship, and win fabulous prizes. Unleash your imagination and join the ultimate crafting showdown today!</p>
            <button className='btn bg-[#CF883C] hover:bg-[#a56c2f] mt-5 text-white'>Participate</button>
            </div>
 
            <img src='/images/contest.jpg' className='w-1/2'/>

        </div>
    );
};

export default ContestSection;