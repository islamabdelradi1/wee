import React, { Component } from 'react'
import { useState } from 'react'
import Wemix from './Wemix';
import ParticlesBg from 'particles-bg'

function Mobileplansar() {
    const datewe =['We Mix','كيكس','تظبيط','خط اهلاوي' ,'نظام We Club']
    const [showba2a,setshowba2a]=useState(false);

    return (
        <div>
                <div className='titledalel140 d-flex'>
                <h4>Control Plans "WE MIX"</h4>
                <a href="#/">( المصرية للإتصالات )</a>
                </div>
                <div>
                <ParticlesBg type="cobweb" bg={true} />
                    <div className='container pt-5 pb-5'>
                        <img src="../img/Promotion-Page-1252-W-x-322-H-AR.png" alt="Promotion-Page-1252-W-x-322-H-AR" />
                    </div>

                    <div className='alba2at container my-4'>            
                        {datewe.map(datew=>(
                        <button className='btn btnmobile' 
                        key={datew}
                        onClick={()=> {
                            setshowba2a(datew)
                        }
                        }
                        >
                        {datew.toLocaleUpperCase()}
                        </button>
                        ))}
                        {showba2a ? '': <Wemix />}
                        {showba2a === 'We Mix' && (<Wemix /> ) }
                        {showba2a === 'كيكس' && <div className='d-flex'>
                        <div className='boxdatamob'>
                            <p className='nam3rd'>Kix 17</p>
                            <li className='wht3rd'>500 كيكس</li>
                            <li className='wht3rd'>1 كيكس = 1 دقيقة لشبكة WE (محمول او ارضى)</li>
                            <p className='fw-bold'>17 جنيه مصرى/ شهر</p>
                            <a href="#/" >اشترك الان</a>
                        </div>
                        <div className='boxdatamob'>
                        <p className='nam3rd'>Kix 25</p>
                            <li className='wht3rd'>1100 كيكس</li>
                            <li className='wht3rd'>1 كيكس = 1 دقيقة لشبكة WE (محمول او ارضى)</li>
                            <p className='fw-bold'>25 جنيه مصرى/ شهر</p>
                            <a href="#/" >اشترك الان</a>
                        </div>
                        <div className='d-flex'>
                        <div className='boxdatamob'>
                            <p className='nam3rd'>Kix 35</p>
                            <li className='wht3rd'>1850 كيكس</li>
                            <li className='wht3rd'>1 كيكس = 1 دقيقة لشبكة WE (محمول او ارضى)</li>
                            <p className='fw-bold'>35 جنيه مصرى/ شهر</p>
                            <a href="#/" >اشترك الان</a>
                        </div>
                        </div>   

                        </div> }
                        {showba2a === 'تظبيط' && <div className='d-flex'>
                        <div className='boxdatamob'>
                            <p className='nam3rd'>Tazbeet 30</p>
                            <li className='wht3rd'>1,250 ميجابايت تصل الى 2,500 ميجابايت و 300 دقيقة</li>
                            <li className='wht3rd'>1 دقيقة لشبكة WE (محمول او ارضى) = 1 دقيقة</li>
                            <p className='fw-bold'>30 جنيه مصرى/ شهر</p>
                            <a href="#/" >اشترك الان</a>
                        </div>
                        <div className='boxdatamob'>
                            <p className='nam3rd'>Tazbeet 40</p>
                            <li className='wht3rd'>2,250 ميجابايت تصل الى 4,500 ميجابايت و 400 دقيقة</li>
                            <li className='wht3rd'>1 دقيقة لشبكة WE (محمول او ارضى) = 1 دقيقة</li>
                            <p className='fw-bold'>40  جنيه مصرى/ شهر</p>
                            <a href="#/" >اشترك الان</a>
                        </div>
                        <div className='boxdatamob'>
                            <p className='nam3rd'>Tazbeet 70</p>
                            <li className='wht3rd'>5,250 ميجابايت تصل الى 10,500 ميجابايت و 500 دقيقة</li>
                            <li className='wht3rd'>1 دقيقة لشبكة WE (محمول او ارضى) = 1 دقيقة</li>
                            <p className='fw-bold'>70  جنيه مصرى/ شهر</p>
                            <a href="#/" >اشترك الان</a>
                        </div>
                        </div> }
                        {showba2a === "خط اهلاوي" && <div className='d-flex'>
                        <div className='boxdatamob'>
                            <p className='nam3rd'>أهلاوى 30</p>
                            <li className='wht3rd'>1000 ميجابايت حتى 2000  ميجابايت,
    400 دقيقة و 1000 دقيقة لكل الاهلاوية</li>
                            <li className='wht3rd'>1 دقيقة لشبكة WE (محمول او ارضى) = 1 دقيقة</li>
                            <p className='fw-bold'>30 جنيه مصرى/ شهر</p>
                            <a href="#/" >اشترك الان</a>
                        </div>
                        <div className='boxdatamob'>
                            <p className='nam3rd'>أهلاوى 50</p>
                            <li className='wht3rd'>2000 ميجابايت حتى  2500 ميجابايت,
    700 دقيقة و 1000 دقيقة لكل الاهلاوية</li>
    <li className='wht3rd'>1 دقيقة لشبكة WE (محمول او ارضى) = 1 دقيقة</li>
                            <p className='fw-bold'>50  جنيه مصرى/ شهر</p>
                            <a href="#/" >اشترك الان</a>
                        </div>
                        </div> }
                        {showba2a === "نظام We Club" && <div className='d-flex'>
                        <div className='boxdatamob'>
                            <p className='nam3rd'>WE Club 100</p>
                            <li className='wht3rd'>10,000 ميجابايت حتى 20,000 ميجابايت,
    800 دقيقة و 500 دقيقة لكل WE CLUB</li>
                            <li className='wht3rd'>1 دقيقة لشبكة WE (محمول او ارضى) = 1 دقيقة</li>
                            <p className='fw-bold'>100 جنيه مصرى/ شهر</p>
                            <a href="#/" >اشترك الان</a>
                        </div>
                        <div className='boxdatamob'>
                            <p className='nam3rd'>WE Club 65</p>
                            <li className='wht3rd'>5000 ميجابايت حتى 10,000 ميجابايت,
    800 دقيقة و 500 دقيقة لكل WE CLUB</li>
                            <li className='wht3rd'>1 دقيقة لشبكة WE (محمول او ارضى) = 1 دقيقة</li>
                            <p className='fw-bold'>65 جنيه مصرى/ شهر</p>
                            <a href="#/" >اشترك الان</a>
                        </div>
                        <div className='boxdatamob'>
                            <p className='nam3rd'>WE Club 40</p>
                            <li className='wht3rd'>2000 ميجابايت حتى 4000 ميجابايت,
    700 دقيقة و 500 دقيقة لكل WE CLUB</li>
                            <li className='wht3rd'>1 دقيقة لشبكة WE (محمول او ارضى) = 1 دقيقة</li>
                            <p className='fw-bold'>40 جنيه مصرى/ شهر</p>
                            <a href="#/" >اشترك الان</a>
                        </div>
                        </div> }

                    </div>
                    
                </div>
                
        </div>
    )
}

export default Mobileplansar