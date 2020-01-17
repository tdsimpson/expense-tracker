import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Chart from './Chart';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import filters from '../reducers/filters'; //might be working


const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

const ChartInfo = (props) => {

    useEffect(() => {
        getChartData();
    }, [])

    const [selectedDay, setSelectedDay] = useState();

    const [currentMonth, setCurrentMonth] = useState();
    const [chartData, setChartData] = useState({});


    const getChartData = () => {

        //CURRENT MONTH
        setSelectedDay(startDate);
        setCurrentMonth(months[moment().month()]);

        //CHART DATA
        const expenseTimes = props.expenses.map((expense) => moment(expense.createdAt));
        const expenseAmounts = props.expenses.map((expense) => expense.amount / 100);
        //rounding each expense to the day
        const expenseDay = expenseTimes.map((expense) => expense.startOf('day'))

        setChartData({
            datasets: [
                {
                    label: 'Amount',
                    data: expenseAmounts,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                    ]
                }
            ],
            labels: expenseDay,
        })
    }


    return (
        <div>
            {console.log(selectedDay)}
            <Chart
                chartData={chartData}
                timeframe={currentMonth}
            />
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        startDate: filters.stateDate

    };
};

export default connect(mapStateToProps)(ChartInfo);