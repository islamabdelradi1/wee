import React, { useState }  from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import Cardmob from './Cardmob';
import Cardadsl from './Cardadsl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from "react-router-dom";

function Home() {
    const dateads= ['باقات الموبايل','باقات الانترنت المنزلي'];
    const [showmob,setshowmob]=useState('');
    const [show, setShow] = useState(false);
    const [shows, setshows] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [value, setvalue] = useState("");


const handleSub= ()=>{

}
    return (
        
        <div>
    <>
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
            <img src="../img/Home-Banner-1700-x-651-AR.jpg" alt='img'/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="../img/Homepage-banner---1700-x-651-AR-min.jpg" alt='img' />
            </SwiperSlide>
            <SwiperSlide>
            <img src="../img/Homepage-banner---1700-x-651-AR-min.png" alt='img' />
            </SwiperSlide>
            <SwiperSlide>
            <img src="../img/Homepage-banner---1700-x-651-AR-min+(1).jpg" alt='img' />
            </SwiperSlide>
            <SwiperSlide>
            <img src="../img/Homepage-banner---1700-x-651-AR-min+(6).png" alt='img' />
            </SwiperSlide>
            <SwiperSlide>
            <img src="../img/Homepage-banner---1700-x-651-AR.png" alt='img' />
            </SwiperSlide>
        </Swiper>
    </>
    <div className='threechosse container'>
            <div className='col-4'>
                <button onClick={handleShow}>
                    <img src="../img/pay_bill_1.svg" alt="ftora" />
                    <p>ادفع فواتيرك</p>
                </button>
                <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title><img src='../img/Telecom-Egypt-015-2018.webp' className='logopop' alt='logo'/></Modal.Title>
            </Modal.Header>
            <Modal.Body>ادفع الفاتورة أو اشحن الخط</Modal.Body>
            {
    value?'':<p className='text-center errormob'>الرقم غير صالح.</p>
}
            <Modal.Body className='whtmob'>رقم وي (جوال أو انترنت أو فايبر)</Modal.Body>
            <Modal.Footer>
            <form onSubmit={handleSub} className="form1">
                <input type="text" placeholder='مثلا 015xxxxxxxx' className='inpmob'  onChange={(e) => setvalue(e.target.value)}/>
                <Button variant="primary">
                استمر في الدفع
                </Button>
            </form>
            <Button variant="secondary" onClick={()=> setshows(!shows)}>
            لا تعرف رقمك؟
            </Button>
            {
                shows? <ol>
                <li>الاتصال باستخدام رقم الجوال, البيانات أو الفايبر.</li>
                <li>افتح الرابط التالي 
                    <NavLink to="//mynumber.te.eg/ar" target="_blank">https://mynumber.te.eg/ar</NavLink>
                </li>
                </ol> :''
            }
            </Modal.Footer>
        </Modal>
            </div>
            <div className='col-4 wst'>
                <button onClick={handleShow}>
                    <img src="../img/icon_quick_1.svg" alt="a47n" />
                    <p>اشحن خطك</p>
                </button>
                <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title><img src='../img/Telecom-Egypt-015-2018.webp' className='logopop' alt='logo'/></Modal.Title>
            </Modal.Header>
            <Modal.Body>ادفع الفاتورة أو اشحن الخط</Modal.Body>
{
    value?'':<p className='text-center errormob'>الرقم غير صالح.</p>
}
            
            <Modal.Body className='whtmob'>رقم وي (جوال أو انترنت أو فايبر)</Modal.Body>
            <Modal.Footer>
<form onSubmit={handleSub} className="form1">
            <input type="text" placeholder='مثلا 015xxxxxxxx' className='inpmob'  onChange={(e) => setvalue(e.target.value)}/>
            <Button variant="primary">
            استمر في الدفع
            </Button>
</form>
            <Button variant="secondary"  onClick={()=> setshows(!shows)}>
            لا تعرف رقمك؟
            </Button>
            {
                shows? <ol>
                <li>الاتصال باستخدام رقم الجوال, البيانات أو الفايبر.</li>
                <li>افتح الرابط التالي 
                    <NavLink to="//mynumber.te.eg/ar" target="_blank">https://mynumber.te.eg/ar</NavLink>
                </li>
                </ol> :''
            }
            </Modal.Footer>
        </Modal>
            </div>
            <div className='col-4 pestmob'>
                <NavLink to="/Mobileplansar">
                    <img src="../img/pay_bill_1.svg" alt="an2l" />
                    انقل رقمك ل وي
                </NavLink>
            </div>
    </div>
    <div className='container text-center p-3 chosse2'>
        {dateads.map(showonemob=>(
        <button className='active' 
        key={showonemob}
        onClick={()=> {
            setshowmob(showonemob)
        }
        }
        >
        {showonemob.toLocaleUpperCase()}
        </button>
        ))}
        
        

    </div>
{showmob? '' :<Cardmob /> }
{showmob === 'باقات الموبايل' && (<Cardmob /> ) }
{showmob === 'باقات الانترنت المنزلي' && (<Cardadsl />)}

    <div className='ads33'>
        <h4>الخدمات المضافة</h4>
        <>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mySwiperw"
        >
            <SwiperSlide className='swiper-slideads'>
            <a href="#/">
            <img src="../img/1.jpg" alt="ads1" className='emgs'/>
                <div className='poponimg'>
                <h3>خدمة ١٤٠ دليل</h3>
                <h3>إعرف اي معلومة تهمك</h3>
                <NavLink to='/Dalel140'>اعرف المزيد</NavLink>
            </div>
                </a></SwiperSlide>
            <SwiperSlide className='swiper-slideads'>
            <a href="#/">
                <img src="../img/2.jpg" alt="ads1" />
                <div className='poponimg'>
                <h3>WE TV</h3>
                <h3>شاهد مسلسلاتك المفضله، افلام وبرامج بدون اعلانات</h3>
                <NavLink to='/WETV'>اعرف المزيد</NavLink>
                </div>
            </a>
                </SwiperSlide>
            <SwiperSlide className='swiper-slideads'>
            <a href="#/">
                <img src="../img/3.jpg" alt="ads1" />
                <div className='poponimg'>
                <h3>WE Pay</h3>
                <h3>خدمة المحفظة الالكترونيه</h3>
                <NavLink to='/Wepay'>اعرف المزيد</NavLink>
                </div>
            </a>
            </SwiperSlide>
            <SwiperSlide className='swiper-slideads'>
            <a href="#/">
                <img src="../img/4.png" alt="ads1" />
                <div className='poponimg'>
                <h3>Tazkarti</h3>
                <h3>استلم تذاكر مباريات دوري WE المصري</h3>
                <NavLink to='/EPLTickets'>اعرف المزيد</NavLink>
                </div>
            </a>
            </SwiperSlide>
        </Swiper>
        </>
    </div>
</div>
    )
}

export default Home