import React, { useEffect } from 'react';
import { MdViewHeadline } from "react-icons/md";
import Landing_Header from './Landing_Header';
import Landing_Text from './Landing_Text';
import Landing_Picture from './LandingPicture';
import $ from "jquery";


export const LandingPage = () => {

    useEffect(() => {
        $('.responsive-menu').click(function () {
            $('.menu-container').toggleClass('active');;
        });
    }, [])

    return (
        <div className="landing">
            <div className="toggle">
                <MdViewHeadline className="responsive-menu" />
            </div>
            <div className="landing landing-content-container ">
                <Landing_Header />
                <div className="landing-body-content">
                    <Landing_Text />
                    <Landing_Picture />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;