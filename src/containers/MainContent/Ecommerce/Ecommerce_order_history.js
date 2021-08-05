import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class ecommerce_order_history extends Component
{
     
render(){
    return(
           <AUX>
            <div className="page-content-wrapper">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="font-40 text-primary mr-0 float-right"><i className="mdi mdi-cart-outline"></i></span>
                                <div className="mini-stat-info">
                                    <h3 className="counter font-light mt-0">$36,410</h3>
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-10 text-muted">Total Orders <span className="pull-right"><i className="fa fa-caret-down text-danger m-r-5"></i>3.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="font-40 text-success mr-0 float-right"><i className="mdi mdi-currency-usd"></i></span>
                                <div className="mini-stat-info">
                                    <h3 className="counter font-light mt-0">$29,854</h3>
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-10 text-muted">Successful Orders <span className="pull-right"><i className="fa fa-caret-up text-success m-r-5"></i>8.51%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="font-40 text-warning mr-0 float-right"><i className="mdi mdi-fingerprint"></i></span>
                                <div className="mini-stat-info">
                                    <h3 className="counter font-light mt-0">$4,512</h3>
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-10 text-muted">Refunds <span className="pull-right"><i className="fa fa-caret-down text-danger m-r-5"></i>5.52%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="mini-stat clearfix bg-white">
                                <span className="font-40 text-danger mr-0 float-right"><i className="mdi mdi-rotate-right"></i></span>
                                <div className="mini-stat-info">
                                    <h3 className="counter font-light mt-0">$2,854</h3>
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-10 text-muted">Chargebacks <span className="pull-right"><i className="fa fa-caret-up text-success m-r-5"></i>7.10%</span></p>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <table id="datatable" className="table table-striped dt-responsive nowrap table-vertical" width="100%" cellspacing="0">
                                        <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Amount</th>
                                            <th>Order Date</th>
                                            <th>Payment</th>
                                            <th>Billing Name</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#98541201</a>
                                            </td>
                                            <td>$45</td>
                                            <td>Jul 20, 2017</td>
                                            <td><i className="fa fa-cc-visa text-muted font-20"></i> </td>
                                            <td>Herbert C. Patton</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#85124562</a>
                                            </td>
                                            <td>$521</td>
                                            <td>Jul 18, 2017</td>
                                            <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                            <td>Mathias N. Klausen</td>
                                            <td><span className="badge badge-warning">Refund</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#45123698</a>
                                            </td>
                                            <td>$241</td>
                                            <td>July 14, 2017</td>
                                            <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                            <td>Nikolaj S. Henriksen</td>
                                            <td><span className="badge badge-warning">Refund</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#85214796</a>
                                            </td>
                                            <td>$541.34</td>
                                            <td>Jul 15, 2017</td>
                                            <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                            <td>Kasper S. Jessen</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#23145216</a>
                                            </td>
                                            <td>$22</td>
                                            <td>Jul 11, 2017</td>
                                            <td><i className="fa fa-cc-amex text-muted font-20"></i> </td>
                                            <td>Lasse C. Overgaard</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#12365474</a>
                                            </td>
                                            <td>$1,541</td>
                                            <td>Jul 10, 2017</td>
                                            <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                            <td>Johan E. Knudsen</td>
                                            <td><span className="badge badge-danger">Chargeback</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#32569874</a>
                                            </td>
                                            <td>$54</td>
                                            <td>Jul 09, 2017</td>
                                            <td><i className="fa fa-cc-visa text-muted font-20"></i> </td>
                                            <td>Herbert C. Patton</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#52147321</a>
                                            </td>
                                            <td>$845</td>
                                            <td>Jul 08, 2017</td>
                                            <td><i className="fa fa-cc-discover text-muted font-20"></i> </td>
                                            <td>Mathias N. Klausen</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#84125369</a>
                                            </td>
                                            <td>$421</td>
                                            <td>Jul 08, 2017</td>
                                            <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                            <td>Nikolaj S. Henriksen</td>
                                            <td><span className="badge badge-danger">Chargeback</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#74512368</a>
                                            </td>
                                            <td>$652</td>
                                            <td>Jul 02, 2017</td>
                                            <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                            <td>Lasse C. Overgaard</td>
                                            <td><span className="badge badge-danger">Chargeback</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#52140300</a>
                                            </td>
                                            <td>$45</td>
                                            <td>Jul 20, 2017</td>
                                            <td><i className="fa fa-cc-visa text-muted font-20"></i> </td>
                                            <td>Herbert C. Patton</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#85214369</a>
                                            </td>
                                            <td>$521</td>
                                            <td>Jul 18, 2017</td>
                                            <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                            <td>Mathias N. Klausen</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#87412456</a>
                                            </td>
                                            <td>$241</td>
                                            <td>July 14, 2017</td>
                                            <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                            <td>Nikolaj S. Henriksen</td>
                                            <td><span className="badge badge-danger">Chargeback</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#99541241</a>
                                            </td>
                                            <td>$541.34</td>
                                            <td>Jul 15, 2017</td>
                                            <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                            <td>Kasper S. Jessen</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#12354781</a>
                                            </td>
                                            <td>$22</td>
                                            <td>Jul 11, 2017</td>
                                            <td><i className="fa fa-cc-amex text-muted font-20"></i> </td>
                                            <td>Lasse C. Overgaard</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#95412367</a>
                                            </td>
                                            <td>$1,541</td>
                                            <td>Jul 10, 2017</td>
                                            <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                            <td>Johan E. Knudsen</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#96254137</a>
                                            </td>
                                            <td>$54</td>
                                            <td>Jul 09, 2017</td>
                                            <td><i className="fa fa-cc-visa text-muted font-20"></i> </td>
                                            <td>Herbert C. Patton</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#50025441</a>
                                            </td>
                                            <td>$845</td>
                                            <td>Jul 08, 2017</td>
                                            <td><i className="fa fa-cc-discover text-muted font-20"></i> </td>
                                            <td>Mathias N. Klausen</td>
                                            <td><span className="badge badge-warning">Refund</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#32147851</a>
                                            </td>
                                            <td>$421</td>
                                            <td>Jul 08, 2017</td>
                                            <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                            <td>Nikolaj S. Henriksen</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#52146321</a>
                                            </td>
                                            <td>$652</td>
                                            <td>Jul 02, 2017</td>
                                            <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                            <td>Lasse C. Overgaard</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="font-600 text-muted">#32147851</a>
                                            </td>
                                            <td>$421</td>
                                            <td>Jul 08, 2017</td>
                                            <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                            <td>Nikolaj S. Henriksen</td>
                                            <td><span className="badge badge-success">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
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

export default ecommerce_order_history;   