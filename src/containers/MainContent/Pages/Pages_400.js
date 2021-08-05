import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';

class Pages_400 extends Component{
 


render(){
    return(
           <AUX>
		      <div className="page-content-wrapper">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="ex-page-content text-center">
                                        <h1>404!</h1>
                                        <h3>Sorry, page not found</h3><br></br>
                                        <Link  className="btn btn-primary mb-5 waves-effect waves-light" to="/">Back to Dashboard</Link>
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



export default (Pages_400);
