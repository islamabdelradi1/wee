import React from 'react'
import { useState } from 'react'
import datadmat from "./Data5dmat"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function ProductsListeService() {
const[items,setitems] =useState(datadmat);
const filterItem =(categItem) => {
    const updatedItems = datadmat.filter((curElem)=>{
        return curElem.cat === categItem;
    });
    setitems(updatedItems);
}
    return (
<>


<div className='p-5' data-aos="zoom-in">

<Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}

            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
            <button className='btnnn' value='mobile' onClick={()=> filterItem('mobile')}>
                    <img src="../img/_mobile.png" alt="all_icon.png" />
                    خدمات مكالمات الموبايل
            </button>
            </SwiperSlide>
            <SwiperSlide>
            <button className='btnnn' value="Raset" onClick={()=> filterItem('Raset')}>
                <img src="../img/_balance.png" alt="fixed_broadband_h" />
                خدمات الرصيد
                </button>
            </SwiperSlide>
            <SwiperSlide>
                
            <button className='btnnn' value="elardy" onClick={()=> filterItem('elardy')} >
                <img src="../img/_telephone.png" alt="fixed_voice_h" />
                خدمات التليفون الارضى
                </button>
            </SwiperSlide>
            <SwiperSlide>
            <button className='btnnn' value="internet" onClick={()=> filterItem('internet')}>
                <img src="../img/_wifi.png" alt="mobile_h" />
                خدمات الانترنت
                </button>
            </SwiperSlide>
            <SwiperSlide>
            <button className='btnnn' value="dawly"  onClick={()=> filterItem('dawly')}>
                <img src="../img/_international-roaming.png" alt="bundles_h" />
                المكالمات الدوليه والتجوال
                </button>
            </SwiperSlide>
            <SwiperSlide>
            <button className='btnnn' value="trfeh"  onClick={()=> filterItem('trfeh')}>
                <img src="../img/_entertainment.png" alt="bundles_h" />
                الترفيه
                </button>
            </SwiperSlide>
            <SwiperSlide>
            <button className='btnnn' value="Other"  onClick={()=> filterItem('Other')}>
                <img src="../img/_other-services.png" alt="bundles_h" />
                خدمات اخرى
                </button>
            </SwiperSlide>
        </Swiper>




</div>
<div className='d-flex flex-wrap container ' data-aos="zoom-in">
                {items.map((item) => {
                    const { id, title, img, cat, paragraph} = item;
                    return (
                        <div className='dev3ard col-4 ' key={id}>
                            <p></p>
                        <img src={img} alt={cat} className="w-25"/>
                        <div className='klmat'>
                        <h5>{title}</h5>
                        <p>{paragraph}</p>
                        <a href="#/">المزيد</a>
                        </div>
                        </div>
                    )
                })}
        </div>
</>
        
    )
}

export default ProductsListeService