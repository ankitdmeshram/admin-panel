import React, { Component } from "react";
import { VectorMap } from 'react-jvectormap';
export class Vectormap extends Component {
  
  render() {
   

    return (
      <div style={{width: 500, height: 500}}>
      <VectorMap map={this.props.value}
                 backgroundColor="transparent"
                 ref="map"
                 containerStyle={{
                  width: '80%',
                  height: '60%'
              }}
                 regionStyle={{
                    initial: {
                      fill: "#6f42c1",
                     
                      stroke: "none",
                      "stroke-width": 0,
                      "stroke-opacity": 0
                    },
                    hover: {
                      "fill-opacity": 0.8,
                      cursor: 'pointer'
                    },
                    selected: {
                      fill: '#2938bc'  //what colour clicked country will be
                    },
                    selectedHover: {
                    }      
                  }}
                 containerClassName="map"         
      />
  </div>
    );
  }
}

export default Vectormap;

