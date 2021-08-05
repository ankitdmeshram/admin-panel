import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import ReactApexChart from 'react-apexcharts';

class StackColumn extends Component{
    constructor(props) {
        super(props);

        this.state = {
          options: {
            chart: {
              height: 350,
              type: 'bar',
              stacked: true,
          },
          plotOptions: {
              bar: {
                  horizontal: false,
              },   
          },
          xaxis: {
              categories: [1, 2, 3, 4, 5, 6, 7],
          }, 
          tooltip: {
              y: {
                  formatter: function(val) {  return val  }
              },
          },
          fill: {
              opacity: 1
          },
          colors:['#47b8c6', '#f2f2f2'],
          legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40
          }
          },
          series: [{
            name: 'A',
            data: [44, 55, 41, 67, 22, 43, 21, 49]
          }, {
            name: 'B',
            data: [13, 23, 20, 8, 13, 27, 33, 12]
          }],
        }
      }
    
render(){
    return(
            <AUX>
              <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="330" />
            </AUX>
        );
    }
}

export default StackColumn;   