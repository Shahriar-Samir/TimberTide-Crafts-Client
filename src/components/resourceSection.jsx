import React from 'react';

const ResourceSection = () => {
    return (
        <div className='h-[500px] flex items-center px-10 gap-10 mt-28'>
        <div className='grid grid-cols-2 grid-rows-2 h-full w-[55%] gap-2 '>
            <div className='col-span-1'>
                <img src='/images/design1.png' className='w-full h-full object-cover'/>
            </div>
            <div className='col-span-1'>
                <img src='/images/blueprint1.png' className='w-full h-full object-cover'/>
            </div>
            <div className='col-span-1'>
                <img src='/images/design2.jpg' className='w-full h-full object-cover'/>
            </div>
            <div className='col-span-1'>
                <img src='/images/blueprint2.png' className='w-full h-full object-cover'/>
            </div>
        </div>
        <div className='w-[45%] flex flex-col gap-5'>
        <h1 className='text-6xl font-bold'>Crafting Resource Library</h1>
        <p>a treasure trove of invaluable resources for crafters of all levels! Dive into our comprehensive library curated with downloadable guides, templates, patterns, and reference materials tailored specifically for jute and wooden crafts. Explore a variety of categories including beginner's guides, advanced techniques, project ideas, and sustainability tips, designed to empower crafters to unlock their creativity and enhance their skills. Whether you're just starting out on your crafting journey or seeking to expand your expertise, the Crafting resource library is your go-to destination for endless inspiration, learning, and growth. Browse, download, and bookmark your favorite resources to embark on a fulfilling and enriching crafting experience!</p>
        </div>
  
    </div>
    );
};

export default ResourceSection;