import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import {Polar} from 'react-chartjs-2';

class PolarChart extends Component{

render(){
    const data = {
        labels: [
          'January',
          'February',
          'March',
          'April'
        ],
        datasets: [{
         label: 'Sales Analytics',
          data: [30, 70, 85, 25],
          backgroundColor: ['#38a4f8','#02a499','#ec4561','#3c4ccf'],
          hoverBackgroundColor: ['#02a499']
        }]
      };
      
      const option = {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat((currentValue/total*100).toFixed(1));
              return currentValue + ' (' + percentage + '%)';
            },
            title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }
          }
        }
      }

    return(
            <AUX>
                <Polar data={data} options={option} />
            </AUX>
        );
    }
}

export default PolarChart;   