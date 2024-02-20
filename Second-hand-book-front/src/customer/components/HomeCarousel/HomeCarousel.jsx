import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarouselData } from './HomeCarouselData';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const itemsLength = Array.from({ length: 5});

const HomeCarousel = () =>{
    const items = HomeCarouselData.map((item)=><img className='cursor-pointer'
    role='presentation' src={item.image} alt=""/>)

    return(
        <AliceCarousel
        mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
        
        items={items}/>)
}

export default HomeCarousel;