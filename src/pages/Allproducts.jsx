import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Allproducts() {

    //1 Define url
    const baseUrl = 'https://dummyjson.com/products'

    //4 create a state for holding products
    const [products,setProducts]=useState([])

    //2 Define a function fetch data from the url
    const getData =async ()=>{
        const response = await fetch(baseUrl)
        console.log(response);
        const productData=await response.json()
        console.log(productData.products);//array of products
        setProducts(productData.products) 

    }
    //3 Call the API function `      
    useEffect(()=>{
        getData()
    },[])

console.log(products);

    return (
        <div>
            <section className='bg-dark text-light'>
                <h1 className='text-center p-5 '>All Products</h1>
                <Row className='p-5'>
                  {
                    products.length>0?
                    products.map((item)=>(
                          <Col className='m-3'>
                        <Link to={`/viewProducts/${item.id}`} style={{textDecoration:'none',}}>
                        <Card style={{ width: '18rem',color:'black' }} className='text-center shadow '>
                            <Card.Img variant="top" src={item.
thumbnail} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Body>$ {item.price}</Card.Body>

                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    ))
                    :"Empty"
                  }
                </Row>
            </section>
        </div>
    )
}

export default Allproducts
