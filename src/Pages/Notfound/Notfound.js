import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/banner/2451352-ai.png'

const Notfound = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <Link to="/">
            <button>Go Back</button>
            </Link>
        </div>
    );
};

export default Notfound;