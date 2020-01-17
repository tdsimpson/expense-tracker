import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import moment from 'moment';



class Chart extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
    }



    render() {
        return (
            <div className="content-container">
                <div className="chart">

                    <Line
                        data={this.props.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: 'Expenses for ' + moment(this.props.selectedStartDate).format("MMMM"),
                                fontSize: 20
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
                                    },
                                    ticks: {
                                        min: this.props.selectedStartDate,
                                        max: this.props.selectedEndDate,
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            },
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Chart;



