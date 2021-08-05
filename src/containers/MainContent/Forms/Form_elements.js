import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Form_eliments extends Component{
 
render(){
    return(
           <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title">Textual inputs</h4>
                                        <p className="text-muted m-b-30 font-14">Here are examples of <code
                                                className="highlighter-rouge">.form-control</code> applied to each
                                            textual HTML5 <code className="highlighter-rouge">&lt;input&gt;</code> <code
                                                    className="highlighter-rouge">type</code>.</p>

                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Text</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="text" placeholder="Artisanal kale" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-search-input" className="col-sm-2 col-form-label">Search</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="text" placeholder="How do I shoot web" id="example-search-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-email-input" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="text" placeholder="bootstrap@example.com" id="example-email-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-url-input" className="col-sm-2 col-form-label">URL</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="text" placeholder="https://getbootstrap.com" id="example-url-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-tel-input" className="col-sm-2 col-form-label">Telephone</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="text" placeholder="1-(555)-555-5555" id="example-tel-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-password-input" className="col-sm-2 col-form-label">Password</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="text" placeholder="hunter2" id="example-password-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-number-input" className="col-sm-2 col-form-label">Number</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="number" placeholder="42" id="example-number-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-datetime-local-input" className="col-sm-2 col-form-label">Date and time</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-date-input" className="col-sm-2 col-form-label">Date</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="date" value="2011-08-19" id="example-date-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-month-input" className="col-sm-2 col-form-label">Month</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="month" value="2011-08" id="example-month-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-week-input" className="col-sm-2 col-form-label">Week</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="week" value="2011-W33" id="example-week-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-time-input" className="col-sm-2 col-form-label">Time</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="time" value="13:45:00" id="example-time-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-color-input" className="col-sm-2 col-form-label">Color</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="color" value="#67a8e4" id="example-color-input" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Select</label>
                                            <div className="col-sm-10">
                                                <select className="form-control">
                                                    <option>Select</option>
                                                    <option>Large select</option>
                                                    <option>Small select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Custom Select</label>
                                            <div className="col-sm-10">
                                                <select className="custom-select">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input-lg" className="col-sm-2 col-form-label">Large</label>
                                            <div className="col-sm-10">
                                                <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="example-text-input-lg" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input-sm" className="col-sm-2 col-form-label">Small</label>
                                            <div className="col-sm-10">
                                                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="example-text-input-sm" />
                                            </div>
                                        </div>
                                        <div className="form-group row has-success">
                                            <label for="inputHorizontalSuccess" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control form-control-success" id="inputHorizontalSuccess" placeholder="name@example.com" />
                                                <div className="form-control-feedback">Success! You've done it.</div>
                                                <small className="form-text text-muted">Example help text that remains unchanged.</small>
                                            </div>
                                        </div>
                                        <div className="form-group row has-warning">
                                            <label for="inputHorizontalWarning" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control form-control-warning" id="inputHorizontalWarning" placeholder="name@example.com" />
                                                <div className="form-control-feedback">Shucks, check the formatting of that and try again.</div>
                                                <small className="form-text text-muted">Example help text that remains unchanged.</small>
                                            </div>
                                        </div>
                                        <div className="form-group row has-danger">
                                            <label for="inputHorizontalDnger" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control form-control-danger" id="inputHorizontalDnger" placeholder="name@example.com" />
                                                <div className="form-control-feedback">Sorry, that username's taken. Try another?</div>
                                                <small className="form-text text-muted">Example help text that remains unchanged.</small>
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

export default Form_eliments;   