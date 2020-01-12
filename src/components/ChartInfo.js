import React, { Component } from 'react';
import Chart from './Chart';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

class ChartInfo extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {

        const expenseNames = this.props.expenses.map((expense) => expense.description);
        const expenseAmounts = this.props.expenses.map((expense) => expense.amount / 100);

        this.setState({
            chartData: {
                labels: expenseNames,
                datasets: [
                    {
                        label: 'Population',
                        data: expenseAmounts,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div>
                {this.props.expenses.length}
                <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ChartInfo); 