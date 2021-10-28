import React from 'react';
import './Banner.css'
import banner from '../../../../images/banner/b.png'

const Banner = () => {
    return (
        <div className="banner-container d-md-flex d-lg-flex justify-content-around ">
            <div className="heading">
                <br/>
                <h6 className="text-primary">COMMITED TO OUR SUCCESS</h6>
                <h1>WE CARE ABOUIT <br/>YOUR <span className="text-primary">HEALTH</span></h1>
                <button className="btn mt-lg-4 mb-3 ms-sm-3">Appoinment</button>
            </div>
            <div className="me-lg-5 mt-sm-2">
                <img className="banner img-fluid" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;