import React, { useContext, useEffect, useState } from 'react'
import {Link, useParams, useSearchParams } from 'react-router-dom'
import { productContext } from '../utils/Context'
import axios from '../utils/axios';
import Loading from './Loading';
import Home from './Home';
const Details = () => {

    const [product , setProduct]= useState(null)


   const {id} = useParams();
   console.log(id);
 
    const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(`/products/${id}`);
          setProduct(data);
        console.log(data);

      } catch (error) {
        console.error(error);
      }
    }
   

   useEffect(() =>{

    getSingleProduct();

   }, [])




  return ( product ? (   <div>  <div className="w-[70%] flex h-full justify-between items-center  m-auto  p-[10%] ">

            <img className='object-contain h-[80%] w-[40%] ' src={`${product.image}`}  alt="" />
            <div className="content  w-[50%]">

                <h1 className='text-3xl'>{product.title}</h1>
                <h2 className='text-zinc-400 my-5'>{product.category}</h2>
                <h2 className='mb-2 text-red-300'>$  {product.price}</h2>
                <p className='mb-5'> {product.description}</p>
                <Link className=' mr-5 py-2 px-5 border rounded border-blue-200 text-blue-600'>Edit</Link>
                <Link className='py-2 px-5 border rounded border-red-200 text-red-600'>Delete</Link>
            </div>
            </div>
            {/* <Home /> */}

     </div>
  ) : <Loading/>
  )
};


export default Details