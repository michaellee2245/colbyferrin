import React, { Component } from 'react';
import './bio.scss';
import $ from 'jquery';

class Bio extends Component {

    state = {
        openOne: false,
        openTwo: false,
        openThree: false
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

        if (this.state.openOne) {
            $('.icon-1').css('transform', 'rotate(225deg)')
            $('.bio-title h1').css({ 'margin-top': '-30px' })
            $('.bio-title h2').css({ 'margin-left': '0px' })
            $('.bio-title').css({ 'margin-top': '-80px' })

        }
        else {
            $('.icon-1').css('transform', 'rotate(0deg)')
            $('.bio-title h1').css({ 'margin-top': '-55px' })
            $('.bio-title h2').css({ 'margin-left': '-195px' })
            $('.bio-title').css({ 'margin-top': '0px' })
        }
        if (this.state.openTwo) {
            $('.icon-2').css('transform', 'rotate(225deg)')
            $('.bio-title-2 h1').css({ 'margin-bottom': '40px' })
            $('.bio-title-2 h2').css({ 'margin-bottom': '-30px' })
            $('.bio-title-2').css({ 'margin-bottom': '-90px' })

        }
        else {
            $('.icon-2').css('transform', 'rotate(0deg)')
            // $('.bio-title-2 h1').css({ 'margin-bottom': '80px' })
            $('.bio-title-2 h2').css({ 'margin-bottom': '-100px' })
            $('.bio-title-2').css({ 'margin-bottom': '0' })
        }
        if (this.state.openThree) {
            $('.icon-3').css('transform', 'rotate(225deg)')
            $('.bio-title-3 h1').css({ 'margin-top': '-30px' })
            $('.bio-title-3 h2').css({ 'margin-right': '0px' })
            $('.bio-title-3').css({ 'margin-top': '-80px' })
        }
        else {
            $('.icon-3').css('transform', 'rotate(0deg)')
            $('.bio-title-3 h1').css({ 'margin-top': '-55px' })
            $('.bio-title-3 h2').css({ 'margin-right': '-250px' })
            $('.bio-title-3').css({ 'margin-top': '0px' })
        }

        const { openOne, openTwo, openThree } = this.state;

        return (
            <div className="bio-container">
                <div
                    className="section-1"
                    onClick={this.handleToggleOne}
                >
                    <div className="static-content-bio">
                        <div className="bio-title">
                            <h2>My</h2>
                            <h1>Story</h1>
                        </div>
                        <div className="icon-background">
                            <i
                                className="material-icons icon-1"
                                onClick={this.handleToggleOne}
                            >
                                add
                            </i>
                        </div>
                    </div>
                    <div
                        className="info-container-1"
                        style={{
                            transform: openOne ? 'translateY(-100vh)' : 'translateY(0)'
                        }}
                    >
                        <p className="info-text">
                            It’s the year 2006. Like anybody, it’s my DREAM to win the school talent show. Every year from 2nd - 5th grade I performed THE BEST beginner piano pieces in the entire show. Yet somehow every year my dream to win was frustrated by weirdos who would dance or do skits or do otherwise “different” things to stand out. Well, I was not having it. 6th grade was my last year and I was determined to win.
                            <br />
                            <br />
                            I knew I had to be different.  So I got thinking. I loved writing poetry,  and I had been listening to more Eminem than your average Latter-day Saint 11-year-old. So what was the natural answer? Rap. Nobody around me was rapping. I wrote my first rap, threw on my Kobe Bryant jersey, and performed it in the 6th grade talent show. That year--my last year--I finally won. At the end the year, we each had to write down what we wanted to be when we grew up. I wrote down, “Rapper.”
                        </p>
                    </div>
                </div>
                <div
                    className="section-2"
                    onClick={this.handleToggleTwo}
                >
                    <div className="static-content-bio">
                        <div className="icon-background">
                            <i
                                className="material-icons icon-2"
                                onClick={this.handleToggleTwo}
                            >
                                add
                            </i>
                        </div>
                        <div className="bio-title-2">
                            <h2>My</h2>
                            <h1>Struggle</h1>
                        </div>
                    </div>
                    <div
                        className="info-container-2"
                        style={{
                            transform: openTwo ? 'translateY(-100vh)' : 'translateY(-200vh)'
                        }}
                    >
                        <p className="info-text-2">
                            I fell in love with rapping. My parents, however, were not fans. If rap is performed at all in Utah, it’s almost purely done so as a joke. Ya see, rap is viewed in Utah as something so culturally bad, it’s only permissible to be performed as parody.  Something mocking the art form.  Something that is so obviously satirical that no one could POSSIBLY take you seriously. And that’s a bulk of what I did at the start.
                            <br />
                            <br />
                            Although I played around with parody rap to start, I always saw it as more than that. In high school, I started making worksheets for myself to practice rhyming words, making metaphors, and improve myself as an artist. I posted my homemade music videos on YouTube and incorporated a bit of comedic songwriting into my work. I loved humor, plus the comedic element to my writing allowed me to perform in a culture that looked down on rap, but would love to hear it if they could simultaneously laugh at it.
                        </p>

                    </div>
                </div>
                <div
                    className="section-3"
                    onClick={this.handleToggleThree}
                >
                    <div className="static-content-bio">
                        <div className="bio-title-3">
                            <h2>My</h2>
                            <h1>Reason</h1>
                        </div>
                        <div className="icon-background">
                            <i
                                className="material-icons icon-3"
                                onClick={this.handleToggleThree}
                            >
                                add
                            </i>
                        </div>
                    </div>
                    <div
                        className="info-container-3"
                        style={{
                            transform: openThree ? 'translateY(-100vh)' : 'translateY(0)'
                        }}
                    >
                        <p className="info-text">
                        High school ended. I went on a 2 year church mission. When I got back,I posted my Before and After Mission Rap--a song I wrote half before my mission, and half after. That gained quite a bit of traction among the Latter-day Saint community, which surprised me a bit, given the culture. I was still skeptical about whether or not rap as an art form could be done in a culture that still finds rapping “Green Eggs and Ham” to be a genuine source of entertainment. Seeing the rise of JTM (formerly James the Mormon) during this same post-mission period gave me hope, though. 
                        <br />
                        <br />
                        And after 7 semesters at BYU trying out 7 different majors I decided college wasn’t right for me right now. I found an incredible job teaching at a group home for teen girls in state custody, and I decided to give rap a real shot. That’s where I am today. Just a dude seeing if there’s a market for some fun beats and wordplay in Utah. But mainly, I’m just a kid having fun doing something I love. 
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Bio;