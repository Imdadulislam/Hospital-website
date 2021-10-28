import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Container, Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">

            <Container>
                <h2 className="text-primary my-5 ">Our Hospital Services </h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                    }
                </Row>
            </Container>

        </div>

    );
};

export default Services;