import React , {Component } from 'react';
import AUX from '../../hoc/Aux_';
import CanvasJSReact from '../../assets/js/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MultipleBar extends Component{

    constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
    

render(){
    const options = {
        animationEnabled: true,
        toolTip: {
            shared: true,
            reversed: true
        },
        legend: {
            verticalAlign: "center",
            horizontalAlign: "right",
            reversed: true,
            cursor: "pointer",
            itemclick: this.toggleDataSeries
        },
        data: [
        {
            type: "stackedColumn",
            name: "General",
            dataPoints: [
                { label: "Jan", y: 23, color: "#47b8c6" },
                { label: "Feb", y: 33, color: "#47b8c6" },
                { label: "Mar", y: 35, color: "#47b8c6" },
                { label: "Apr", y: 26, color: "#47b8c6" },
                { label: "May", y: 37, color: "#47b8c6" },
                { label: "Jun", y: 27, color: "#47b8c6" },
                { label: "Jul", y: 38, color: "#47b8c6" },
                { label: "Aug", y: 28, color: "#47b8c6" },
                { label: "Sept", y: 37, color: "#47b8c6" },
                { label: "Oct", y: 28, color: "#47b8c6" },
                { label: "Nov", y: 38, color: "#47b8c6" },
                { label: "Dec", y: 28, color: "#47b8c6" }
            ]
        },
        {
            type: "stackedColumn",
            name: "Marketing",
            dataPoints: [
                { label: "Jan", y: 14, color: "#e8e7e7" },
                { label: "Feb", y: 12, color: "#e8e7e7" },
                { label: "Mar", y: 14, color: "#e8e7e7" },
                { label: "Apr", y: 13, color: "#e8e7e7" },
                { label: "May", y: 13, color: "#e8e7e7" },
                { label: "Jun", y: 13, color: "#e8e7e7" },
                { label: "Jul", y: 14, color: "#e8e7e7" },
                { label: "Aug", y: 14, color: "#e8e7e7" },
                { label: "Sept", y: 13, color: "#e8e7e7" },
                { label: "Oct", y: 14, color: "#e8e7e7" },
                { label: "Nov", y: 14, color: "#e8e7e7" },
                { label: "Dec", y: 14, color: "#e8e7e7" }
            ]
        }]
    }
    
    return(
            <AUX>
          <CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
            </AUX>
        );
    }
}

export default MultipleBar;   