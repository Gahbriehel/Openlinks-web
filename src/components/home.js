import React from 'react'
import './css/home.css';
import '../db.json'
import { IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaStar, FaLaptop } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Pagination } from './Pagination'

import { ProductListing } from './ProductListing';

// import { useSelector } from 'react-redux';
// import { fetchProduct } from './redux/product/productSlice';



const Home = () => {

    return (
        <>
            <div className='home_container'>
                <div className='heading'>
                    <h1>Laptop for Tech Enthusiasts</h1>
                    <h5>Innovate, Explore, Shop</h5>
                </div>
                <div className='main'>
                    <div className='left_side'>
                        <div className='sort_by'>
                            <div className='sort_by_text'>
                                <p>Sort by</p>
                                <IoIosArrowUp />
                            </div>
                            <div className='sort_by_form'>
                                <form>
                                    <input type='checkbox' id='dell' name='dell' value='dell'></input>
                                    <label htmlFor='dell'>Dell</label><br />
                                    <input type='checkbox' id='hp' name='hp' value='hp'></input>
                                    <label htmlFor='hp'>HP</label><br />
                                    <input type='checkbox' id='lenovo' name='lenovo' value='lenovo'></input>
                                    <label htmlFor='lenovo'>Lenovo</label><br />
                                </form>
                            </div>

                        </div>
                        <div className='filter_by'>
                            <div className='filter_by_text'>
                                <p>Filter by</p>
                                <IoIosArrowUp />
                            </div>
                            <div className='filter_by_form'>
                                <form>
                                    <input type='checkbox' id='brand' name='brand' value='brand'></input>
                                    <label htmlFor='brand'>Brand</label><br />
                                    <input type='checkbox' id='sale' name='sale' value='sale'></input>
                                    <label htmlFor='sale'>Sale</label><br />
                                    <input type='checkbox' id='preorder' name='preorder' value='preorder'></input>
                                    <label htmlFor='preorder'>Pre order</label><br />
                                    <input type='checkbox' id='stock' name='stock' value='stock'></input>
                                    <label htmlFor='stock'>In Stock</label><br />
                                </form>
                            </div>

                        </div>
                        <div className='_by'>
                            {/* <p>3rd</p> */}
                        </div>
                    </div>
                    <div className='home_body'>

                        <div className='home_body_top'>
                            <div className='home_body_top_left'>
                                <ul>
                                    <li><Link className='link' to=''><FaStar /></Link></li>
                                    <li><Link className='link' to=''>Bestsellers</Link></li>
                                    <li><Link className='link' to=''>New Arrivals</Link></li>
                                    <li><Link className='link' to=''>Laptops</Link></li>
                                </ul>
                            </div>
                            <div className='home_body_top_right'>
                                <ul>
                                    <li><Link className='link icon' to=''><FaLaptop /></Link></li>
                                    <li><Link className='link icon' to=''><RxHamburgerMenu /></Link></li>
                                    <li><button>Sort by: Recommended</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='container'>
                                <ProductListing />


                            </div>
                        </div>

                    </div>
                </div>
                <div className='pagination'>
                        <Pagination />
                    </div>
            </div>

        </>
    )
}

export default Home;