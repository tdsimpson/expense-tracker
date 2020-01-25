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
                        data={this.props.catagoryData}
                        options={{
                            responsive: true,
                            legend: {
                                position: 'right',
                                labels: {
                                    fontSize: 16,
                                    fontColor: '#333', //dark grey
                                }
                            }
                        }
                        }
                    />
                </div>
            </div>
        )
    }
}

export default Catagories;