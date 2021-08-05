import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const colors = {
  pattern : ['#6d60b0','#4ac18e','#5468da'] 
};

const data = {
  columns: [
      ['Desktop', 30, 20, 50, 40, 60, 50],
      ['Tablet', 200, 130, 90, 240, 130, 220],
      ['iPhone', 300, 200, 160, 400, 250, 250],
      ['iMacs', 200, 130, 90, 240, 130, 220],
      ['Macbooks', 130, 120, 150, 140, 160, 150],
      ['SonyVaio', 90, 70, 20, 50, 60, 120],
  ],
  type: 'bar',
  types: {
    iPhone: 'spline',
    iMacs: 'line',
    Macbooks: 'area',
  },
  groups: [
      ['Desktop','Tablet']
  ]
}

class MixedChart extends Component{

render(){
    return(
            <AUX>
                  <C3Chart data={data} style={{ height : "370px" }} color={colors}  />
            </AUX>
        );
    }
}

export default MixedChart;   