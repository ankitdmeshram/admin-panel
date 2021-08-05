import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Pages_500 extends Component{
 

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
                                        <h1>500</h1>
                                        <h3>Internal Server Error</h3><br></br>
                                        <Link  onClick={()=> this.props.UpdateLoginAgain()} className="btn btn-primary mb-5 waves-effect waves-light" to="/">Back to Dashboard</Link>
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


export default Pages_500;   

