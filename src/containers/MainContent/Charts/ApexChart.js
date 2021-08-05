import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';

class ApexChart extends Component
{
  constructor(props) {
    super(props);
 
    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1997, 1993, 1998, 1994, 1995, 1992, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }

render(){
    return(
           <AUX>
             <div className="page-content-wrapper">
                 <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Line Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">25610</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">56210</h5>
                                        <p className="text-muted font-14">Pending</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">12485</h5>
                                        <p className="text-muted font-14">Deactivated</p>
                                    </li>
                                </ul>
                                <Chart options={this.state.options} series={this.state.series} type="line" width={500} height={320} />
 
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Bar Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">6,95,412</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">1,63,542</h5>
                                        <p className="text-muted font-14">Pending</p>
                                    </li>
                                </ul>

                                <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Radar Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">86541</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">2541</h5>
                                        <p className="text-muted font-14">Pending</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">102030</h5>
                                        <p className="text-muted font-14">Deactivated</p>
                                    </li>
                                </ul>
                                <Chart options={this.state.options} series={this.state.series} type="radar" width={500} height={320} />
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Area Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">3201</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">85120</h5>
                                        <p className="text-muted font-14">Pending</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">65214</h5>
                                        <p className="text-muted font-14">Deactivated</p>
                                    </li>
                                </ul>

                                <div align="center">
                                <Chart options={this.state.options} series={this.state.series} type="area" width={500} height={320} />
                                 </div>

                            </div>
                        </div>
                    </div>
                </div>                
            </div> 
        </div>
		
           </AUX>
        );
    }
}

export default ApexChart;   