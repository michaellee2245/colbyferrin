import React, {Component} from 'react';
import Home from '../../views/Home/Home';
import Featured from '../../views/Featured/Featured';
import Bio from '../../views/Bio/Bio';
import BioSection from '../../views/Bio/BioSection';
import Biography from '../../views/Bio/Biography';
// import Commentary from '../../views/Commentary/Commentary';




class SiteContainer extends Component{
    render(){
        return(
            <div>
                
                <Home />
                {/* <Bio /> */}
                {/* <BioSection /> */}
                <Biography />
                <Featured />
                
            </div>

        )
    }
}

export default SiteContainer