import React from 'react';

const ContestSection = () => {
    return (
        <div className='h-[450px] flex items-center px-10'>
            <div>
            <h1 className='text-6xl font-bold'>Craft Masters Challenge</h1>
            <p>Embark on the Craft Masters Challenge and put your crafting skills to the test! Create stunning jute and wooden masterpieces that showcase your talent and creativity. Compete against fellow crafters, earn recognition for your craftsmanship, and win fabulous prizes. Unleash your imagination and join the ultimate crafting showdown today!</p>
            </div>
            <div className='flex'>
            <img src='/images/contest.jpg' className=''/>
            <img src='/images/contest.jpg' className=''/>
            </div>
        </div>
    );
};

export default ContestSection;