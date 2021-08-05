import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import BarChart from '../../../containers/Chartstypes/Chartjs/BarChart';
import RadarChart from '../../../containers/Chartstypes/Chartjs/RadarChart';
import PolarChart from '../../../containers/Chartstypes/Chartjs/PolarChart';
import PieChart from '../../../containers/Chartstypes/Chartjs/PieChart';
import LineChart from '../../../containers/Chartstypes/Chartjs/LineChart';
import DonutChart from '../../../containers/Chartstypes/Chartjs/DonutChart';

class Chartjs extends Component{
 
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

                                <LineChart />
 
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

                                <BarChart />

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

                               <RadarChart />

                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Polar Chart</h4>

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
                                <PolarChart />
                                 </div>

                            </div>
                        </div>
                    </div>
                </div> 

                
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Pie Chart</h4>

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

                               <PieChart />

                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Donut Chart</h4>

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
                                <DonutChart />
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

export default Chartjs;   