import React from 'react'
import ParticlesBg from 'particles-bg'
function Error() {
    return (
        <div className='container error'>
                    <ParticlesBg type="cobweb" bg={true} />
            <div className='text-center errorklam'>
                <h1>خطأ!</h1>
                <p>الصفحة غير موجودة</p>
            </div>
        </div>
    )
}

export default Error
