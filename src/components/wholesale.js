import React, { useState } from 'react';
import './css/wholesale.css';
import './css/nav.css';
import { Link } from 'react-router-dom';

const Wholesale = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        jobTitle: '',
        email: '',
        phoneNumber: '',
        businessDescription: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <div className='wholesale_container'>
                <div className='wholesale_container_top'>
                    <div className='container_top_text'>
                        <h1>CONNECTING THE WORLD TO TECH</h1>
                        <h3>OVER 3 COUNTRIES.</h3>
                        <h3 className='last'>OVER 10 PARTNERS.</h3>
                        <h2>AND GROWING.</h2>
                        <p>
                            At OpenLinks, we believe in making high-quality laptops and accessories accessible worldwide. Partnering with retailers and distributors is at the heart of our mission to bridge the gap between people and technology. That's why we're excited to work with businesses that share our vision.
                        </p>
                        <p>
                            If you'd like to bring our extensive range of laptops, accessories, and tech solutions to your customers, we'd love to hear from you. Due to high demand, we process applications on a first-come, first-served basis—thank you for your patience as we respond to your request.
                        </p>
                        <Link to='/contact'><button>CONTACT US</button></Link>
                    </div>
                </div>
                <div className='wholesale_container_mid'>
                    <div className='wholesale_container_mid_text'>
                        <p className='para'>take a look at our common</p>
                        <h3>laptop brands</h3>
                    </div>
                    <div className='brand_logos'>
                        <div className='brand_logo'><img src='/images/msi-logo.png' alt='MSI logo'></img></div>
                        <div className='brand_logo'><img src='/images/dell-logo.png' alt='Dell logo'></img></div>
                        <div className='brand_logo'><img src='/images/apple-logo.png' alt='Apple logo'></img></div>
                        <div className='brand_logo'><img src='/images/lenovo-logo0.png' alt='Lenovo logo'></img></div>
                        <div className='brand_logo'><img src='/images/microsoft-logo.png' alt='Microsoft logo'></img></div>
                        <div className='brand_logo'><img src='/images/hp-logo1.png' alt='HP logo'></img></div>
                        <div className='brand_logo'><img src='/images/acer-logo.png' alt='Acer logo'></img></div>
                        <div className='brand_logo'><img src='/images/sony-logo.png' alt='Sony logo'></img></div>
                        <div className='brand_logo'><img src='/images/asus-logo.png' alt='Asus logo'></img></div>
                        <div className='brand_logo'><img src='/images/chromebook-logo.png' alt='Chromebook logo'></img></div>
                    </div>
                </div>
                <div className='wholesale_container_bottom'>
                    <div className='wholesale_container_bottom_text'>
                        <p className='para'>Time to become</p>
                        <h3>An OpenLinks® Retailer</h3>
                    </div>
                    <div className='partner_form'>
                        <p>Contact Information</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                name='fullName'
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder='Full Name *'
                                aria-label='Full Name'
                                required
                            />
                            <input
                                type='text'
                                name='jobTitle'
                                value={formData.jobTitle}
                                onChange={handleChange}
                                placeholder='Job Title'
                                aria-label='Job Title'
                            />
                            <br />
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email *'
                                aria-label='Email'
                                required
                            />
                            <input
                                type='tel'
                                name='phoneNumber'
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder='Phone Number'
                                aria-label='Phone Number'
                            />
                            <p>Request Information</p>
                            <textarea
                                name='businessDescription'
                                value={formData.businessDescription}
                                onChange={handleChange}
                                placeholder={`Describe your business, including how many years you've been in operation.
List the top brands you currently sell.
Approximate opening order (in total units).`}
                                aria-label='Business Description'
                                rows='6'
                            ></textarea>
                            <button type='submit' className='partner_btn'>SUBMIT MY REQUEST</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wholesale;
