import React from 'react'
import ProductsListeService from './ProductsListeService'

function Services() {
    return (
        <div>
                <div className='titledalel140 d-flex'>
                    <h4>خدمات المصرية للاتصالات</h4>
                    <a href="#/">( المصرية للإتصالات )</a>
                </div>
                    <ProductsListeService />

                <div className='deviphone'>
                    <div className='row'>
                    <div className='col-6 iphonewe ' data-aos="fade-left">
                        <img src="../img/WE.png" alt="weapp" />
                    </div>
                        <div className='col-6 titless'  data-aos="fade-right">
                            <h1>تطبيق WE</h1>
                            <h5>أسهل، أسرع، أوضح، أقرب</h5>
                            <p>مع تطبيق WE كل خدماتنا بين يديك، بمميزات تسهل لك أمورك وتمكنك من إدارة خدماتك. حمله الآن.</p>
                            <div className='d-flex imgapp'>
                            <a href="#/">
                                <img src="../img/google_ar.png" alt="google_ar" />
                            </a>
                            <a href="#/">
                                <img src="../img/store_ar.png" alt="store_ar" />
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services