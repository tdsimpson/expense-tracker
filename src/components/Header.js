import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/auth';
import { firebase } from '../firebase/firebase';

export const Header = ({ startLogout, startLogin }) => {

    const [loggedIn, setLoggedIn] = useState();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            // console.log("I RAN")
            if (user) {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
        });
    }, [])


    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/dashboard">
                        <h1>Expense Tracker</h1>
                    </Link>

                    <div>{loggedIn ?
                        <button className="button button--link" onClick={startLogout}>Logout</button> :
                        <button className="button button--link" onClick={startLogin}>Login</button>}
                    </div>
                </div>
            </div>
        </header>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);