import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary'
import ChartInfo from './ChartInfo';
import CatagoriesInfo from './CatagoriesInfo';

const ExpenseDashboardPage = () =>
    <div>
        <ExpensesSummary />
        <ChartInfo />
        <CatagoriesInfo />
        <ExpenseListFilters />
        <ExpenseList />

    </div>

export default ExpenseDashboardPage;