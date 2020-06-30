import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class Chart extends Component {

    chartData = () => {
        return {
            labels: ['Interest', 'Principal'],
            datasets: [
                {
                    label: 'Total Paid',
                    data: [this.props.totalInterest, this.props.loanAmount],
                    backgroundColor: ['#ED4040','#EDEDED'],
                    borderColor: 'black',
                    borderWidth: '1'

                }
            ]
        }
    } 

    render() {
        return (
            <Doughnut
                data={this.chartData()}
                options={{
                    maintainAspectRatio: true,
                    responsive: true
                }} />
        )
    }

}

export default Chart;