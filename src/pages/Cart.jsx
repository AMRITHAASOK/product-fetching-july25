import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementCart, deleteProduct, incrementcart } from '../redux/slices/cartSlice';

function Cart() {

    const dispatch=useDispatch()
    const cartArray = useSelector((state)=>state.cart)
    console.log(cartArray); //{items:[]}

     const [products,setProducts]=useState([])
    
        useEffect(()=>{
            setProducts(cartArray.items)
        },[cartArray.items])
    

  return (
    <div>
            {/* cart with product  */}
            <Row className='p-5'>
                <Col>
                <h3>Your cart List</h3>
                     <Table striped bordered hover className='shadow'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          products.length>0?
          products.map((item)=>(
            <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td><img src={item.thumbnail} height={'100px'} width={'100px'} alt="" /></td>
          <td >
            <div className='flex'>
                <Button onClick={()=>dispatch(decrementCart(item))}>-</Button>
          <input type="text" value={item.quantity} readOnly  style={{width:'30px'}} className=''/>
          <Button onClick={()=>dispatch(incrementcart(item))} >+</Button>
            </div>
          </td>
           <td>${Math.ceil(item.totalPrice)}</td>
          <td>
           <MdDelete className='fs-2 text-danger' onClick={()=>dispatch(deleteProduct(item.id))} />
          </td>
        </tr>
          ))
          :"empty"
        }
       
        
      </tbody>
    </Table> 
                </Col>
                <Col>
                    <div className='shadow p-5 text-center h-full'>
                        <h3>Cart Summary</h3>
                        <h1>Total : $ {
                          Math.ceil(
                            products.reduce(
                            (sum,item)=>sum+item.totalPrice,0
                          )
                          )
                        }</h1>
                        <Button>Buy Now</Button>
                    </div>
                </Col>
            </Row>
            {/* cart without product */}
            <Row>
                <Col>
                <img src="https://img.freepik.com/premium-psd/empty-cart-shopping-commerce-3d-illustration_66255-2017.jpg" alt="" />
                </Col>
                <Col  className=' p-5 text-center mt-5 '>
                    <h1>Cart Was Empty</h1>
                        <h3>Need more products</h3>
                        <Link to={'/products'}>
                        <Button>Explore Our Products</Button>
                        </Link>
                </Col>
            </Row>
    </div>
  )
}

export default Cart
