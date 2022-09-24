import Data from "./Data"
import React,{useState} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export const UserContext = React.createContext();
export const TypeContext= React.createContext();


function ProductsListe() {
const[items,setitems] =useState(Data);
const filterItem =(categItem) => {
    const updatedItems = Data.filter((curElem)=>{
        return curElem.cat === categItem;
    });
    setitems(updatedItems);
}
    return (
<>
<UserContext.Provider data={items}>
<TypeContext.Provider value={'Abdelradi'}>
<div className='d-flex p-5'  data-aos="zoom-in">

                <button className='btnnn' value='offer' onClick={()=> filterItem('offer')}>
                    <img src="../img/all_icon.png" alt="all_icon.png" />
                    كل العروض
                </button>
                <button className='btnnn' value="Internet" onClick={()=> filterItem('Internet')}>
                <img src="../img/fixed_broadband_h.png" alt="fixed_broadband_h" />
                    انترنت WE
                </button>
                <button className='btnnn' value="Landline" onClick={()=> filterItem('Landline')} >
                <img src="../img/fixed_voice_h.png" alt="fixed_voice_h" />
                    خط أرضي
                </button>
                <button className='btnnn' value="Mobile" onClick={()=> filterItem('Mobile')}>
                <img src="../img/mobile_h.png" alt="mobile_h" />
                    موبايل
                </button>
                <button className='btnnn' value="Other"  onClick={()=> filterItem('Other')}>
                <img src="../img/bundles_h.png" alt="bundles_h" />
                    عروض اخري
                </button>
</div>
<div className='d-flex flex-wrap container' data-aos="zoom-in">
                {items.map((item) => {
                    const { id, title, img, cat, paragraph} = item;
                    return (
                        <div className='dev3ard col-4 ' key={id}>
                        <img src={img} alt={cat}  variant="top" />
                        <div className='klmat'>
                            <h5>{title}</h5>
                            <p>{paragraph}</p>
                            <a href="#/" variant="primary">المزيد</a>
                        </div>
                        </div>
                    )
                })}
        </div>
    </TypeContext.Provider>
    </UserContext.Provider>
</>

    )
}

export default ProductsListe