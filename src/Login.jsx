import React, { useState ,useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import {useAuth} from './AuthProvider';
// import {AuthProvider} from './AuthProvider';

function Login() {
    // const emailRef = useRef();
    // const pwdRef = useRef();
    // const [error,seterror]=useState('')
    // const { signup } = useAuth()

    const [validatedd, setValidatedd] = useState(false);
    function onChange(value) {
        console.log("Captcha value:", value);
        setValidatedd(true);
    }
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
            setValidated(true);   
            // signup(emailRef.current.value,pwdRef.current.value)
    };
    return (
        <>
                    <div className='titledalel140 d-flex'>
                    <h4>مجموعة المصرية للاتصالات.</h4>
                    <a href="#/">(السداد الإلكتروني)</a>
                </div>
                <div className='container formab p-5'>
                <Form className='forms' noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="validationCustom01">
                        <h3>تسجيل الدخول</h3>
                        <Form.Label>البريد الإلكتروني</Form.Label>
                        <Form.Control type="email" placeholder="البريد الإلكتروني" required />
                        <Form.Control.Feedback type="invalid">
                            تأكد من كتابة البريد الإلكتروني.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label>كلمة السر</Form.Label>

                        <Form.Control type="password" placeholder="كلمة السر" required />
                        <Form.Control.Feedback type="invalid">
                            تأكد من كتابةالباسورد.
                        </Form.Control.Feedback>
                    </Form.Group>
                        <div className='btnlogn'>
                        <ReCAPTCHA
                        // sitekey="6LewAjMhAAAAAOC5_0UOzg8rml2qC-BYOevBuORW"
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                        />
                                <Button type="submit" disabled={!validatedd}>
                                    دخول
                                </Button>
                                <NavLink to="/Register">
                                    اشتراك الان
                                </NavLink>
                        </div>
        </Form>
        </div>                
        </>
    )
}

export default Login