import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import {Doughnut} from 'react-chartjs-2';

class DonutChart extends Component{

render(){
    const data = {
        labels: [
          'Desktop',
          'Tablets'
        ],
        datasets: [{
          data: [254178, 223829],
          backgroundColor: [
          '#3c4ccf',
          '#ebeff2'
          ],
          hoverBackgroundColor: [
            '#3c4ccf',
            '#ebeff2'
          ]
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
                <Doughnut data={data} options={option} />
            </AUX>
        );
    }
}

export default DonutChart;   