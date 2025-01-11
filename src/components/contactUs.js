import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './css/nav.css'
import './css/contactUs.css'
import { FaAngleRight } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";
import { RiVerifiedBadgeLine, RiSecurePaymentFill } from "react-icons/ri";



const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    }

    return (
        <>
            <div className='contact_container'>
                <div className='contact_container_top'>
                    <div className='get_in_touch'>
                        <h1>Get in Touch</h1>
                        <p>We want to hear from you. Please feel free to email Orders@OpenLinks.com or fill out the form below. Please allow 1-3 business days to respond.</p>
                        <div className='get_in_touch_btns'>
                            <Link className='link' to='/wholesale'><button>wholesale</button></Link>
                            <Link className='link' to='customOrders'><button>custom orders</button></Link>
                            <Link className='link' to='shippingInfo'><button>shipping info</button></Link>
                        </div>
                    </div>
                    <div className='faq_links'>
                        <ul>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>😥 I need help with an order</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>🧰 My laptop arrived damaged, what should I do?</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>🚚 How do I locate my shipment?</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>💻 What are the system requirements for my laptop?</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>🤔 Which model is best for me?</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                            <li>
                                <Link className='link'>
                                    <article>
                                        <h5>🔙 What's your return policy?</h5>
                                        <p><FaAngleRight /></p>
                                    </article>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='contact_container_mid'>
                    <div className='contact_form'>
                        <form onSubmit={handleSubmit}>
                            <h1>Contact Us</h1>
                            <br />
                            <label htmlFor='fullname'>Full Name <span>*</span></label>
                            <br />
                            <input
                                type='text'
                                name='fullName'
                                id='fullname'
                                value={formData.fullName}
                                onChange={handleChange}
                                aria-label='Full Name'
                                required
                            />
                            <br />
                            <label htmlFor='email'>Email <span>*</span></label>
                            <br />
                            <input
                                type='email'
                                name='email'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                                aria-label='Email'
                                required
                            />
                            <br />
                            <label htmlFor='subject'>Subject <span>*</span></label>
                            <br />
                            <select>
                                <option disabled selected>Select a subject</option>
                                <option value='subject'>I need help with an order</option>
                                <option value='subject'>Order status</option>
                                <option value='subject'>Report an issue</option>
                                <option value='subject'>Feedback</option>
                                <option value='subject'>Request refund or discount</option>
                                <option value='subject'>Other</option>
                            </select>
                            <br />
                            <label htmlFor='message'>Message <span>*</span></label>
                            <br />
                            <textarea
                                name='message'
                                id='message'
                                placeholder='Write your message'
                                value={formData.message}
                                onChange={handleChange}
                                aria-label='Message'
                                rows={5}
                            />
                            <br />
                            <label htmlFor='file'>Attach a file</label>
                            <br />
                            <input className='file_input' accept='.gif, .jpeg, .jpg, .png, .svg, .webp, .bmp, .tif, .tiff, .heic, .3gpp, .mp4, .mov, .avi, .wmv, .webm, .pdf, .csv, .txt, .rtf, .doc, .docx, .ppt, .pptx, .tsv, .rar, .zip' type='file' id='file' />
                            <br />
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
                <div className='contact_container_bottom'>
                    <div className='join_newsletter'>
                        <h1>Join our newsletter</h1>
                        <p>Stay up-to-date with new collections and deals.</p>
                        <div className='newsletter_input'>
                            <input type='email' placeholder='Your email'></input>
                            <button>Send</button>
                        </div>
                    </div>
                    <div className='contact_container_bottom2'>
                        <div className='newsletter_perks'>
                            <div className='perk'>
                                <div className='perk_icon'>
                                    <PiPackage />
                                </div>
                                <div className='perk_text'>
                                    <h5>Free shipping</h5>
                                    <p>Local orders above ₦200k</p>
                                </div>
                            </div>
                            <div className='perk'>
                                <div className='perk_icon'>
                                    <RiVerifiedBadgeLine />
                                </div>
                                <div className='perk_text'>
                                    <h5>2 Year Warranty</h5>
                                    <p>On Every Product</p>
                                </div>
                            </div>
                            <div className='perk'>
                                <div className='perk_icon'>
                                    <RiSecurePaymentFill />
                                </div>
                                <div className='perk_text'>
                                    <h5>Secure Checkout</h5>
                                    <p>Enhanced Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs