import React, { useEffect, useRef, useState } from 'react';
import './home.scss'
import $ from 'jquery'
import { TimelineLite, Power2 } from 'gsap/all'

import homeBackground from '../assets/colby-landing-66-edit.jpg';
import nameText from '../assets/colby-ferrin.png';

const Home = () => {

    let homeImage = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let nameBox = useRef(null);

    const [tl] = useState(new TimelineLite({paused: false}))

    useEffect(() => {
        tl
        .fromTo(homeImage, 1, {height:"0%"}, {height:"80%", ease: Power2.easeInOut})
        .fromTo(homeImage, 1.1, {width:"100%"}, {width:"80%", ease: Power2.easeInOut})
        .fromTo(box1, 1, {width:"0%"}, {width:"700px", ease:Power2.easeInOut}, "-=1")
        .fromTo(box2, 1, {width:"0%"}, {width:"300px", ease:Power2.easeInOut}, "-=1")
        .fromTo(nameBox, .5, {y:-150}, {y:0, ease:Power2.easeInOut}, "-=.7")
    })

    return (
        <div className="home-container" id="home">
            <div  className="name-box">
                <img ref={el => (nameBox = el)} src={nameText} alt="Colby Ferrin"/>
            </div>

            <img ref={el => (homeImage = el)} src={homeBackground} alt="Colby Ferrin in hallway" />
            <div ref={el => (box1= el)} className="box1"></div>
            <div ref={el => (box2 = el)}className="box2"></div>

        </div>
    )

}
export default Home