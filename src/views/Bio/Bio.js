import React, { Component } from 'react';
import './bio.scss';
import './bio-open.scss'


class Bio extends Component {

    state = {
        openOne: false,
        openTwo: false,
        openThree: false,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        this.setState({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        });
    }

    handleToggleOne = () => {
        this.setState({
            openOne: !this.state.openOne,
            openTwo: false,
            openThree: false
        })
    }

    handleToggleTwo = () => {
        this.setState({
            openTwo: !this.state.openTwo,
            openOne: false,
            openThree: false,
        })
    }

    handleToggleThree = () => {
        this.setState({
            openThree: !this.state.openThree,
            openOne: false,
            openTwo: false,
        })
    }

    render() {

    
    const {openOne, openTwo, openThree} = this.state;

    return(
            <div className = "bio-container" >
            <div
                className={
                    `section-1 
                    ${openOne ? "section-1-open" : ""}
                    ${openTwo || openThree ? "section-1-small" : ""}
                    `}
                onClick={this.handleToggleOne}
            >

                <div className={`overlay-1 ${openOne ? "overlay-1-open" : ""}`}>
                    <div className="text-wrapper-1">



                        <div className={`text-section-1 ${openOne ? "text-section-1-open" : ""}`}>
                            <p className="info-text">
                                It’s the year 2006. Like anybody, it’s my DREAM to win the school talent show. Every year from 2nd - 5th grade I performed THE BEST beginner piano pieces in the entire show. Yet somehow every year my dream to win was frustrated by weirdos who would dance or do skits or do otherwise “different” things to stand out. Well, I was not having it. 6th grade was my last year and I was determined to win.
                           <br />
                                <br />
                                I knew I had to be different.  So I got thinking. I loved writing poetry,  and I had been listening to more Eminem than your average Latter-day Saint 11-year-old. So what was the natural answer? Rap. Nobody around me was rapping. I wrote my first rap, threw on my Kobe Bryant jersey, and performed it in the 6th grade talent show. That year--my last year--I finally won. At the end the year, we each had to write down what we wanted to be when we grew up. I wrote down, “Rapper.”
                       </p>

                        </div>
                        <div className="icon-background">
                            <i
                                className={`material-icons icon-1 ${openOne ? "icon-1-open" : ""}`}
                                onClick={this.handleToggleOne}
                            >
                                add
                           </i>
                        </div>
                    </div>


                </div>

            </div>
            <div
                className={
                    `section-2 
                    ${openTwo ? "section-2-open" : ""}
                    ${openOne || openThree ? "section-2-small" : ""}
                    `}
                onClick={this.handleToggleTwo}
            >

                <div className={`overlay-2 ${openTwo ? "overlay-2-open" : ""}`}>
                    <div className="text-wrapper-2">

                        <div 
                            className=
                                {`text-section-2 
                                ${openTwo ? "text-section-2-open" : ""}
                            `}>
                            <p className="info-text">
                                I fell in love with rapping. My parents, however, were not fans. If rap is performed at all in Utah, it’s almost purely done so as a joke. Ya see, rap is viewed in Utah as something so culturally bad, it’s only permissible to be performed as parody.  Something mocking the art form.  Something that is so obviously satirical that no one could POSSIBLY take you seriously. And that’s a bulk of what I did at the start.
                           <br />
                                <br />
                                Although I played around with parody rap to start, I always saw it as more than that. In high school, I started making worksheets for myself to practice rhyming words, making metaphors, and improve myself as an artist. I posted my homemade music videos on YouTube and incorporated a bit of comedic songwriting into my work. I loved humor, plus the comedic element to my writing allowed me to perform in a culture that looked down on rap, but would love to hear it if they could simultaneously laugh at it.
                       </p>


                        </div>
                        <div className="icon-background">
                            <i
                                className={`material-icons icon-2 ${openTwo ? "icon-2-open" : ""}`}
                                onClick={this.handleToggleOne}
                            >
                                add
                           </i>
                        </div>
                    </div>


                </div>
            </div>

            <div
                className={
                    `section-3 
                    ${openThree ? "section-3-open" : ""}
                    ${openOne || openTwo ? "section-3-small" : ""}
                    `}
                onClick={this.handleToggleThree}
            >
                <div className={`overlay-2 ${openThree ? "overlay-2-open" : ""}`}>
                    <div className="text-wrapper-3">

                        <div className={`text-section-2 ${openThree ? "text-section-2-open" : ""}`}>
                            <p className="info-text">
                                High school ended. I went on a 2 year church mission. When I got back,I posted my Before and After Mission Rap--a song I wrote half before my mission, and half after. That gained quite a bit of traction among the Latter-day Saint community, which surprised me a bit, given the culture. I was still skeptical about whether or not rap as an art form could be done in a culture that still finds rapping “Green Eggs and Ham” to be a genuine source of entertainment. Seeing the rise of JTM (formerly James the Mormon) during this same post-mission period gave me hope, though.
                                    <br />
                                <br />
                                And after 7 semesters at BYU trying out 7 different majors I decided college wasn’t right for me right now. I found an incredible job teaching at a group home for teen girls in state custody, and I decided to give rap a real shot. That’s where I am today. Just a dude seeing if there’s a market for some fun beats and wordplay in Utah. But mainly, I’m just a kid having fun doing something I love.
                                </p>



                        </div>
                        <div className="icon-background">
                            <i
                                className={`material-icons icon-3 ${openThree ? "icon-3-open" : ""}`}
                                onClick={this.handleToggleOne}
                            >
                                add
                           </i>
                        </div>
                    </div>


                </div>
            </div>
            </div>


        )
    }
}

export default Bio;