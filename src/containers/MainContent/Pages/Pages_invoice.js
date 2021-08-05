import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Pages_invoice extends Component{
 
render(){
    return(
           <AUX>
		   
		<div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-12">
                                        <div className="invoice-title">
                                            <h4 className="pull-right font-16"><strong>Order # 12345</strong></h4>
                                            <h3 className="m-t-0">
                                                <img src="assets/images/logo.png" alt="logo" height="26" />
                                            </h3>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-6">
                                                <address>
                                                    <strong>Billed To:</strong><br></br>
                                                    John Smith<br></br>
                                                    1234 Main<br></br>
                                                    Apt. 4B<br></br>
                                                    Springfield, ST 54321
                                                </address>
                                            </div>
                                            <div className="col-6 text-right">
                                                <address>
                                                    <strong>Shipped To:</strong><br></br>
                                                    Kenny Rigdon<br></br>
                                                    1234 Main<br></br>
                                                    Apt. 4B<br></br>
                                                    Springfield, ST 54321
                                                </address>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 m-t-30">
                                                <address>
                                                    <strong>Payment Method:</strong><br></br>
                                                    Visa ending **** 4242<br></br>
                                                    jsmith@email.com
                                                </address>
                                            </div>
                                            <div className="col-6 m-t-30 text-right">
                                                <address>
                                                    <strong>Order Date:</strong><br></br>
                                                    October 7, 2016<br></br>
                                                </address>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="panel panel-default">
                                            <div className="p-2">
                                                <h3 className="panel-title font-20"><strong>Order summary</strong></h3>
                                            </div>
                                            <div className="">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <td><strong>Item</strong></td>
                                                            <td className="text-center"><strong>Price</strong></td>
                                                            <td className="text-center"><strong>Quantity</strong>
                                                            </td>
                                                            <td className="text-right"><strong>Totals</strong></td>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>BS-200</td>
                                                            <td className="text-center">$10.99</td>
                                                            <td className="text-center">1</td>
                                                            <td className="text-right">$10.99</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BS-400</td>
                                                            <td className="text-center">$20.00</td>
                                                            <td className="text-center">3</td>
                                                            <td className="text-right">$60.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BS-1000</td>
                                                            <td className="text-center">$600.00</td>
                                                            <td className="text-center">1</td>
                                                            <td className="text-right">$600.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="thick-line"></td>
                                                            <td className="thick-line"></td>
                                                            <td className="thick-line text-center">
                                                                <strong>Subtotal</strong></td>
                                                            <td className="thick-line text-right">$670.99</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="no-line"></td>
                                                            <td className="no-line"></td>
                                                            <td className="no-line text-center">
                                                                <strong>Shipping</strong></td>
                                                            <td className="no-line text-right">$15</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="no-line"></td>
                                                            <td className="no-line"></td>
                                                            <td className="no-line text-center">
                                                                <strong>Total</strong></td>
                                                            <td className="no-line text-right"><h4 className="m-0">$685.99</h4></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="d-print-none">
                                                    <div className="pull-right">
                                                        <a href="javascript:window.print()" className="btn btn-success waves-effect waves-light"><i className="fa fa-print"></i></a>
                                                        <a href="#" className="btn btn-primary waves-effect waves-light">Send</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Pages_invoice;   