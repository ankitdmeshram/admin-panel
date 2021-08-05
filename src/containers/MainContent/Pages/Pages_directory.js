import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { Sparklines,SparklinesLine  } from 'react-sparklines';

class Pages_directory extends Component{
 
render(){
    return(
           <AUX>
		   <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <div className="media">
                                    <img className="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="m-t-10 font-18 mb-1">Herbert C. Patton</h5>
                                        <p className="text-muted m-b-5">pauline@admiria.com</p>
                                        <p className="text-muted font-14 font-500 font-secondary">Creative Director</p>
                                    </div>
                                </div>

                                <div className="row text-center m-t-20">
                                    <div className="col-6">
                                        <h5 className="mb-0">235</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="mb-0">9512</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                </div>

                                        <Sparklines  height={40} data={[5, 10, 5, 20, 15 ,10, 18,14, 20, -18,18, 17, 29, 10, 18]}>
                                                <SparklinesLine color="#99d5e4" />
                                            </Sparklines>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <div className="media">
                                    <img className="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="m-t-10 font-18 mb-1">Mathias N. Klausen</h5>
                                        <p className="text-muted m-b-5">pauline@admiria.com</p>
                                        <p className="text-muted font-14 font-500 font-secondary">Creative Director</p>
                                    </div>
                                </div>

                                <div className="row text-center m-t-20">
                                    <div className="col-6">
                                        <h5 className="mb-0">9652</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="mb-0">7451</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                </div>
                                <Sparklines  height={40} data={[5, 20, -18,18, 17, 29, 10,10, 5, 20, 15 ,10, 18,14,  18]}>
                                                <SparklinesLine color="#66cba0" />
                                            </Sparklines>

                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <div className="media">
                                    <img className="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-4.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="m-t-10 font-18 mb-1">Nikolaj S. Henriksen</h5>
                                        <p className="text-muted m-b-5">pauline@admiria.com</p>
                                        <p className="text-muted font-14 font-500 font-secondary">Creative Director</p>
                                    </div>
                                </div>

                                <div className="row text-center m-t-20">
                                    <div className="col-6">
                                        <h5 className="mb-0">362</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="mb-0">151</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                </div>

                                <Sparklines  height={40} data={[ 10,10, 5, 20, 15 ,10, 18,14,  18,5, 20, -18,18, 17, 29,]}>
                                                <SparklinesLine color="#eb5840" />
                                            </Sparklines>


                            </div>
                        </div>
                    </div> 
                </div> 


                <div className="row">
                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <div className="media">
                                    <img className="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="m-t-10 font-18 mb-1">Kasper S. Jessen</h5>
                                        <p className="text-muted m-b-5">pauline@admiria.com</p>
                                        <p className="text-muted font-14 font-500 font-secondary">Creative Director</p>
                                    </div>
                                </div>

                                <div className="row text-center m-t-20">
                                    <div className="col-6">
                                        <h5 className="mb-0">10205</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="mb-0">3201</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                </div>

                                <Sparklines  height={40} data={[ 20, -18,18 ,10, 15 ,10, 18,14,  18,5,10, 5, 20, 17, 29,]}>
                                                <SparklinesLine color="#877cbe" />
                                            </Sparklines>


                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <div className="media">
                                    <img className="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-6.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="m-t-10 font-18 mb-1">Lasse C. Overgaard</h5>
                                        <p className="text-muted m-b-5">pauline@admiria.com</p>
                                        <p className="text-muted font-14 font-500 font-secondary">Creative Director</p>
                                    </div>
                                </div>

                                <div className="row text-center m-t-20">
                                    <div className="col-6">
                                        <h5 className="mb-0">1254</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="mb-0">3625</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                </div>

                                   <Sparklines  height={40} data={[ 20, 15 ,10, 18,14,  18,5,10, 5, 20, 17, 29,-18,18 ,10 ]}>
                                                <SparklinesLine color="#fb9617" />
                                            </Sparklines>


                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <div className="media">
                                    <img className="d-flex mr-3 rounded-circle thumb-lg" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="m-t-10 font-18 mb-1">Johan E. Knudsen</h5>
                                        <p className="text-muted m-b-5">pauline@admiria.com</p>
                                        <p className="text-muted font-14 font-500 font-secondary">Creative Director</p>
                                    </div>
                                </div>

                                <div className="row text-center m-t-20">
                                    <div className="col-6">
                                        <h5 className="mb-0">2562</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="mb-0">8451</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </div>
                                </div>

                                <Sparklines  height={40} data={[  18,14,  18,5,10, 5, 20, 17, 29,-18,18 ,10,20, 15 ,10, ]}>
                                                <SparklinesLine color="#b0bec5" />
                                            </Sparklines>

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

export default Pages_directory;   