import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../redux/slices/cartSlice';
import { deleteProduct } from '../redux/slices/wishlistSlice';

function Wishlist() {

    const dispatch = useDispatch()
    const wishlistArray = useSelector((state)=>state.wishlist)
    console.log(wishlistArray); //{items:[]}
    
    const [products,setProducts]=useState([])

    useEffect(()=>{
        setProducts(wishlistArray.items)
    },[wishlistArray.items])

  return (
    <div>
    {/* Wishlist with product */}
    <Row className='p-5'>
        {
            products.length>0?
          products.map((item)=>(
                 <Col>
        <Card style={{ width: '18rem' }} className='shadow'>
      <Card.Img variant="top" src={item.
thumbnail
} width={'200px'} height={'300px'} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
       
        <div className='flex '>
            <Button onClick={()=>dispatch(addTocart(item))} variant="success" className='me-5'>Add To Cart</Button>
        <Button  onClick={()=>dispatch(deleteProduct(item.id))} variant="danger">Remove</Button>
        </div>
      </Card.Body>
    </Card>
        </Col>
            ))
            : ""
        }
       
    </Row>
    {/* Wishlist without product */}
    <Row>
        <img src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png" width={'100%'} height={'600px'} alt="" />
    </Row>
    </div>
  )
}

export default Wishlist
