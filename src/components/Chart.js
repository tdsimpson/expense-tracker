import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import moment from 'moment';


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'City'
    }

    render() {
        return (
            <div className="content-container">
                <div className="chart">
                    <Line
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: 'Expenses for ' + this.props.timeframe,
                                fontSize: 25
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            },
                            scales: {
                                xAxes: [{
                                    type: 'time',
                                    position: 'bottom',
                                    time: {
                                        unit: "day",
                                        min: moment("01/01/2020"),
                                        max: moment("01/31/2020")
                                    },
                                }],
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Chart;