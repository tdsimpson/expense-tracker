import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';



class Catagories extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
    }

    render() {
        return (
            <div className="content-container">
                <div className="catagories">

                    <Doughnut
                        data={{
                            datasets: [{
                                data: [10, 20, 30],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(75, 192, 192, 0.6)',
                                    'rgba(153, 102, 255, 0.6)',
                                    'rgba(255, 159, 64, 0.6)'
                                ],
                                hoverBackgroundColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                            }],

                            // These labels appear in the legend and in the tooltips when hovering different arcs
                            labels: [
                                'Catagory 1',
                                'Catagory 2',
                                'Catagory 3'
                            ]
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Catagories;