import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import ReactApexChart from 'react-apexcharts';

class MultipleArea extends Component{

    constructor(props) {
        super(props);

        this.state = {
          options: {
            dataLabels: {
              enabled: false
            },
            toolbar: {
              show: false,
            },
            stroke: {
              show: true,
              curve: 'smooth',
              lineCap: 'butt',
              colors: undefined,
              width: 0,
              dashArray: 0,      
          },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00",
                "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
                "2018-09-19T06:30:00"
              ],
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            }
          },
          series: [{
            name: 'series1',
            data: [10, 40, 25, 51, 42, 80, 15]
          }, {
            name: 'series2',
            data: [15, 35, 45, 92, 34, 62, 14]
          },{
            name: 'series3',
            data: [17, 55, 18, 51, 62, 30, 10]
          }],
        }
      }

render(){

    return(
            <AUX>
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height="330" />
            </AUX>
        );
    }
}

export default MultipleArea;   