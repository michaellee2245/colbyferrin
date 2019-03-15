import React, {Component} from 'react';
import './social-links.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faItunesNote } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookSquare, faSpotify, faTwitter, faInstagram, faItunesNote, faYoutube);

class SocialLinks extends Component {
    render(){

        const iconSize = "2x";

        return(
            <div>
                <div>Social Links</div>
                <FontAwesomeIcon 
                   icon={['fab', 'twitter']}
                   size={iconSize}
                   className="icon"
               />
                <FontAwesomeIcon 
                    icon={['fab', 'facebook-square']}
                    size={iconSize}
                    className="icon"
                />
                <FontAwesomeIcon 
                    icon={['fab', 'instagram']}
                    size={iconSize}
                    className="icon"
                />
                <FontAwesomeIcon 
                    icon={['fab', 'itunes-note']}
                    size={iconSize}
                    className="icon"
                />
                <FontAwesomeIcon 
                    icon={['fab', 'youtube']}
                    size={iconSize}
                    className="icon"
                />
                <FontAwesomeIcon 
                    icon={['fab', 'spotify']}
                    size={iconSize}
                    className="icon"
                />
            </div>
        )
    }
}

export default SocialLinks;