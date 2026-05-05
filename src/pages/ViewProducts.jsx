import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addTocart } from '../redux/slices/cartSlice'

function ViewProducts() {

    const dispatch = useDispatch()

    //1 get product id from the url
    const {id} = useParams()
    console.log(id); //params = {id: '13'}


     //1 Define url
    const baseUrl = `https://dummyjson.com/products/${id}`

        //4 create a state for holding products
        const [products,setProducts]=useState({})


      //2 Define a function fetch data from the url
    const getData =async ()=>{
        const response = await fetch(baseUrl)
        console.log(response)
         const productData=await response.json()
         console.log(productData);//product data as object
         setProducts(productData)
         
    }
     //3 Call the API function `      
        useEffect(()=>{
            getData()
        },[])

  return (
    <div>
            <Row className='p-5 text-center'>
                <Col>
                <img src={products.thumbnail} alt="" />
                </Col>
                <Col className='p-5'>
                <h1>{products.title}</h1>
                <h2>{products.price}</h2>
                <p>{products.
description}</p>
                        <Row>
                            <Col><Button onClick={()=>dispatch(addToWishlist(products))}>Add To Wishlist</Button></Col>

                            <Col><Button onClick={()=>dispatch(addTocart(products))}>Add To Cart</Button></Col>
                        </Row>
                </Col>
            </Row>
    </div>
  )
}

export default ViewProducts
