import React, { Component } from 'react';
import moment from 'moment';
import Chart from './Chart';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import filters from '../reducers/filters'; //might be working

class ChartInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            startDate: this.props.startDate //might be working
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {

        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        //const currentMonth = this.state.startDate; //might be working
        const currentMonth = months[moment().month()];
        const expenseTimes = this.props.expenses.map((expense) => moment(expense.createdAt));
        const expenseAmounts = this.props.expenses.map((expense) => expense.amount / 100);

        //rounding each expense to the day
        const expenseDay = expenseTimes.map((expense) => expense.startOf('day'))


        this.setState({
            currentMonth: currentMonth,
            chartData: {
                labels: expenseDay,
                datasets: [
                    {
                        label: 'Amount',
                        data: expenseAmounts,
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.6)',
                        ]
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div>
                <Chart
                    chartData={this.state.chartData}
                    timeframe={this.state.currentMonth}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        startDate: filters.startDate //might be working
    };
};

export default connect(mapStateToProps)(ChartInfo); 