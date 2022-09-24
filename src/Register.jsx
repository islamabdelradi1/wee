import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import ReCAPTCHA from "react-google-recaptcha";

function Register() {

    const [validated, setValidated] = useState(false);
    const [validatedd, setValidatedd] = useState(false);

        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }

            setValidated(true);
        };
        function onChange(value) {
            console.log("Captcha value:", value);
            setValidatedd(true);
        }
    return (
        <div>
        <div className='titledalel140 d-flex'>
                    <h4>مجموعة المصرية للاتصالات.</h4>
                    <a href="#/">(السداد الإلكتروني)</a>
                </div>
                <div className='container formab p-5'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="forms">
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>الاسم</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="الاسم"
                        />
                        <Form.Control.Feedback>تم التاكيد!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>كود المنطقة</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="كود المنطقة"
                        />
                        <Form.Control.Feedback>تم التاكيد!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>رقم التليفون</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                            type="number"
                            placeholder="رقم التليفون"
                            aria-describedby="inputGroupPrepend"
                            required
                            />
                            <Form.Control.Feedback type="invalid">
                            تأكد من كتابة رقم التلفون.
                            </Form.Control.Feedback>
                        </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>رقم المحمول</Form.Label>
                        <Form.Control type="text" placeholder="رقم المحمول" required />
                        <Form.Control.Feedback type="invalid">
                        تأكد من كتابة رقم المحمول ..
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>البريد الإلكتروني</Form.Label>
                        <Form.Control type="Email" placeholder="البريد الإلكتروني" required />
                        <Form.Control.Feedback type="invalid">
                    تأكد من كتابة البريد الإلكتروني.
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05" className='abp'>
                            <p className='pt-3 pform'>كلمة التحقق</p>
                        <ReCAPTCHA
                        // sitekey="6LewAjMhAAAAAOC5_0UOzg8rml2qC-BYOevBuORW"
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                        />
                        </Form.Group>
                    </Row>
                    <Button className='btnreg' type="submit" disabled={!validatedd}>أكمل</Button>
                    </Form>
        </div>
        </div>

    )
}

export default Register