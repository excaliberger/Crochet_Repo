import React from 'react';
import Carousel from 'react-img-carousel'

export default function PatternDisplayModal({ visible, setVisible, handleToggle }) {

    require('react-img-carousel/lib/carousel.css');

    const imgs = require.context('/Users/hermajesty/Desktop/bootcamp/TrueCoders/Crochet_Repo/src/client/public/img');
    const imgList = imgs.keys().map(singleImg => {
        return (
            <img className="image" src={`/img/${singleImg}`}/>
        )
    });

    return (
        <div className='modal-container'>
            <div><p>Modal is correctly displaying</p></div>
            <div><button onClick={handleToggle}>close</button></div>
            <div>
                <Carousel 
                    slideHeight="100px" 
                    slideWidth="100px" 
                    viewportHeight="200px" 
                    dots="false"
                    // lazyLoad="true"
                    // imagesToPrefetch="auto"
                    >
                {imgList}
                </Carousel>
            </div>
        </div>
    )
}