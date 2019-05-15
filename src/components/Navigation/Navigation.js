import React, { Component } from 'react';
import $ from 'jquery';
import '../Navigation/navigation.scss';


class Navigation extends Component {

    componentDidMount() {
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
            <div className="navigation_wrapper">
                <div className="svg-wrapper">
                    <div>
                        <ul className="page_nav">
                            <li id="nav_1" onClick={this.handleClick(0)}>
                                01
                        {/* <span>Home</span> */}
                            </li>
                            <li id="nav_2" onClick={this.handleClick(1)}>
                                02
                       {/* <span>Bio</span> */}
                            </li>
                            <li id="nav_3" onClick={this.handleClick(2)}>
                                03
                         {/* <span>Featured</span> */}
                            </li>
                            {/* <li id="nav_4" onClick={this.handleClick(3)}>
                                04
                        <span>Commentary</span>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div>
                    <ul className="page_nav">
                        <li id="nav_1" onClick={this.handleClick(0)}>

                            <span>Home</span>
                        </li>
                        <li id="nav_2" onClick={this.handleClick(1)}>

                            <span>Bio</span>
                        </li>
                        <li id="nav_3" onClick={this.handleClick(2)}>

                            <span>Featured</span>
                        </li>

                    </ul>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="97vw" height="100vh" viewBox="0 0 1845.036 1025.892">
                        <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-36 -42.109)">
                            <path id="Path_1" data-name="Path 1" d="M49.86,500.785V55.584H1892.9v997.266H999.342l-25.552,26.216-27.169-26.216H49.86V601.22"
                                transform="translate(-12.86 -12.474)" fill="none" stroke="#fff" stroke-width="2" />
                        </g>
                    </svg>

                </div>



            </div>
        )
    }
}

export default Navigation