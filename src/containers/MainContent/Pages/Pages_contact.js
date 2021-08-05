import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Pages_contact extends Component
{
 
render(){
    return(
           <AUX>
		   
		    <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="text-center">
                                            <h5>Have any questions?</h5>
                                            <p className="text-muted">It is a long established fact that a reader will be of a page when looking at its layout.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row m-t-40">
                                    <div className="col-md-4">
                                        <div>
                                            <h6 className="font-14">Email Address</h6>
                                            <p className="text-muted">supportemail@admiria  .com</p>
                                        </div>
                                        <div className="pt-3">
                                            <h6 className="font-14">Telephone number</h6>
                                            <p className="text-muted">+123 45 56 879</p>
                                        </div>
                                        <div className="pt-3">
                                            <h6 className="font-14">Address</h6>
                                            <p className="text-muted">09 Design Street, Downtown Victoria, Australia</p>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <form className="form-custom">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="sr-only" for="username">Name</label>
                                                        <input type="text" className="form-control" id="username" placeholder="Your Name" required="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="sr-only" for="useremail">Email address</label>
                                                        <input type="email" className="form-control" id="useremail" placeholder="Your Email" required="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="sr-only" for="usersubject">Subject</label>
                                                        <input type="text" className="form-control" id="usersubject" placeholder="Subject" required="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" rows="5" placeholder="Your Message...."></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <button type="button" className="btn btn-primary waves-effect waves-light">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
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

export default Pages_contact;   