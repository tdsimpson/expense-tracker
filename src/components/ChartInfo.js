import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Chart from './Chart';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

const ChartInfo = (props) => {

    useEffect(() => {
        getChartData();
    }, [])


    const [currentMonth, setCurrentMonth] = useState();
    const [chartData, setChartData] = useState({});


    const getChartData = () => {

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
            {console.log((props.filters.startDate).valueOf())}
            {console.log(props.filters.endDate)}

            <Chart
                chartData={chartData}
                timeframe={currentMonth}
                selectedStateDate={(props.filters.startDate).valueOf()}
                selectedEndDate={(props.filters.endDate).valueOf()}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        filters: state.filters


    };
};

export default connect(mapStateToProps)(ChartInfo);