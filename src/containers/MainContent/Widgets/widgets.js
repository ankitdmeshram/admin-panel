import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { PieChart } from 'react-easy-chart';
import DonutChart from 'react-donut-chart';

const widgets = () => {
    return (
        <>
            <div className="page-content-wrapper">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="mini-stat-icon bg-primary"><i className="mdi mdi-cart-outline"></i></span>
                                <div className="mini-stat-info text-right">
                                    <span className="counter text-primary">15852</span>
                                    Total Sales
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-20 text-muted">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="mini-stat-icon bg-success"><i className="mdi mdi-currency-usd"></i></span>
                                <div className="mini-stat-info text-right">
                                    <span className="counter text-success">956</span>
                                    New Orders
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="mini-stat-icon bg-warning"><i className="mdi mdi-cube-outline"></i></span>
                                <div className="mini-stat-info text-right">
                                    <span className="counter text-warning">5210</span>
                                    New Users
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="mini-stat-icon bg-pink"><i className="mdi mdi-currency-btc"></i></span>
                                <div className="mini-stat-info text-right">
                                    <span className="counter text-pink">20544</span>
                                    Unique Visitors
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="mini-stat-icon bg-purple mr-0 float-right"><i className="mdi mdi-basket"></i></span>
                                <div className="mini-stat-info">
                                    <span className="counter text-purple">25140</span>
                                    Total Sales
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-20 text-muted">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="mini-stat-icon bg-blue-grey mr-0 float-right"><i className="mdi mdi-black-mesa"></i></span>
                                <div className="mini-stat-info">
                                    <span className="counter text-blue-grey">65241</span>
                                    New Orders
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="mini-stat-icon bg-brown mr-0 float-right"><i className="mdi mdi-buffer"></i></span>
                                <div className="mini-stat-info">
                                    <span className="counter text-brown">85412</span>
                                    New Users
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="mini-stat-icon bg-teal mr-0 float-right"><i className="mdi mdi-coffee"></i></span>
                                <div className="mini-stat-info">
                                    <span className="counter text-teal">20544</span>
                                    Unique Visitors
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                                <PieChart
                                    size={68}
                                    innerHoleSize={50}
                                    data={[
                                        { key: 'A', value: 100, color: '#f2f2f2' },
                                        { key: 'B', value: 200, color: '#3bc3e9' },
                                    ]}
                                />
                                <div className="mini-stat-info text-right">
                                    <span className="counter text-info">9541</span>
                                    Total Sales
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-20 text-muted">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                                <PieChart
                                    size={68}
                                    data={[
                                        { key: 'A', value: 100, color: '#f2f2f2' },
                                        { key: 'B', value: 200, color: '#4ac18e' },
                                    ]}
                                />
                                <div className="mini-stat-info text-right">
                                    <span className="counter text-lime">36521</span>
                                    New Orders
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                                <PieChart
                                    size={68}
                                    innerHoleSize={50}
                                    data={[
                                        { key: 'A', value: 100, color: '#f2f2f2' },
                                        { key: 'B', value: 200, color: '#ea553d' },
                                    ]}
                                />
                                <div className="mini-stat-info text-right">
                                    <span className="counter text-danger">6521</span>
                                    New Users
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                                <PieChart
                                    size={68}
                                    data={[
                                        { key: 'A', value: 60, color: '#f2f2f2' },
                                        { key: 'B', value: 200, color: '#1d1e3a' },
                                    ]}
                                />
                                <div className="mini-stat-info text-right">
                                    <span className="counter text-dark">1002</span>
                                    Unique Visitors
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="font-40 text-pink mr-0 float-right"><i className="ti-truck"></i></span>
                                <div className="mini-stat-info">
                                    <h3 className="counter font-light mt-0">362410</h3>
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-10 text-muted">Total income: $56210 <span className="pull-right"><i className="fa fa-caret-down m-r-5"></i>3.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="font-40 text-orange mr-0 float-right"><i className="ti-comments"></i></span>
                                <div className="mini-stat-info">
                                    <h3 className="counter font-light mt-0">89510</h3>
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-10 text-muted">Total income: $56210 <span className="pull-right"><i className="fa fa-caret-down m-r-5"></i>3.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="font-40 text-indigo mr-0 float-right"><i className="ti-briefcase"></i></span>
                                <div className="mini-stat-info">
                                    <h3 className="counter font-light mt-0">55620</h3>
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-10 text-muted">Total income: $56210 <span className="pull-right"><i className="fa fa-caret-down m-r-5"></i>3.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="font-40 text-brown mr-0 float-right"><i className="ti-wallet"></i></span>
                                <div className="mini-stat-info">
                                    <h3 className="counter font-light mt-0">320101</h3>
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-10 text-muted">Total income: $56210 <span className="pull-right"><i className="fa fa-caret-down m-r-5"></i>3.25%</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-5">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 header-title m-b-30">Revenue (This Month)</h4>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mini-stat clearfix bg-white">
                                                <div className="mini-stat-info">
                                                    <span className="counter text-purple">25140</span>
                                                    Total Sales
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className=" mb-0 m-t-20 text-muted">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                                            </div>

                                            <div className="mini-stat clearfix mb-0 bg-white">
                                                <div className="mini-stat-info">
                                                    <span className="counter text-purple">25140</span>
                                                    Total Sales
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className=" mb-0 m-t-20 text-muted">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <br></br>
                                            <DonutChart
                                                height={300}
                                                width={350}
                                                colors={['#6d60b0', '#4ac18e', '#5468da']}
                                                data={[{
                                                    label: 'A',
                                                    value: 25
                                                },
                                                {
                                                    label: 'B',
                                                    value: 50
                                                },
                                                {
                                                    label: 'C',
                                                    value: 35
                                                }
                                                ]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <div className="profile-widget text-center">
                                        <img src="assets/images/users/avatar-2.jpg" className="thumb-lg rounded-circle img-thumbnail" alt="img" />
                                        <h5>Jonathan Doe</h5>
                                        <p><i className="fa fa-map-marker"></i> London</p>

                                        <p className="text-muted">Lorem ipsum dolor sit ametetur adipisicing elit,
                                            sed do eiusmod tempor incididunt adipisicing elit.</p>
                                        <a href="#" className="btn btn-sm btn-purple m-t-20">Follow</a>
                                        <ul className="list-inline row m-t-20 clearfix">
                                            <li className="col-md-4">
                                                <p className="m-b-5 font-18 font-600">23514</p>
                                                <p className="mb-0">Followers</p>
                                            </li>
                                            <li className="col-md-4">
                                                <p className="m-b-5 font-18 font-600">2510</p>
                                                <p className="mb-0">Photos</p>
                                            </li>
                                            <li className="col-md-4">
                                                <p className="m-b-5 font-18 font-600">68541</p>
                                                <p className="mb-0">Like</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-3">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 header-title m-b-30">Revenue (This Month)</h4>

                                    <div className="text-center">


                                        <PieChart
                                            size={160}
                                            innerHoleSize={140}
                                            data={[
                                                { key: 'A', value: 80, color: '#ffbb44' },
                                                { key: 'B', value: 20, color: '#fff' },
                                            ]}
                                        />

                                        <div className="clearfix"></div>
                                        <a href="#" className="btn btn-success m-t-20">View All Data</a>
                                        <ul className="list-inline row m-t-30 clearfix">
                                            <li className="col-6">
                                                <p className="m-b-5 font-18 font-600">95412</p>
                                                <p className="mb-0">Followers</p>
                                            </li>
                                            <li className="col-6">
                                                <p className="m-b-5 font-18 font-600">12030</p>
                                                <p className="mb-0">Like</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default widgets;
