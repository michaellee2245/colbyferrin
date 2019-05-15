import React, { Component } from 'react';
import $ from 'jquery';

import './sidenav.scss';


class SideNav extends Component {

    componentDidMount = () => {
        $(function () {
            var nav = $(".nav-container");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
 
                if (scroll >= 10) {
                    nav.removeClass('nav-container').addClass("small-nav");
                } else {
                    nav.removeClass("small-nav").addClass('nav-container');
                }
            });
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
        $(window).on('scroll', updateNav)
    }

    handleClick = (i) => () => {
        $('body,html').animate(
            { scrollTop: i * window.innerHeight },
            800
        );
    }
    render() {
        return (
            <div className="nav-container">
                <div className="nav-inner">
                    <ul className="page_nav">
                        <li id="nav_3" onClick={this.handleClick(2)}>Featured</li>
                        <li id="nav_2" onClick={this.handleClick(1)}>About Me</li>
                        <li id="nav_1" onClick={this.handleClick(0)}>Home</li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default SideNav;