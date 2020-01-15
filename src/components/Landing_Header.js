import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const goToPage = () => {
    window.open("https://github.com/tdsimpson/expense-tracker", '_blank');
}

const notConnected = () => {
    alert("Coming soon. Please click 'Login' or 'Github'");
}

export const Landing_Header = ({ startLogin }) => (
    <header className="landing-header">
        <div className="landing-content-container">
            <div className="landing-header__content">
                <div className="header-logo">
                    <img src="/images/expenseLogo.png" />
                </div>
                <div className=" landing-header__title title-container">
                    <h2>Expense Tracker</h2>
                </div>
                <div className="menu-container">
                    <button className="button button--menu" onClick={notConnected}>Overview</button>
                    <button className="button button--menu" onClick={notConnected}>Why Us</button>
                    <button className="button button--menu" onClick={goToPage}>Github</button>
                    <button className="button button--login" onClick={startLogin}>Login</button>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Landing_Header);