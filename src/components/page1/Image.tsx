import React from 'react';
import Background from '../../assets/pic_page1/Background.png'
function Image() {
    return (
        <div className='w-full h-full'>
            <img src={Background} alt='background' className='w-screen h-screen' />
        </div>
    );
}

export default Image;