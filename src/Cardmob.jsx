import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiWifi ,BiUser,BiPhoneCall} from "react-icons/bi";
import { NavLink } from 'react-router-dom';

function Cardmob() {
return (
    <div className='container d-flex mt-5 mb-5 animate__bounceIn  '>
        <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-6 '>

        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>شباب 59</Card.Title>
            <Card.Text>
                <div className='ard'>
                <BiWifi />
                <div className='wht'>
                <span>5 جيجابايت</span>
                <p>انترنت</p>
                </div>
                </div>
                    <div className='ard'>
                    <BiUser />
                    <div className='wht'>
                    <span>5 جيجابايت</span>
                    <p>تواصل اجتماعي + يوتيوب</p>
                    </div>
                    </div>
                        <div className='ard'>
                        <BiPhoneCall />
                        <div className='wht'>
                            <span>400</span>
                            <p>دقائق محلية</p>
                        </div>
                        </div>
            </Card.Text>

        </Card.Body>
        <div className='btmms'> 
            <h3 className='text-white text-center'>67.85 <span className='fs-6'>/ جنيه شهري</span></h3>
                <p className='text-white text-center'>شاملة ضريبة القيمة المضافة 15%</p>
                <NavLink to="/Plandetails" className='btnss'>تفقد هذه الباقة</NavLink>
            </div>
        </Card>

        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>

        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>شباب 99</Card.Title>
            <Card.Text>
                <div className='ard'>
                <BiWifi />
                <div className='wht'>
                <span>15 جيجابايت</span>
                <p>انترنت</p>
                </div>
                </div>
                    <div className='ard'>
                    <BiUser />
                    <div className='wht'>
                    <span>20 جيجابايت</span>
                    <p>تواصل اجتماعي + يوتيوب</p>
                    </div>
                    </div>
                        <div className='ard'>
                        <BiPhoneCall />
                        <div className='wht'>
                            <span>1500</span>
                            <p>دقائق محلية</p>
                        </div>
                        </div>
            </Card.Text>

        </Card.Body>
        <div className='btmms'> 
            <h3 className='text-white text-center'>113.85 <span className='fs-6'>/ جنيه شهري</span></h3>
                <p className='text-white text-center'>شاملة ضريبة القيمة المضافة 15%</p>
                <NavLink to="/Plandetails" className='btnss'>تفقد هذه الباقة</NavLink>
            </div>
        </Card>

        </div>
        <div className='col-lg-3 col-md-6 col-sm-6 '>

<Card style={{ width: '18rem' }}>
<Card.Body>
    <Card.Title>شباب 149</Card.Title>
    <Card.Text>
        <div className='ard'>
        <BiWifi />
        <div className='wht'>
        <span>30 جيجابايت</span>
        <p>انترنت</p>
        </div>
        </div>
            <div className='ard'>
            <BiUser />
            <div className='wht'>
            <span>لا محدود</span>
            <p>تواصل اجتماعي + يوتيوب</p>
            </div>
            </div>
                <div className='ard'>
                <BiPhoneCall />
                <div className='wht'>
                    <span>3000</span>
                    <p>دقائق محلية</p>
                </div>
                </div>
    </Card.Text>

</Card.Body>
<div className='btmms'> 
    <h3 className='text-white text-center'>171.85 <span className='fs-6'>/ جنيه شهري</span></h3>
        <p className='text-white text-center'>شاملة ضريبة القيمة المضافة 15%</p>
        <NavLink to="/Plandetails" className='btnss'>تفقد هذه الباقة</NavLink>
    </div>
</Card>

        </div>
        <div className='col-lg-3 col-md-6 col-sm-6 '>

        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>شباب 199</Card.Title>
            <Card.Text>
                <div className='ard'>
                <BiWifi />
                <div className='wht'>
                <span>95 جيجابايت</span>
                <p>انترنت</p>
                </div>
                </div>
                    <div className='ard'>
                    <BiUser />
                    <div className='wht'>
                    <span>لا محدود</span>
                    <p>تواصل اجتماعي + يوتيوب</p>
                    </div>
                    </div>
                        <div className='ard'>
                        <BiPhoneCall />
                        <div className='wht'>
                            <span>لا محدود</span>
                            <p>دقائق محلية</p>
                        </div>
                        </div>
            </Card.Text>

        </Card.Body>
        <div className='btmms'> 
            <h3 className='text-white text-center'>228.85 <span className='fs-6'>/ جنيه شهري</span></h3>
                <p className='text-white text-center'>شاملة ضريبة القيمة المضافة 15%</p>
                <NavLink to="/Plandetails" className='btnss'>تفقد هذه الباقة</NavLink>
            </div>
        </Card>

        </div>
        </div>
    </div>
)
}

export default Cardmob