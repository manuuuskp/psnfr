import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./Slider.scss";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { useQuery } from 'react-query';

async function getBanners() {
  const resp = await fetch('http://localhost:3001/banners');
  return await resp.json();
}

const Slider =  () => {
    const cache = {};
    function importAll(r) {
        r.keys().forEach((key) => (cache[key] = r(key)));
    }
    importAll(require.context("./../../static/images/offers", true, /\.(png|jpg|svg)$/));
    
    const images = {};
    Object.entries(cache).forEach(cur => {
        const splitName = `/static/images/offers/${cur[0].replace("./", "")}`;
        images[splitName] = cur[1].default;
    });

   const { isLoading, error, data } = useQuery('banners', getBanners);

   if(isLoading) {
    return <h2>Loading...</h2>
   }


  return (
    <div className='slider__container'>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      navigation
      loop
      pagination={{clickable: true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            data.map(image => <SwiperSlide key={image.id}><img  src={images[image.bannerImageUrl]} alt={image.bannerImageAlt} /></SwiperSlide>)
        }
    </Swiper>
    </div>
  );
};

export default Slider;