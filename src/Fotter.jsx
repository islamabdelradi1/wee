import React from 'react'
import { BiBarChartAlt, BiBriefcaseAlt,BiLocationPlus,BiChat} from "react-icons/bi";
import { FaFacebookSquare,FaTwitterSquare, FaYoutube,FaInstagram,} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Fotter() {
    return (
        <div>
        <div className='backfotter'>
            
        <div className='allfotter'>
            <div className='row'>
                <div className='one col-md-2  col-sm-6'>
                    
                    <div className='on'>
                        <BiBarChartAlt />
                        <NavLink to="/Share-statistics">المستثمرين</NavLink>
                    </div>
                    <div className='on'>
                        <BiBriefcaseAlt />
                        <NavLink to="/Join-we">الوظائف</NavLink>
                    </div>
                    <div className='on'>
                        <BiLocationPlus />
                        <NavLink to="/Locate-us">موقعنا</NavLink>
                    </div >
                    <div className='on'>
                        <BiChat />
                        <NavLink to="/Faq">الأسئلة الشائعة</NavLink>
                    </div>
                </div>
                <div className='two col-md-2  col-sm-6'>
                    <p>المصريه للاتصالات</p>
                    <NavLink to="/About">هدفنا و رؤيتنا</NavLink>
                    <NavLink to="/AboutUs">أعضاء مجلس الإدارة</NavLink>
                    <NavLink to="/Jobs">وظائف شاغرة</NavLink>
                </div>
                <div className='two col-md-2  col-sm-6'>
                    <p>مساعدة</p>
                    <NavLink to="/Help">أسئلة متكرره</NavLink>
                    <NavLink to="/Store">الفروع</NavLink>
                    <NavLink to="/HelpAndSupport">محادثة خدمة العملاء</NavLink>
                    <NavLink to="/Ma3ak">معاك</NavLink>
                    <NavLink to="/Ut">خدمة تركيب الوصلات الداخلية</NavLink>
                </div>
                <div className='two col-md-2  col-sm-6'>
                    <p>اتصل بنا</p>
                    <NavLink to="/Chatme">اتصل بنا</NavLink>
                    <NavLink to="/Emaila">ارسال بريد الكتروني</NavLink>
                </div>
                <div className='two col-md-2  col-sm-6'>
                    <p>حسابي</p>
                    <NavLink to="/Login">إداره الخطوط الارضيه</NavLink>
                    <NavLink to="/Login">إداره الحساب</NavLink>
                </div>
                <div className='two col-md-2  col-sm-6'>
                    <p>عن الموقع</p>
                    <NavLink to="/Sitemap">خريطة الموقع (شخصي)</NavLink>
                    <NavLink to="/Sitemap-Business">خريطة الموقع (شركات)</NavLink>
                </div>
            </div>
        </div>
            <div className='media'>
                <div>
                <p>تابعنا على</p>
                    <NavLink to="//www.facebook.com/TelecomEgypt/">
                        <FaFacebookSquare />
                    </NavLink>
                    <NavLink to="//twitter.com/telecomegypt">
                        <FaTwitterSquare />
                    </NavLink>
                    <NavLink to="//www.youtube.com/channel/UCLl_SOH0KD8-Hv1H1yetEyw">
                    <FaYoutube />
                    </NavLink>
                    <NavLink to="//www.instagram.com/telecom.egypt/">
                    <FaInstagram />
                    </NavLink>
                </div>
                <div className='downloadfotter'>
                    <h5>حمل التطبيق من هنا</h5>
                    <NavLink to="//itunes.apple.com/eg/app/we-mobile/id1413151505">
                        <img src="../img/store_ar.png" alt="iso" />
                    </NavLink>
                    <NavLink to="//play.google.com/store/apps/details?id=com.ucare.we&hl=en_US&">
                        <img src="../img/google_ar.png" alt="play" />
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Fotter