import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import {Radar} from 'react-chartjs-2';

class RadarChart extends Component{

render(){
    const data = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August'
        ],
        datasets: [{
         label: 'Sales Analytics',
          data: [10, 90, 45, 85, 40, 85, 50, 86 ],
          backgroundColor: ['#02a499'],
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
                <Radar data={data} options={option} />
            </AUX>
        );
    }
}

export default RadarChart;   