import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    let { serviceId } = useParams();
    const [services, setServices] = useState([]);
    const [details, setDetails] = useState({});



    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    useEffect(() => {
        const Servicesdata = services.find((service) => service.id === serviceId);
        setDetails(Servicesdata);
    }, [services]);

    return (
        <div className="d-lg-flex justify-content-center mt-5 gap-5 mx-4">
            <div>
                <img className="img-fluid" src={details?.img} alt="" />
            </div>
            <div className="mt-5">
                <h1>Our {details?.title} Service</h1>
                <p>{details?.about}</p>
                <button className="btn">Get Our Service</button>
            </div>

        </div>
    );
};

export default Details;