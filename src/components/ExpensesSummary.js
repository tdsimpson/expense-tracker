import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total'
import expenses from '../selectors/expenses';


export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totaling {expensesTotal} </h1>
        </div>
    )
}