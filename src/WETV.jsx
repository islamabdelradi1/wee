import React from 'react'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function WETV() {
    return (
        <div>
            <div className='titledalel140 d-flex'>
                <h2>الترفيه</h2>
                <a href="#/">( المصرية للإتصالات )</a>
            </div>
            <div className='container p-5'>
            <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}

            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide className='slidimg'>
                <a href="#/">
                <img src="../img/mobile.png" alt="img" />
                    خدمات مكالمات الموبايل      
                </a>
            </SwiperSlide>
            <SwiperSlide className='slidimg'>
            <a href="#/">
                <img src="../img/_balance.png" alt="img" />
            خدمات الرصيد
            </a>
            </SwiperSlide>
            <SwiperSlide className='slidimg'>
            <a href="#/">

                <img src="../img/_telephone.png" alt="img" />
            خدمات التلفون الارضي
            </a>

            </SwiperSlide>
            <SwiperSlide className='slidimg'>
            <a href="#/">

                <img src="../img/_wifi.png" alt="img" />
            خدمات الانترنت
            </a>

            </SwiperSlide>
            <SwiperSlide className='slidimg'>
            <a href="#/">

                <img src="../img/_international-roaming.png" alt="img" />
            المكالمات الدولية والتجوال
            </a>

            </SwiperSlide>
            <SwiperSlide className='slidimg'>
            <a href="#/">

                <img src="../img/_entertainment.png" alt="img" />
            الترفيه
            </a>

            </SwiperSlide>
            <SwiperSlide className='slidimg'>
            <a href="#/">

                <img src="../img/_other-services.png" alt="img" />
            خدمات اخري
            </a>
            </SwiperSlide>
        </Swiper>
            </div>
            <div className='wetv'>
                <div className='logowetv'>
                    <img src="../img/we.tv-white.png" alt="" />
                    <h5>WE TV</h5>
                </div>
                <div className='wetvbtn'>
                <p>هى مكتبة من الافلام و المسلسلات والبرامج , تتيح لعملاء الموبايل إمكانية تصفح المحتوى الخاص بالمكتبة بدون فواصل او اى مواد اعلانية من خلال اشتراك يومى او شهرى , بإلاضافة الى تشغيل متوافق على جميع انواع اجهزة التليفون المحمول الذكية , الاجهزة اللوحية او اجهزة التلفاز الذكية.</p>
                <p className='pps3r'>طريقة إستخدام الخدمة</p>
                <ul>
                    <li>من خلال الموقع الالكترونى <a href="//wetv.eg">www.wetv.eg.</a></li>
                    <li>الرسائل النصية, عن طريق ارسال 15 فى رسالة قصيرة الى 4040.</li>
                    <li>من خلال الكود التالى #404*</li>
                    <li>من خلال الفروع.</li>
                </ul>
                <p className='pps3r'>سعر الخدمة</p>
                <p>جنيه واحد يومياً يخصم من الرصيد لعملاء WE موبايل.</p>
                <p className='pps3r'>الشروط</p>
                <li>الخدمة متاحة لعملاء WE موبيل.</li>
                <li>الاستهلاك من الميجابايت يخصم من باقة الانترنت الخاصة بالعميل.</li>
            </div>
            </div>
            <div className='container'>
            <h5 className='p-2'>خدمات أخرى</h5>
            <Swiper
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={false}
            loopFillGroupWithBlank={true}

            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide className='slidimg2 mt-5 mb-5'>
                <a href="#/">
                    كول تون
                <img src="../img/call-tone.png" alt="img" />
                    <a className='btns' href="#/">
                    المزيد    
                    </a>     
                </a>
            </SwiperSlide>
            <SwiperSlide className='slidimg2  mt-5 mb-5'>
            <a href="#/">
            مسابقة العب واكسب
                <img src="../img/Purple+play+and+win+icon.png" alt="img" />
            <a href="#/" className='btns'>المزيد</a>
            </a>
            </SwiperSlide>
        </Swiper>
            </div>
        </div>
    )
}

export default WETV
