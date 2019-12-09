import React, { useEffect, useRef } from 'react';

import './bio.scss'

import image1 from "../assets/section-1.jpg";
import image2 from "../assets/section-2.jpg";
import image3 from "../assets/section-3.jpg";

const Biography = () => {



    return (

        <div className="bio-container">
            <div className="bio-header" id="biography">
                <h1>About me</h1>
            </div>
            <div className="bio-picture-wrapper">
                <div className="img-section img1">
                    <img src={image1} alt="bio section 1"/>
                </div>
                <div className="img-section img2">
                    <img src={image2} alt="bio section 2" />
                </div>
                <div className="img-section img3">
                    <img src={image3} alt="bio section 3"/>
                </div>
            </div>
        </div>

    );

}

export default Biography;