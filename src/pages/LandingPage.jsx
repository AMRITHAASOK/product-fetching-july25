import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <section>
                <Carousel>
                    <Carousel.Item>
                        <img src="https://img.freepik.com/premium-photo/female-hand-holding-colorful-shopping-bags-yellow-studio-background_116547-76196.jpg" width={'100%'} height={'600px'} alt="" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://img.freepik.com/free-vector/flat-super-sale-banner-with-photo_23-2149026967.jpg?t=st=1720428300~exp=1720431900~hmac=3c37866a74944f89014d430e7183863570d4d58485ad559fb1b0e77b1507f36a&w=740" width={'100%'} height={'600px'} alt="" />
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://image.freepik.com/free-vector/online-shopping-banner-template_23-2148705280.jpg" width={'100%'} height={'600px'} alt="" />
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <Row className='bg-black text-light'>
                <Col>
                    <img src="https://img.freepik.com/premium-photo/exited-attractive-woman-stylish-colorful-outfit-holding-shopping-bags-with-exited-happy-face-exp_1042628-461334.jpg" width={'500px'} alt="" />
                </Col>
                <Col className='p-5'>
                    <h1>ShopNShop</h1>
                    <h3>Shop smart,Live better</h3>
                    <Link to={'/products'}>
                    <Button>Get Started</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <img src="https://www.middletonshoppingcentre.co.uk/wp-content/uploads/2024/03/Middleton-Slider-Image-3-1-2048x857.jpg" alt="" />
            </Row>
        </div>
    )
}

export default LandingPage
