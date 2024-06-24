import React from 'react';

function Card() {
    return (
        <div className='bg-amber-100 absolute inset-28 right-28 pt-14'>
                <div className='flex justify-center pt-14 '>
                    <p className='text-5xl text-red-950 font-normal'>Get to know us</p>
                </div>
                <div className='flex flex-col pt-5 '>
                    <div className='flex  justify-center pt-5 ' >
                        <p className='text-lg text-red-950'>Our mission is to preserve life's most special moments. Whether it's a</p>
                    </div>
                    <div className='flex  justify-center pt-2 '>
                        <p className='text-lg text-red-950'> wedding, a birthday, or even a regular day, our pictures capture the</p>
                    </div>
                    <div className='flex  justify-center pt-2 '>
                        <p className='text-lg text-red-950'> energy of life, so you can look back and relive everything again.</p>
                    </div>
                </div>
                <div className='flex justify-center pt-12'>
                <button className='border-solid border-2 border-red-950 px-11 py-2 text-md text-red-950 hover:bg-red-950 hover:text-md hover:text-white'>read more</button>
                </div>
        </div>
    );
}

export default Card;