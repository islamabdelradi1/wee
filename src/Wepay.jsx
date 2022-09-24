import React from 'react'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Wepay() {
    return (
        <div>
            <div className='titledalel140 d-flex'>
                <h2>خدمات اخرى</h2>
                <a href="#/"> المصرية للإتصالات WE Mobile Packages</a>
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
                    <img src="../img/WE+Pay+1024+X+1024-min.png" alt="" />
                    <h5>WE Pay</h5>
                </div>
                <div className='wetvbtn'>
                <p>هي محفظة إلكترونية بتوفرلك مجموعة من الخدمات لتسهيل معاملاتك المالية مثل إيداع وسحب الأموال ودفع فواتير WE والمرافق  مثل (الكهرباء و المياه و الغاز) والتبرعات وغيرها، وتقدر تستخدمها في أي وقت و في أي مكان بسهولة وأمان.</p>
                <p className='fw-bold'>WE PAY  سهلتلك الدنيا على الأخر...، دلوقتي تقدر تعمل إيداع أو سحب لفلوسك من خلال أي فرع عليه علامة فوري.</p>
                <p>للاشتراك في الخدمة</p>
                <ul>
                    <li>قم بزيارة أقرب فرع من فروع WE ومعاك بطاقة الرقم القومي سارية وخط موبايل WE باسمك.</li>
                    <li>املأ طلب الإشتراك في محفظة WE Pay ووقع على العقد.</li>
                    <li>حمّل تطبيق WE Pay  من خلال :</li>
                    <div className='down'> 
                        <img src="../img/store_ar.png" alt=""/>
                        <img src="../img/google_ar.png" alt="" />
                    </div>
                    <li>افتح البرنامج واختر مسجل مسبقاً؟ تفعيل الحساب.</li>
                    <li>املأ البيانات ( الاسم رباعي – الرقم القومي – رقم موبايل WE مفعل) ثم وافق على الشروط والأحكام</li>
                    <li>ستصلك رسالة نصية بها كود التفعيل.</li>
                    <li>انشئ الرقم السري  الخاص بالتطبيق و المكون من 6  أرقام  لحسابك (بدون أرقام متكررة أو متتابعة).</li>
                    <li>قم بشحن المحفظة والإستمتاع بخدمات محفظة WE Pay.</li>
                </ul>
                <p className='fw-bold'>خدمات  WE Pay</p>
                <ins>إيداع وسحب الأموال</ins>
                <li>فروع WE</li>
                <li>منافذ فوري</li>
                <li>ماكينات الـ ATM للبنوك المشتركة في الخدمة ( بنك مصر ، البنك الأهلي المصري ، بنك الإسكندرية، بنك القاهرة، بنك المصرف المتحد، البنك التجاري الدولي، بنك قطر الوطني، بنك عوده) .</li>
                <ins>تحويل الأموال</ins>
                <li>يمكنك تحويل الأموال من وإلى أي محفظة إلكترونية أخرى داخل جمهورية مصر العربية.</li>
                <ins>دفع فواتير وخدمات WE</ins>
                <li>التليفون الأرضي .</li>
                <li> الإنترنت.</li>
                <li> الموبايل .</li>
                <li> اشحن رصيد الموبايل لك وللآخرين .</li>

                <ins>سداد فواتير الكهرباء و المياه و الغاز</ins>
                <ul>
                <li>فواتير الكهرباء مثل</li>
                <ul>
                    <li> شركة شمال القاهرة لتوزيع الكهرباء</li>
                    <li> شركة جنوب القاهرة لتوزيع الكهرباء</li>
                    <li> شركة شمال الدلتا لتوزيع الكهرباء.</li>
                    <li> شركة جنوب الدلتا لتوزيع الكهرباء.</li>
                    <li> شركة مصر الوسطى لتوزيع الكهرباء .</li>
                </ul>
                </ul>

                <ul>
                <li>فواتير المياه مثل</li>
                <ul>
                    <li> شركة مياه القاهرة.</li>
                    <li> شركة الجيزة للمياه .</li>
                    <li>شركة مياه الأسكندرية.</li>
                    <li> مياه سوهاج .</li>
                </ul>
                </ul>

                <ul>
                <li>فواتير الغاز مثل</li>
                <ul>
                    <li> ناتجاس.</li>
                    <li> مدفوعات بتروتريد.</li>
                    <li> شركة طاقة للغاز.</li>
                </ul>
                </ul>



                <ins>سداد إشتراكات النقابات مثل</ins>
                <li>نقابة الأطباء البشريين.</li>
                <li> مشروع علاج المهن الطبية .</li>
                <li> نقابة المهندسين .</li>

                <ins>سداد أشتراكات الأندية مثل</ins>
                <li>نادى المعادى.</li>
                <li>نادى بالم هيلز.</li>
                <li> نادى الشمس الرياضي.</li>
                <li> نادي سموحة الرياضي.</li>
<br />
                <p className='fw-bold'>المصاريف الاضافية</p>
                <table>
                    <tr>
                        <th>الخدمة</th>
                        <th>التسعير</th>
                    </tr>
                    <tr>
                        <td>التسجيل بالمحفظة	</td>
                        <td>مجاناً</td>
                    </tr>
                    <tr>
                        <td>مصاريف سنوية	</td>
                        <td>مجاناً</td>
                    </tr>
                    <tr>
                        <td>التجديد</td>
                        <td>مجاناً</td>
                    </tr>
                    <tr>
                        <td>شحن المحفظة من بطاقات بنك مصر	</td>
                        <td>مجاناً</td>
                    </tr>
                    <tr>
                        <td>سحب نقدي (ماكينات الصراف الألى )	</td>
                        <td>مجاناً</td>
                    </tr>
                    <tr>
                        <td>إيداع نقدي (فروع WE / منافذ فورى / ماكينات الصراف الألى )</td>
                        <td>%1 بحد أدنى 5 جم</td>
                    </tr>
                    <tr>
                        <td>سحب نقدي (فروع WE / منافذ فورى)	</td>
                        <td>%1 بحد أدنى 3 جم</td>
                    </tr>
                    <tr>
                        <td>دفع فواتير وخدمات WE ( أرضى / أنترنت / موبايل / شحن )	</td>
                        <td>مجاناً</td>
                    </tr>
                    <tr>
                        <td>دفع فواتير المرافق ( الكهرباء / المياه / الغاز )	</td>
                        <td>وفقا للتسعير المعلن قبل عملية الدفع</td>
                    </tr>
                    <tr>
                        <td>خدمات فورى ( إشتراكات النوادى / النقابات /المرور / التعليم / التأمينات)	</td>
                        <td>وفقا للتسعير المعلن قبل عملية الدفع</td>
                    </tr>
                    <tr>
                        <td>تحويل الأموال من محفظة WE Pay إلى محفظة WE Pay أخرى	</td>
                        <td>1 جنية</td>
                    </tr>
                    <tr>
                        <td>تحويل الاموال من محفظة WE Pay إلى أى محفظة ألكترونية أخرى داخل جمهورية مصر العربية	</td>
                        <td>0.5 % بحد ادنى 2 جنيه وبحد أقصى 10 جنية.</td>
                    </tr>
                    <tr>
                        <td>الشراء باستخدام تكنولوجيا الـ QR Code	</td>
                        <td>مجاناً</td>
                    </tr>
                </table>
                <p className='fw-bold p-3'>شروط عامة</p>
                <ul>
                    <li>أن تكون حاملا لبطاقة رقم قومي سارية وخط WE بإسمك .</li>
                    <li>يحق  لكل بطاقة رقم قومي فتح 3 محافظ علي 3 أرقام مختلفة.</li>
                    <li>الحد الأقصى لرصيد حساب المحفظة 30,000 جنيه مصري.
</li>
                    <li>الحد الأقصى للتعاملات اليومية 30,000 جنيه مصري.
</li>
                    <li>حد السحب اليومي للحساب الواحد 30,000 جنيه مصري.
</li>
                    <li>الحد الأقصى للتعاملات الشهرية 100,000 جنيه مصري.
</li>
                    <li> في حالة ضياع أو سرقة الخط بإمكانك وقف الخدمة عن طريق الإتصال بــ 565 أو زيارة أحد فروع WE
</li>
                    <li> لمزيد من المعلومات عن WE Pay  يمكنك التصال على 565
</li>
                </ul>
            </div>
            </div>

            <div className='container'>
            <h5 className='p-2'>خدمات أخرى</h5>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}

            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide className='slidimg2 mt-5 mb-5'>
                <a href="#/">
                التبرعات
                <img src="../img/donation.png" alt="img" />
                    <a className='btns' href="#/">
                    المزيد    
                    </a>     
                </a>
            </SwiperSlide>
            <SwiperSlide className='slidimg2  mt-5 mb-5'>
            <a href="#/">
            التموين
                <img src="../img/packages.png" alt="img" />
            <a href="#/" className='btns'>المزيد</a>
            </a>
            </SwiperSlide>
            <SwiperSlide className='slidimg2  mt-5 mb-5'>
            <a href="#/">
            البرقيات المحلية
                <img src="../img/Telegram-011.png" alt="img" />
            <a href="#/" className='btns'>المزيد</a>
            </a>
            </SwiperSlide>
            <SwiperSlide className='slidimg2  mt-5 mb-5'>
            <a href="#/">
            تطبيق My WE
                <img src="../img/My+We-01.png" alt="img" />
            <a href="#/" className='btns'>المزيد</a>
            </a>
            </SwiperSlide>
            <SwiperSlide className='slidimg2  mt-5 mb-5'>
            <a href="#/">
            خدمة نقل الارقام
                <img src="../img/mnp-logo.png" alt="img" />
            <a href="#/" className='btns'>المزيد</a>
            </a>
            </SwiperSlide>
            <SwiperSlide className='slidimg2  mt-5 mb-5'>
            <a href="#/">
            دمة الإيقاف المؤقت للخط
                <img src="../img/indigo-icon-purple.png" alt="img" />
            <a href="#/" className='btns'>المزيد</a>
            </a>
            </SwiperSlide>
        </Swiper>
            </div>
        </div>
    )
}

export default Wepay
