import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Pages_pricing extends Component{
 
render(){
    return(
           <AUX>
		    <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row text-center">
                    <div className="col-lg-3">
                        <div className="card plan-card mt-4">
                            <div className="card-body">
                                <div className="pt-3 pb-3">
                                    <h1><i className="ion-plane plan-icon"></i></h1>
                                    <h6 className="text-uppercase text-primary">Starter Pack</h6>
                                </div>
                                <div>
                                    <h1 className="plan-price padding-b-15">$19<span className="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                                    <div className="plan-div-border"></div>
                                </div>
                                <div className="plan-features pb-3 mt-3 text-muted padding-t-b-30">
                                    <p>Free Live Support</p>
                                    <p>Unlimited User</p>
                                    <p>No Time Tracking</p>
                                    <p>Free Setup</p>
                                    <a href="#" className="btn btn-primary">Sign Up Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card plan-card mt-4">
                            <div className="card-body">
                                <div className="pt-3 pb-3">
                                    <h1><i className="ion-trophy plan-icon bg-dark"></i></h1>
                                    <h6 className="text-uppercase text-dark">Professional Pack</h6>
                                </div>
                                <div>
                                    <h1 className="plan-price padding-b-15">$29<span className="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                                    <div className="plan-div-border"></div>
                                </div>
                                <div className="plan-features pb-3 mt-3 text-muted padding-t-b-30">
                                    <p>Free Live Support</p>
                                    <p>Unlimited User</p>
                                    <p>No Time Tracking</p>
                                    <p>Free Setup</p>
                                    <a href="#" className="btn btn-dark">Sign Up Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="card plan-card mt-4">
                            <div className="card-body">
                                <div className="pt-3 pb-3">
                                    <h1><i className="ion-umbrella plan-icon bg-pink"></i></h1>
                                    <h6 className="text-uppercase text-pink">Enterprise Pack</h6>
                                </div>
                                <div>
                                    <h1 className="plan-price padding-b-15">$39<span className="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                                    <div className="plan-div-border"></div>
                                </div>
                                <div className="plan-features pb-3 mt-3 text-muted padding-t-b-30">
                                    <p>Free Live Support</p>
                                    <p>Unlimited User</p>
                                    <p>No Time Tracking</p>
                                    <p>Free Setup</p>
                                    <a href="#" className="btn btn-pink">Sign Up Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="card plan-card mt-4">
                            <div className="card-body">
                                <div className="pt-3 pb-3">
                                    <h1><i className="ion-cube plan-icon bg-teal"></i></h1>
                                    <h6 className="text-uppercase text-teal">Unlimited Pack</h6>
                                </div>
                                <div>
                                    <h1 className="plan-price padding-b-15">$49<span className="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                                    <div className="plan-div-border"></div>
                                </div>
                                <div className="plan-features pb-3 mt-3 text-muted padding-t-b-30">
                                    <p>Free Live Support</p>
                                    <p>Unlimited User</p>
                                    <p>No Time Tracking</p>
                                    <p>Free Setup</p>
                                    <a href="#" className="btn btn-teal">Sign Up Now</a>
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

export default Pages_pricing;   