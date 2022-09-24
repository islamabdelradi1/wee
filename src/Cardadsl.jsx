import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiWifi} from "react-icons/bi";
import { NavLink } from 'react-router-dom';
function Cardadsl() {
return (
    <div className='container d-flex mt-5 mb-5 adslcss animate__bounceIn row'>
        <div className='col-md-6 col-sm-12 '>

        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>50 جيجابايت</Card.Title>
            <Card.Text>
                <div className='ard'>
                <BiWifi />
                <div className='wht'>
                <span>50 جيجابايت</span>
                <p>انترنت</p>
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
        <div className='col-md-6 col-sm-12 '>

        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>100 جيجابايت</Card.Title>
            <Card.Text>
                <div className='ard'>
                <BiWifi />
                <div className='wht'>
                <span>50 جيجابايت</span>
                <p>انترنت</p>
                </div>
                </div>
            </Card.Text>

        </Card.Body>
        <div className='btmms'> 
            <h3 className='text-white text-center'>184 <span className='fs-6'>/ جنيه شهري</span></h3>
                <p className='text-white text-center'>شاملة ضريبة القيمة المضافة 15%</p>
                <NavLink to="/Plandetails" className='btnss'>تفقد هذه الباقة</NavLink>
            </div>
        </Card>

        </div>
    </div>
    )
}

export default Cardadsl