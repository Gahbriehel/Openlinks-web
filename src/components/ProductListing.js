import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './redux/product/productSlice';
import ProductDetails from './productDetails'
import { addToCart } from './redux/cart/cartSlice';
import './css/productListing.css'

export const ProductListing = () => {
    const [productDetails, setProductDetails] = useState(null);
    const productData = useSelector(state => state.product);
    const dispatch = useDispatch();
    // console.log(productData);

    useEffect(() => {
        dispatch(fetchProduct())
         // eslint-disable-next-line
    }, [])

    const handleProductDetails = (product) => {
        if (product)
            setProductDetails(product)
        else {
            setProductDetails(null)
        }
    }

    const laptops = productData.products.products || []

    if (productData.loading === true)
        return (
            <div className='data_loading'>
                <h2 className='loading_text'>Loading</h2>
                <div className="spinner"></div>
            </div>
        )

    if (productData.error) {
        return (
            <div className='data_loading_failed'>
                <h2>Failed to load resource</h2>
                <p>Check your internet connection and refresh page</p>
            </div>
        )
    }

    return (
        <>
            {productDetails !== null ? <ProductDetails
                backToList={handleProductDetails}
                product={productDetails}
            /> : null}
            {productDetails === null ? laptops.map((laptop) => {
                return (
                    <div key={laptop.id}>
                        <div >
                            <div className='card'>
                                <div className='card_img'>
                                    <img onClick={() => {
                                        handleProductDetails(laptop)
                                    }} style={{ cursor: "pointer" }} src={laptop.image} alt='laptop' />
                                </div>
                                <div className='card_info'>
                                    <h3 onClick={() => {
                                        handleProductDetails(laptop)
                                    }} style={{ cursor: "pointer" }}>{laptop.name}</h3>
                                    <p>{laptop.brand}</p>
                                </div>
                                <div className='card_actions'>
                                    <p className='price_p'>${new Intl.NumberFormat('en-us').format(laptop.price)}</p>
                                    <button onClick={() => dispatch(addToCart(laptop))}>Add To Cart</button>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }) : null}
        </>
    )
}
