import React from 'react'
import './css/nav.css'
import './css/about.css'
import { FaLaptop } from "react-icons/fa";
import { GiMagnifyingGlass, GiShoppingCart } from "react-icons/gi";


const About = () => {
  return (
    <div className='about_container'>
      <div className='about_section1'>
        <div className='about_section1_right'>
          <h1>OUR STORY</h1>
        </div>
        <div className='about_section1_left'>
          <img src='images/story-image.jpeg' alt='about' />
        </div>
        <hr />
      </div>

      <div className='about_section2'>
        <h1>technology is our mission</h1>
        <p>We're a modern platform dedicated to transforming how people discover, compare, and purchase laptops.</p>
        <div className='offerings'>
          <div className='offer1'>
            <p className='offer_icon'><FaLaptop /></p>
            <p>WIDEST SELECTION</p>
          </div>
          <div className='offer2'>
            <p className='offer_icon'><GiMagnifyingGlass /></p>
            <p>QUALITY INFORMATION</p>
          </div>
          <div className='offer3'>
            <p className='offer_icon'><GiShoppingCart /></p>
            <p>AFFORDABLE OPTIONS</p>
          </div>
        </div>
      </div>
      <div className='about_section3_container'>
        <div className='about_section3'>
          <div className='content'>
            <div className='content_text'>
              <h2>Big On Variety</h2>
              <h3>Find the Perfect Laptop for Every Need</h3>
              <p>At OpenLinks, we offer an extensive range of laptops to suit every requirement. Whether you're a gamer, a student, or a professional looking for high-performance devices, we've got you covered. Explore our collection of over 300 models from leading brands, featuring everything from sleek ultrabooks to powerful gaming rigs.</p>
              <p>Browse our curated collections to find the best devices for productivity, entertainment, and more.</p>
            </div>
            <div className='content_image'>
              <img src='/images/big-on-variety-image.jpeg' alt='laptops'></img>
            </div>
          </div>
          <div className='content'>
            <div className='content_image'>
              <img src='/images/bigger.jpeg' alt='laptop'></img>
            </div>
            <div className='content_text'>
              <h2>Bigger On Quality</h2>
              <h3>Your Trusted Platform for Top-Notch Tech</h3>
              <p>At OpenLinks, we're committed to offering only the best. Every laptop in our inventory is carefully vetted to ensure it meets our high standards. Our team of experts reviews specifications, tests performance, and verifies durability before recommending any device to you.</p>
              <p>We partner with trusted brands and retailers to bring you authentic, quality products. From high-resolution displays to advanced processors, you can count on OpenLinks to deliver technology that performs and lasts.</p>
            </div>
          </div>
          <div className='content'>
            <div className='content_text'>
              <h2>Meet the Experts</h2>
              <h3>Guidance You Can Trust</h3>
              <p>At OpenLinks, our team includes tech enthusiasts, product testers, and industry experts. We understand that choosing the right laptop can feel overwhelming, so we're here to help.</p>
              <p>From detailed product reviews to personalized recommendations, we're dedicated to connecting you with the perfect device. Whether you're a beginner or a seasoned tech user, our resources, guides, and comparison tools make the process seamless.</p>
            </div>
            <div className='content_image'>
              <img src='/images/team-with-laptop.jpg
          ' alt='laptop with shopping cart'></img>
            </div>
          </div>
          <div className='content'>
            <div className='content_image'>
              <img className='to_saturate' src='/images/futuristic-laptop.jpg' alt='laptop with shopping cart'></img>
            </div>
            <div className='content_text'>
              <h2>Tech That's Always Fresh</h2>
              <h3>Future-Proof Your Tech with the Latest Innovations</h3>
              <p>OpenLinks stays ahead of the curve to bring you cutting-edge laptops with the newest features. From ultrafast SSDs to next-gen graphics cards, we ensure you're equipped with the tools to excel.</p>
              <p>We keep our inventory up-to-date, so you're always just a click away from the best and newest options. Ready to upgrade your tech game? Explore OpenLinks today.</p>
            </div>
          </div>
          <div className='content'>
            <div className='content_text'>
              <h2>Value is a Big Deal</h2>
              <h3>Affordable Tech Without Compromise</h3>
              <p>We believe that everyone deserves access to the latest technology without breaking the bank. At OpenLinks, you'll find competitive prices across our entire catalog.</p>
              <p>By partnering directly with manufacturers and utilizing efficient supply chain practices, we pass the savings directly to you. Whether it's a budget-friendly laptop for school or a premium device for work, you'll always find value here.</p>
            </div>
            <div className='content_image'>
              <img className='to_saturate' src='/images/value-image.jpeg' alt='laptop with shopping cart'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About