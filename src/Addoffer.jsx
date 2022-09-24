import React from 'react'


function Addoffer() {


    return (
        <div>
            <div className='container'>
                <form className='formadd'method="POST" action="/Offers" >
                    <label>عنوان العرض</label>
                    <input type="text" placeholder='عنوان العرض' name="titel" />
                    <label>وصف العرض</label>
                    <input type="text" placeholder='وصف العرض' name="body"  />
                    <label>صورة العرض</label>
                    <input type="text" placeholder='صورة العرض' name="img" />
                    <button>اضافة</button>
                </form>
            </div>
        </div>
    )
}

export default Addoffer