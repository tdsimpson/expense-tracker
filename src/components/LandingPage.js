import React, { useEffect } from 'react';
import { MdViewHeadline } from "react-icons/md";
import Landing_Header from './Landing_Header';
import Landing_Text from './Landing_Text';
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
                <div className="responsive-header-content">
                    <p className="responsive-title">Expense Tracker</p>
                    <MdViewHeadline className="responsive-menu" />
                </div>
            </div>
            <div className="landing landing-content-container ">
                <Landing_Header />
                <div>
                    <Landing_Text />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;