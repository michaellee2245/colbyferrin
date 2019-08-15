import React, { Component } from 'react';
import $ from 'jquery';

import './bioSection.scss';

class BioSection extends Component {

    state = {
        expandedSection1: false,
        expandedSection2: false,
        expandedSection3: false
    }

    componentDidMount() {
        if(this.state.expandedSection1 === true){
            $('.text-div').addClass('show')
        }
    }

    openSection1 = () => {
        this.setState({ expandedSection1: !this.state.expandedSection1 });
    }
    openSection2 = () => {
        this.setState({ expandedSection2: !this.state.expandedSection2 });
    }
    openSection3 = () => {
        this.setState({ expandedSection3: !this.state.expandedSection3 });
    }

    render() {
        return (
            <div className="bio-container">
                <section
                    className={`${this.state.expandedSection1 ? 'expanded-section1' : 'section1'}`}
                    onClick={() => this.openSection1()}
                >
                    <div
                        className={`text-div ${this.state.expandedSection1 ? 'expanded-section1' : 'hide'}`}
                    >
                        <p>
                        It’s the year 2006. Like anybody, it’s my DREAM to win the school talent show. Every year from 2nd - 5th grade I performed THE BEST beginner piano pieces in the entire show. Yet somehow every year my dream to win was frustrated by weirdos who would dance or do skits or do otherwise “different” things to stand out. Well, I was not having it. 6th grade was my last year and I was determined to win.
                        </p>
                 
                        {/* <br/> */}
                       <p>
                       I knew I had to be different.  So I got thinking. I loved writing poetry,  and I had been listening to more Eminem than your average Latter-day Saint 11-year-old. So what was the natural answer? Rap. Nobody around me was rapping. I wrote my first rap, threw on my Kobe Bryant jersey, and performed it in the 6th grade talent show. That year--my last year--I finally won. At the end the year, we each had to write down what we wanted to be when we grew up. I wrote down, “Rapper.”
                       </p>

                    </div>
                    <button className="b" onClick={() => this.openSection1()}>1</button>
                </section>
                <section
                    className={`${this.state.expandedSection2 ? 'expanded-section2' : 'section2'}`}
                    onClick={() => this.openSection2()}
                >
                    <div
                        className={`text-div ${this.state.expandedSection2 ? 'expanded-section1' : 'hide'}`}
                    >
                        <p>
                        I fell in love with rapping. My parents, however, were not fans. If rap is performed at all in Utah, it’s almost purely done so as a joke. Ya see, rap is viewed in Utah as something so culturally bad, it’s only permissible to be performed as parody.  Something mocking the art form.  Something that is so obviously satirical that no one could POSSIBLY take you seriously. And that’s a bulk of what I did at the start.

                        </p>
                 
                        {/* <br/> */}
                       <p>
                       Although I played around with parody rap to start, I always saw it as more than that. In high school, I started making worksheets for myself to practice rhyming words, making metaphors, and improve myself as an artist. I posted my homemade music videos on YouTube and incorporated a bit of comedic songwriting into my work. I loved humor, plus the comedic element to my writing allowed me to perform in a culture that looked down on rap, but would love to hear it if they could simultaneously laugh at it.

                       </p>

                    </div>
                    <button className="b" onClick={() => this.openSection2()}>2</button>
                </section>
                <section
                    className={`${this.state.expandedSection3 ? 'expanded-section3' : 'section3'}`}
                    onClick={() => this.openSection3()}
                >
                    <div
                        className={`text-div ${this.state.expandedSection3 ? 'expanded-section1' : 'hide'}`}
                    >
                        <p>
                        High school ended. I went on a 2 year church mission. When I got back,I posted my Before and After Mission Rap--a song I wrote half before my mission, and half after. That gained quite a bit of traction among the Latter-day Saint community, which surprised me a bit, given the culture. I was still skeptical about whether or not rap as an art form could be done in a culture that still finds rapping “Green Eggs and Ham” to be a genuine source of entertainment. Seeing the rise of JTM (formerly James the Mormon) during this same post-mission period gave me hope, though.

                        </p>
                 
                        {/* <br/> */}
                       <p>
                       And after 7 semesters at BYU trying out 7 different majors I decided college wasn’t right for me right now. I found an incredible job teaching at a group home for teen girls in state custody, and I decided to give rap a real shot. That’s where I am today. Just a dude seeing if there’s a market for some fun beats and wordplay in Utah. But mainly, I’m just a kid having fun doing something I love.

                       </p>

                    </div>
                    <button className="b" onClick={() => this.openSection3()}>3</button>
                </section>
            </div>
        );
    }
}

export default BioSection;