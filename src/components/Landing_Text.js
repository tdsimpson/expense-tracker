import React from 'react'
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const Landing_Text = ({ startLogin }) => {
    return (
        <div className="landing-body">
            <div className="landing-text-info-area">
                <p className="landing-text__title">Expense tracking</p>
                <p className="landing-text__title">made easy</p>
                <p className="landing-text__paragraph">Stay on top of
                your spending with Expense Tracker. An online
                    tracking tool to help you better understand your
                habits and make measurable change. </p>
                <button className="button button--login" onClick={startLogin}>Get Started</button>
            </div>
            <div>
                <img className="pig" src="/images/pigIllustration.png" />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Landing_Text);