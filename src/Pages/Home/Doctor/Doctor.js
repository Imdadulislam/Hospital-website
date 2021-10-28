import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { img, name, id } = doctor
    return (
        <div>
            <Col>
                <Card className="p-3">
                    <Card.Img className=
                    "img-fluid" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text></Card.Text>
                        <Button variant="primary">About: {name}</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Doctor;