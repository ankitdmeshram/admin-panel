import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Ui_modals extends Component{
 
render(){

    return(
           <AUX>
		        <div className="page-content-wrapper">
                <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Modals Examples</h4>
                                <p className="text-muted m-b-30 font-14">Modals are streamlined, but flexible
                                    dialog prompts powered by JavaScript. They support a number of use cases
                                    from user notification to completely custom content and feature a
                                    handful of helpful subcomponents, sizes, and more.</p>

                                <div className="modal bs-example-modal" tabIndex="-1" role="dialog">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title mt-0">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <p>One fine body&hellip;</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">

                                    <div className="col-md-4 m-t-30">
                                        <div className=" text-center">
                                            <p className="text-muted">Standard modal</p>
                                            <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#myModal">Standard modal</button>
                                        </div>

                                        <div id="myModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title mt-0" id="myModalLabel">Modal Heading</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <h5>Overflowing text to show scroll behavior</h5>
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary waves-effect waves-light">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 m-t-30">
                                        <div className="text-center">
                                            <p className="text-muted">Large modal</p>
                                            <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>
                                        </div>


                                        <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title mt-0" id="myLargeModalLabel">Large modal</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 m-t-30">
                                        <div className="text-center">
                                            <p className="text-muted">Small modal</p>
                                            <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal</button>
                                        </div>

                                        <div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-sm">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title mt-0" id="mySmallModalLabel">Small modal</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
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

export default Ui_modals;   