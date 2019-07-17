import React, { Component } from 'react';
import './social-links-mobile.scss';
import Fade from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faItunesNote } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookSquare, faSpotify, faTwitter, faInstagram, faItunesNote, faYoutube);

class SocialLinksMobile extends Component {

    render() {

        const iconSize = "2x";
        const {openMobile} = this.props;
        console.log(openMobile)

        return (
            <div className="social-container-mobile">

                <Fade delay={4000}>

                    <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        size={iconSize}
                        className="icon-mobile twitter-mobile"
                        id={`${openMobile ? "twitter-open" : "twitter-closed"}`}
                    />
                </Fade>
                <FontAwesomeIcon
                    icon={['fab', 'facebook-square']}
                    size={iconSize}
                    className="icon-mobile"
                    id={`${openMobile ? "facebook-open" : "facebook-closed"}`}
                />
                <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    size={iconSize}
                    className="icon-mobile instagram-mobile"
                    id={`${openMobile ? "instagram-open" : "instagram-closed"}`}
                />

                <FontAwesomeIcon
                    icon={['fab', 'itunes-note']}
                    size={iconSize}
                    className="icon-mobile itunes-mobile"
                    id={`${openMobile ? "itunes-open" : "itunes-closed"}`}
                />
                <FontAwesomeIcon
                    icon={['fab', 'youtube']}
                    size={iconSize}
                    className="icon-mobile youtube-mobile"
                    id={`${openMobile ? "youtube-open" : "youtube-closed"}`}
                />
                <FontAwesomeIcon
                    icon={['fab', 'spotify']}
                    size={iconSize}
                    className="icon-mobile spotify-mobile"
                    id={`${openMobile ? "spotify-open" : "spotify-closed"}`}
                />


            </div>
        )
    }
}

export default SocialLinksMobile;