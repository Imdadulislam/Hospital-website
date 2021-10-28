import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Servics.css'

const Service = ({ service }) => {
    const { id, title, about, img } = service;
    return (
        <>
            <Col>
                <Card className="p-2" >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{about}</Card.Text>
                        <Link to={`/details/${id}`}>
                            <Button variant="primary">More Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>



        </>
    );
};

export default Service;