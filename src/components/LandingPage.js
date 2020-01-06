import React from 'react';
import Landing_Header from './Landing_Header';
import Landing_Text from './Landing_Text';
import Landing_Picture from './LandingPicture';


export const LandingPage = () => (
    <div className="landing landing-content-container ">
        <Landing_Header />
        <div className="landing-body-content">
            <Landing_Text />
            <Landing_Picture />
        </div>
    </div>
);

export default LandingPage;