import React from 'react'
import './css/footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";



const Footer = () => {
    return (
        <>
            <div className='footer_container'>
                <div className='footer_top'>
                    <div className='footer_top_left'>
                        <p>Stay up-to-date with the latest laptops and deals! Subscribe to our newsletter now!</p>
                    </div>
                    <div className='footer_top_right'>
                        <input type='email' placeholder='Enter your email'></input>
                        <button>Subscribe</button>
                    </div>

                </div>
                <hr></hr>
                <div className='footer_bottom'>
                    <div className='footer_bottom_left'>
                        <div className='footer_logo'>
                            <Link to='/' className='footer_logo_img'><img src='images/profile.png' alt='logo'></img></Link>
                        </div>
                        <div className='socials'>
                            <ul>
                                <li><Link to='https://www.linkedin.com' className='social_link'><FaLinkedin /></Link></li>
                                <li><Link to='https://www.twitter.com' className='social_link'><BsTwitterX /></Link></li>
                                <li><Link to='https://www.instagram.com' className='social_link'><FaInstagram /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer_bottom_right'>
                        <div className='footer_col_1'>
                            <h6>help center</h6>
                            <p>FAQs</p>
                            <p>customer support</p>
                            <p>how to buy a laptop</p>
                        </div>
                        <div className='footer_col_2'>
                            <h6>about us</h6>
                            <p>privacy policy</p>
                            <p>sitemap</p>
                            <p>subscriptions</p>
                        </div>
                        <div className='footer_col_3'>
                            <h6>contact us</h6>
                            <p className='footer_link'>support@openlinkstech</p>
                            <p>+234 123 456 789</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer