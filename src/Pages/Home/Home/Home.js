import React from 'react';
import Footer from '../../Footer/Footer';
import AboutUs from '../About Us/AboutUs';
import ContactUs from '../Contact Us/ContactUs';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;