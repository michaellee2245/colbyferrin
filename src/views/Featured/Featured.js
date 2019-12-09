import React, { Component } from 'react';
import './featured.scss'
import spotify from "../assets/spotify.png";
import youtube from "../assets/youtube.png";
import itunes from "../assets/itunes.png";

class Featured extends Component {

    render() {
        return (
            <div className="featured-container">
                <div className="featured-header" id="featured">
                    <h1>Featured Music</h1>
                </div>
                <div className="featured-wrapper">
                    <div className="left-wrapper">
                        <div className="left-wrapper-img">

                        </div>
                    </div>
                    <div className="right-wrapper">
                        <div className="right-icon-wrapper">
                            <div className="spotify-logo-feature">
                                <img src={spotify} alt="spotify"></img>
                                <button className="feature-button">Listen Now</button>
                            </div>
                            <div className="youtube-logo-feature">
                                <img src={youtube} alt="youtube"></img>
                                <button className="feature-button">Listen Now</button>
                            </div>
                            <div className="youtube-logo-feature">
                                <img src={itunes} alt="itunes"></img>
                                <button className="feature-button">Listen Now</button>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Featured