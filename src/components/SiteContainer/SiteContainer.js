import React, {Component} from 'react';
import Home from '../../views/Home/Home';
import Featured from '../../views/Featured/Featured';
import Bio from '../../views/Bio/Bio';
import Commentary from '../../views/Commentary/Commentary';



class SiteContainer extends Component{
    render(){
        return(
            <div>
                <Home />
                <Bio />
                <Featured />
                <Commentary />
            </div>

        )
    }
}

export default SiteContainer