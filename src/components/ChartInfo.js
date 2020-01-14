import React, { Component } from 'react';
import moment from 'moment';
import Chart from './Chart';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

class ChartInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
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

        const currentMonth = months[moment().month()];
        const expenseNames = this.props.expenses.map((expense) => moment(expense.createdAt));
        const expenseAmounts = this.props.expenses.map((expense) => expense.amount / 100);

        this.setState({
            currentMonth: currentMonth,
            chartData: {
                labels: expenseNames,
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
    };
};

export default connect(mapStateToProps)(ChartInfo); 