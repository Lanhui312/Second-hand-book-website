import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarouselData } from './HomeCarouselData';

const HomeCarousel = () =>{
    const items = HomeCarouselData.map((item)=><img className='cursor-pointer'
    role='presentation' src={item.image} alt=""/>)

    const sizedItem = items.map((items) => {
        const style = { width: 500};
        return (<div className="item" style={style}>{items}</div>);
    });

    return(
        <AliceCarousel
        mouseTracking
        autoWidth
        autoHeight
        controlsStrategy="alternate"
        
        items={sizedItem}/>)
}

export default HomeCarousel;