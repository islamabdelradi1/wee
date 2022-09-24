import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiSearchAlt2 ,BiUser} from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from "react-router-dom";

function Navs() {
    return (
        <div>
        <Navbar expand="lg" className='container'>
        <Container fluid>
            <NavLink to="/">
                <img src="../img/Telecom-Egypt-015-2018.webp" alt="logo" className='logo'/>
            </NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <NavLink to="/Mobileplansar">باقات الجوال</NavLink>
                
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                باقات منزلية
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <NavLink to="/Ba2a5g">5G المنزلي</NavLink>
                    <NavLink to="/Vaiber">فايبر</NavLink>
                </Dropdown.Menu>
                </Dropdown>

                <NavLink to="/Offers">عروض وي</NavLink>
                <NavLink to="/Services">الخدمات</NavLink>

            </Nav>
            
            </Navbar.Collapse>
            
            <div className='leftnav'>
                <a href="#/">
                    <BiSearchAlt2 />
                </a>
                <div>
                <button className='btnaccs'>
                    <BiUser />
                    <span>حسابي</span>
                    <div className='popaccs'>
                    <NavLink to="/Login"> إدارة الخطوط الأرضية </NavLink>
                    <NavLink to="/Login">إدارة حساب الإنترنت </NavLink>
                    <NavLink to="/Login">إدارة حساب الموبايل</NavLink>
                </div>
                </button>
                
                </div>
            </div>
        </Container>
        </Navbar>
        </div>
    )
}

export default Navs