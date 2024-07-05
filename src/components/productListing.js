import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'
import ProductComponents from './productComponents';

export default function ProductListing() {
    const products = useSelector((state) => state);
    // console.log(products);
    const dispatch = useDispatch();

    const fetchData = async () => {
      const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.error(err);
      })
      // console.log(response.data);
      dispatch(setProducts(response.data));
    }

    useEffect(() => {
      fetchData();
    }, [])
    // console.log(products);
  return (
    <>
    <ProductComponents/>
    </>
  )
}
