import React from 'react'

const Landing_Text = () => {
    return (
        <div className="landing-body">
            <div className="landing-text-info-area">
                <p className="landing-text__title">Expense tracking</p>
                <p className="landing-text__title">made easy</p>
                <p className="landing-text__paragraph">Stay on top of
                your spending with Expense Tracker. An online
                    tracking tool to help you better understand your
                habits and make measurable change. </p>
                <button className="button">Get Started</button>
            </div>
            <div>
                <img className="pig" src="/images/pigIllustration.png" />
            </div>
        </div>
    )
}

export default Landing_Text;