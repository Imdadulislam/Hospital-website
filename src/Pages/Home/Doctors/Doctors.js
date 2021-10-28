import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, []);

    return (
        <div id="doctors">
            
            <Container>
                <h2 className="text-primary my-5">Our Hospital Doctors<hr></hr></h2>
               <Row xs={1} md={2} lg={3} className="g-4">

                {
                    doctors.map(doctor =>
                        <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>
                    )
                }
            </Row> 
            </Container>
            
        </div>

    );
};

export default Doctors;