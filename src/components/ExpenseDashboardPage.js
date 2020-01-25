import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary'
import ChartInfo from './ChartInfo';
import Catagories from './Catagories';

const ExpenseDashboardPage = () =>
    <div>
        <ExpensesSummary />
        <ChartInfo />
        <ExpenseListFilters />
        <ExpenseList />
        <Catagories />
    </div>

export default ExpenseDashboardPage;