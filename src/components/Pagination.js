import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './redux/product/productSlice';
import './css/pagination.css'

export const Pagination = () => {

    const productData = useSelector(state => state.product.products);
    const dispatch = useDispatch();

    const pages = []

    for (let i = 1; i <= productData.totalPages + 1; i++) {
        pages.push(i)
    }

    return (
        <div className='pagination'>
            {pages.map(pageNumber =>
                <button key={pageNumber}
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(fetchProduct(pageNumber - 1))}
                >
                    {pageNumber}
                </button>
            )}
        </div>
    )
}