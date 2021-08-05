import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component{

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
          data: [30, 50, 45, 28, 74, 85, 50, 46 ],
          backgroundColor: ['#02a499','#02a499','#02a499','#02a499','#02a499','#02a499','#02a499','#02a499'],
          hoverBackgroundColor: ['#02a499','#02a499','#02a499','#02a499','#02a499','#02a499','#02a499','#02a499']
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
             <Bar data={data} options={option}/>
            </AUX>
        );
    }
}

export default BarChart;   