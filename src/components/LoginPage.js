import React from 'react';
import Header from '../components/Header';

export const LoginPage = () => (
    <div>
        <Header />
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expense Tracker</h1>
                <p>Get your expenses under control</p>
            </div>
        </div>
    </div>
);

export default LoginPage;