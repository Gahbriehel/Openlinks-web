import React from 'react'
import { Link } from "react-router-dom";
import './css/nav.css'
import { FaSearch } from 'react-icons/fa';
import { MdPersonOutline, MdOutlineShoppingCart, MdOutlineKeyboardArrowDown, MdOutlineLogout } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsPersonCheck } from "react-icons/bs";
import NavBottom from './navBottom';
import { useSelector } from 'react-redux';


const Nav = () => {
    const cartData = useSelector(state => state.cart)
    const userData = useSelector(state => state.user.user)
    let userFirstName = null;

    if (userData && userData.user && userData.user.name) {
        const name = userData.user.name.split(' ');
        userFirstName = name.length > 0 ? name[0] : null;
        userFirstName = userFirstName.charAt(0).toUpperCase() + userFirstName.slice(1);
    }

    const deleteUserLocalStorage = () => {
        localStorage.removeItem("user")
    }


    return (
        <>
            <div className='nav_container'>
                <div className='nav_top'>
                    <div className='logo'>
                        <Link to='/'><img src='images/profile.png' alt='logo'></img></Link>
                    </div>
                    <div className='search_box'>
                        <input type='text' /* value='' */ placeholder='Search'></input>
                        <button><FaSearch /></button>
                    </div>
                    <div className='nav_top_right'>
                        <div className='account'>
                            {userData && userData.user && userData.user.name ? (
                                <div className='account_info'>
                                    <input type='checkbox' id='check'></input>
                                    <label htmlFor='check' className='user_greeting'>
                                        <span><BsPersonCheck /> </span>Hi, {userFirstName} 
                                        <MdOutlineKeyboardArrowDown className='arrow_down'/>
                                        </label>
                                    <div className='account_box'>
                                        <div className='box'>
                                            <div className='account_links'>
                                                <Link to='/profile' className='cart_link'><p className='account_text'><MdPersonOutline className='icon' /><span>My account</span></p></Link>
                                                <Link to='/' className='cart_link disabled-link'><p className='account_text'><IoMdHeartEmpty className='icon' /><span>Saved items</span></p></Link>
                                            </div>
                                            {/* <hr/> */}
                                            <form>
                                            <MdOutlineLogout/>
                                                <button type='submit' onClick={deleteUserLocalStorage()}>Log out</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link to='/signup' className='cart_link'><button><MdPersonOutline className='account_icon' /> Sign In</button></Link>
                            )}
                        </div>
                        <div className='cart_btn'>
                            <Link to='/cart' className='cart_link'><button><MdOutlineShoppingCart className='cart_icon' /> Cart {cartData && cartData.number > 0 && <span><sup>({cartData.number})</sup></span>}</button></Link>
                        </div>
                    </div>
                </div>
                <hr />
                <NavBottom />
            </div>
        </>
    )
}

export default Nav