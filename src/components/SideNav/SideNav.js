import React, { Component } from 'react';
import $ from 'jquery';
import SocialLinks from '../SocialLinks/SocialLinks';
import SocialLinksMobile from '../SocialLinksMobile/SocialLinksMobile';
import './sidenav.scss';


class SideNav extends Component {

    state = {
        scrollPos: 0,
        mobileOpen: false
    }

    toggleMobile = () => {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        })
    }

    setScroll = () => {
        this.setState({
            scrollPos: document.documentElement.scrollTop
        })
    }

    componentDidMount = () => {

        document.addEventListener("scroll", this.setScroll)

        if (this.state.scrollPos > 900) {

        }


        $(function () {
            var nav = $(".nav-container");
            var social = $(".social-container");
            var icon = $('.icon');
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 10) {
                    nav.removeClass('nav-container').addClass("small-nav");
                    social.removeClass('social-container').addClass("social-container-small");


                } else {
                    nav.removeClass("small-nav").addClass('nav-container');
                    social.removeClass("social-container-small").addClass('social-container');

                }
            });




            // $(window).scroll(function () {
            //     var scroll = $(window).scrollTop();

            //     if (scroll >= 100) {

            //         nav.mouseover(function () {
            //             nav.removeClass("small-nav").addClass("nav-container")
            //             social.removeClass("social-container-small").addClass('social-container');
            //         })
            //         nav.mouseout(function () {
            //             nav.removeClass("nav-container").addClass("small-nav")
            //             social.removeClass("social-container").addClass('social-container-small');
            //         })
            //     }
            // });


        });

        const navigationButtons = $('.page_nav li');

        function updateNav() {
            const activeSection = Math.floor(window.scrollY / window.innerHeight - 0.65)
            navigationButtons.each(function () {
                // console.log(activeSection, this.id[4] - 2)
                if (this.id[4] > 3 ?
                    activeSection === this.id[4] - 1
                    :
                    this.id[4] == 3 ?
                        activeSection === 1 || activeSection === 2
                        :
                        activeSection === this.id[4] - 2
                ) {
                    $(this).addClass('is_selected')

                }
                else $(this).removeClass('is_selected')

            })

        }
        document.addEventListener('scroll', updateNav)

        $("")
    }

    handleClick = (i) => () => {
        $('body,html').animate(
            { scrollTop: i * window.innerHeight },
            800
        );
    }

    handleMobileClick = (i) => () => {
        $('body,html').animate(
            { scrollTop: i * window.innerHeight },
            800
        );
        this.toggleMobile()
    }

    render() {
        const { mobileOpen } = this.state;
        console.log(this.state.scrollPos)
        return (
            <div className="nav-container">
                <div className="nav-inner">
                    <ul className="page_nav">
                        <SocialLinks />
                        <li id="nav_3" onClick={this.handleClick(2)}>Featured</li>
                        <li id="nav_2" onClick={this.handleClick(1)}>About Me</li>
                        <li id="nav_1" onClick={this.handleClick(0)}>Home</li>
                    </ul>
                </div>
                <div className="mobile-nav">
                    <div
                        className="hamburger-menu-wrapper" onClick={this.toggleMobile}
                    >
                        <div className={`${mobileOpen ? "hamburger-menu-left" : "hamburger-menu"}`} />
                    </div>
                </div>
                <div
                    className={`${mobileOpen ? "mobile-open-nav" : "mobile-close-nav"}`}
                >
                    <div className="mobile-open-top">
                        <div
                            className="hamburger-menu-wrapper"
                            onClick={this.toggleMobile}
                        >
                            <div
                                className={`${mobileOpen ? "hamburger-open" : "hamburger-open-right"}`}
                            />
                        </div>
                    </div>
                    <div
                        className={`${mobileOpen ? "mobile-items-open-wrapper" : "mobile-items-closed"}`}
                    >
                        <div
                            className="mobile-item-open" id={`${mobileOpen ? "mobile-item-1" : "mobile-item-1-closed"}`}
                            onClick={this.handleMobileClick(0)}
                        >
                            Home</div>
                        <div
                            className="mobile-item-open" id={`${mobileOpen ? "mobile-item-2" : "mobile-item-2-closed"}`}
                            onClick={this.handleMobileClick(1)}
                        >
                            About Me</div>
                        <div
                            className="mobile-item-open" id={`${mobileOpen ? "mobile-item-3" : "mobile-item-3-closed"}`}
                            onClick={this.handleMobileClick(2)}
                        >
                            Featured</div>
                    </div>
                    {/* <SocialLinks /> */}
                    <SocialLinksMobile 
                        openMobile={mobileOpen}
                    />
                </div>

            </div>
        );
    }
}

export default SideNav;