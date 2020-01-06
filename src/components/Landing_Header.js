import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Landing_Header = ({ startLogin }) => (
    <header className="landing-header">
        <div className="landing-content-container">
            <div className="landing-header__content">
                <div className=" landing-header__title title-container">
                    <h2>Expense Tracker</h2>
                </div>
                <div className="menu-container">
                    <button className="button button--menu" onClick={startLogin}>Overview</button>
                    <button className="button button--menu" onClick={startLogin}>Why Us</button>
                    <button className="button button--menu" onClick={startLogin}>Github</button>
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