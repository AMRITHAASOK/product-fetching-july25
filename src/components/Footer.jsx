import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Footer() {
  return (
    <div>
    <Card className='bg-dark text-light text-center'>
      <Card.Header as="h5">ShopNShop</Card.Header>
      <Card.Body>
        <Card.Title>Next generation shoping platform</Card.Title>
        <Card.Text>
          All Rights Reserved Under shopnshop.com
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Footer
