import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary'
import ChartInfo from './ChartInfo';

const ExpenseDashboardPage = () =>
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
        <ChartInfo />
    </div>

export default ExpenseDashboardPage;