import React from 'react';

function Text() {
    return (
        <div className='flex flex-col pt-8'>
            <div className='flex pl-20 pt-8 uppercase'>
                <p className='text-3xl text-amber-100 font-medium'>j&m</p>
            </div>
            <div className='flex justify-center pt-44'>
                <p className='text-6xl text-amber-100 font-semibold'>Jeffries & Madison</p>
            </div>
            <div className='flex justify-center pt-11'>
                <p className='text-xl text-amber-100 font-normal'>Professional Photography Studio</p>
            </div>
            <div className='flex justify-center pt-16'>
            <button className='border-solid border-2 border-amber-100 px-9 py-2 text-md text-amber-100 hover:bg-amber-100 hover:text-md hover:text-slate-500'>
                work with us</button>
            </div>
        </div>
    );
}

export default Text;