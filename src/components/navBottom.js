import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoIosLaptop, IoMdPricetag, IoMdHome } from "react-icons/io";
import { MdOutlineCategory, MdFilterAlt } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBottom = () => {
  const currentPage = useLocation().pathname;

  console.log(currentPage)
  return (
    <div className='nav_bottom'>
      <ul>
        <li><Link to='/' className={currentPage === '/' ? 'link link-active' : 'link'}><IoMdHome />Home</Link></li>
        <li><Link to='/brands' className='link disabled-link'><IoIosLaptop /> Laptop Brands</Link></li>
        <li><Link to='/categories' className='link disabled-link'><MdOutlineCategory /> Categories  <RiArrowDropDownLine /></Link></li>
        <li><Link to='/price_range' className='link disabled-link'><ImPriceTags /> Price Range  <RiArrowDropDownLine /></Link></li>
        <li><Link to='/specific' className='link disabled-link'><MdFilterAlt /> Specific  <RiArrowDropDownLine /></Link></li>
        <li><Link to='/sale' className='link disabled-link'><IoMdPricetag /> SALE</Link></li>
        <li><Link to='/about' className={currentPage === '/about' ? 'link link-active' : 'link'}>About Us</Link></li>
        <li><Link to='/contact' className={currentPage === '/contact' ? 'link link-active' : 'link'}>Contact Us</Link></li>
      </ul>
    </div>
  )
}

export default NavBottom