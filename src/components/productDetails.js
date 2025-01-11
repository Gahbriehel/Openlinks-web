import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cart/cartSlice';
import './css/productDetails.css'
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";



const ProductDetails = ({ product, backToList }) => {

    const dispatch = useDispatch()

    return (
        <div>
            <div className='arrow_left' onClick={() => backToList()}><FaArrowLeft /> <span> Continue shopping</span></div>
            <div className='productDetails_container'>
                <div className='productDetails_container_left'>
                    <img src={product.image} alt='laptop'></img>
                </div>
                <div className='productDetails_container_right'>
                    <div className='product_details_section1'>
                        <h2>{product.name}</h2>
                        <p>Product brand: {product.brand}</p>
                        <p>Category: {product.category}</p>
                    </div>
                    {/* <h3>Product Details</h3> */}
                    <div className='product_details_section2'>
                        <p>{product.longDescription}</p>
                        <p className='price_p'>Price: ${new Intl.NumberFormat('en-us').format(product.price)}</p>
                    </div>
                    <button style={{ cursor: 'pointer' }} onClick={() => dispatch(addToCart(product))}><MdOutlineShoppingCart /> Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;