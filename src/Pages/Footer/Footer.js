import React from 'react';
import { Col, FormControl, InputGroup, Row, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark mt-5 p-5">
            <div className="d-lg-flex justify-content-center gap-5">
                <div className="text-white">
                    <h2 className="fw-bold text-primary">Ummahani Private Hospital</h2>
                    <h3>ABOUT US</h3>
                    <p>We are here for make your life happier.</p>
                </div>

                <div className="text-white">
                    <h2>+88 <span className="text-primary">01710000000</span></h2>
                    <p>ImdadulIslam419@gmail.com</p>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Your Email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Send
                        </Button>
                    </InputGroup>
                </div>
                
            </div>
                <hr  className="text-primary"/>
                <p className="text-white">Copyright ©2021 All rights reserved | This template is made by Imdadul Islam</p>
            </div>
    );
};

export default Footer;