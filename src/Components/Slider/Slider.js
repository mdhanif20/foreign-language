import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
           <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-photo/front-view-female-student-wearing-backpack-holding-copybook-pen-thinking-blue-wall_140725-46520.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Orbin Foreign Language Training Center</h3>
                    <p>The Orbin Foreign Language Training Center (OFLEC) office administers Title VI (domestic) and Fulbright-Hays (overseas) grant and fellowship programs that strengthen foreign language instruction, area/international studies teaching and research, professional development for educators, and curriculum development at the K-12, graduate, and postsecondary levels.</p>
                    <Link to="/service">
                        <Button className="rounded py-2 px-3 fs-6 fw-bolder mt-2 mb-5">Course Buy Now</Button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-photo/front-view-male-student-green-checkered-shirt-with-black-backpack-holding-copybooks-smiling-blue-wall_140725-42439.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Orbin Foreign Language Training Center</h3>
                    <p>The Orbin Foreign Language Training Center (OFLEC) office administers Title VI (domestic) and Fulbright-Hays (overseas) grant and fellowship programs that strengthen foreign language instruction, area/international studies teaching and research, professional development for educators, and curriculum development at the K-12, graduate, and postsecondary levels.</p>
                    <Link to="/service">
                        <Button className="rounded py-2 px-3 fs-6 fw-bolder mt-2 mb-5">Course Buy Now</Button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-photo/front-view-male-student-dark-t-shirt-yellow-backpack-holding-different-files-coffee-blue-wall_140725-46680.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Orbin Foreign Language Training Center</h3>
                    <p>The Orbin Foreign Language Training Center (OFLEC) office administers Title VI (domestic) and Fulbright-Hays (overseas) grant and fellowship programs that strengthen foreign language instruction, area/international studies teaching and research, professional development for educators, and curriculum development at the K-12, graduate, and postsecondary levels.</p>
                    <Link to="/service">
                        <Button className="rounded py-2 px-3 fs-6 fw-bolder mt-2 mb-5">Course Buy Now</Button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;