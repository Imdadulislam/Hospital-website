import React from 'react';
import { Col, Row } from 'react-bootstrap';
import image from '../../../images/banner/about.jpg'
import Footer from '../../Footer/Footer';
const AboutUs = () => {
    return (
        <div id="aboutUs" className="mt-5">
            <h2 className="text-info mb-5">About Us</h2>
            <Row sm={1} md={2}>
                <Col>
                    <img className="img-fluid" src={image} alt="" />
                </Col>
                <Col className="mt-lg-5">
                    <br />
                    <h2>Welcome To Our Hospital</h2>
                    <p>There arge many variations ohf pacgssages of sorem gpsum ilable,<br /> but the majority have suffered alteration in <br />some form, by ected humour, or randomised words whi Hospital, an institution that is built, staffed, and equipped for the diagnosis <br/>of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching..</p>
                    <p></p>
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;