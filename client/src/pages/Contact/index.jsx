import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { assets } from '../../assets/assets';
import { Row, Col } from 'antd';
import './Contact.css';
import validator from 'validator';
import { toast } from 'react-toastify';
import axios from 'axios';

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const submitContactForm = async (e) => {
        e.preventDefault();

        if (!validator.isEmail(data.email)) {
            toast.error("Please Enter Valid Email");
        }
        else {
            setLoading(true);
            const response = await axios.post('/api/send-email', {
                username: data.name,
                email: data.email,
                message: data.message
            });

            if (response.data.status === 'success') {
                toast.success(response.data.message);
            }
            setLoading(false);
        }
    }

    return (
        <>
            <section className="hero-section-contact-screen">
                <HeroSection image={assets?.header_img} mainHeading={'Contact us'} content={"We’re here to help you enjoy every meal with ease. Whether you have questions about placing an order, need assistance navigating our app, or simply want to share your feedback, our team is ready to assist. At Tomato, we believe that every dining experience should be delightful from start to finish. Your satisfaction is our priority, and we’re committed to addressing any concerns or inquiries you might have. Reach out to us by filling out the form below, and let us make your Tomato experience even more enjoyable. Bon appétit!"} className={'hero-section-content-of-contact-screen'} />
            </section>

            <section className='container-of-contact-info-and-form'>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <h2 className='contact-info-heading'>Contact info</h2>
                        <div className='container-of-contact-details'>
                            <div className='contact-details'>
                                <img src={assets?.phone_icon} alt="" />
                                <p>929-242-6868</p>
                            </div>
                            <div className='contact-details'>
                                <img src={assets?.email_icon} alt="" />
                                <p>info@tomato.com</p>
                            </div>
                            <div className='contact-details'>
                                <img src={assets?.location_icon} alt="" />
                                <p>Karachi, Sindh, Pakistan</p>
                            </div>
                        </div>
                        <hr className='divider-of-contact-info' />

                        <h3 className='opening-hours-heading'>Opening hours</h3>
                        <p className='timings-detail'>Monday - Friday — 8:00 - 22:00</p>
                        <p className='timings-detail'>Saturday - Sunday — 10:00 - 23:00</p>
                    </Col>
                    <hr className='hr-between-columns-of-contact-info' />
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <form onSubmit={submitContactForm} className='contact-form'>
                            <div className="contact-form-sub-container">
                                <h2>Get in Touch</h2>
                                <input type="text" name='name' onChange={onChangeHandler} value={data?.name} placeholder='Name' required />
                                <input type="email" name='email' onChange={onChangeHandler} value={data?.email} placeholder='Email address' required />
                                <input type="text" name='message' onChange={onChangeHandler} value={data?.message} placeholder='Message' required />
                                <button className={['send-message-btn', (!data?.name || !data?.email || !data?.message || loading) && 'disabled-send-message-btn'].join(' ')} type='submit'>{loading ? 'Loading...' : 'Send'}</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Contact;