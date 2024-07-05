import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios  from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import Loader from './Loader';

export default function ProductDetails() {
  const productDetails = useSelector((state) => state.product);
  const { id,  image, title, description} = productDetails;
  const {productId} = useParams();
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) => {
      console.log("Error", err);
    })
    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
   if(productId && productId !== "") fetchProductDetails();
   return () => {
    dispatch(removeSelectedProduct());
   }
  }, [productId])
   console.log(productId)
  console.log(productDetails.title)
  
  // try {
  //   console.log(productId)
    
  // } catch (error) {
  //   console.log(error)
  // }
  return (
    <>
    {Object.keys(productDetails).length === 0 ? (<Loader/>):(
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" key={id}>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          className="object-cover object-center rounded"
          alt='hero'
          src={image}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {title}
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Button
          </button>
        </div>
      </div>
    </div>
    )}
    
    {/*productDetails.map((data) => (
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" key={data.id}>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src={data.image}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {data.title}
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          {data.description}
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Button
          </button>
        </div>
      </div>
    </div>
    ))*/}
    
    </>
  )
}
