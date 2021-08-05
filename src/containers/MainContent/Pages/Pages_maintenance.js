import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';

class Pages_maintenance extends Component{

    componentDidMount() {
        if(this.props.loginpage === false)
        {
          this.props.UpdateLogin();
        }
        window.onpopstate  = (e) => {
          this.props.UpdateLoginAgain();
        }
       }
 
render(){
    return(
           <AUX>
		      <section className="mt-5 mb-5">
             <div className="container-alt container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="home-wrapper m-t-40">
                           <Link to="/" > <img src="assets/images/logo.png" alt="logo" onClick={()=> this.props.UpdateLoginAgain()} height="30" /></Link>
                            <h3 className="m-t-30">Site is Under Maintenance</h3>
                            <p>Please check back in sometime.</p>

                            <div className="row">
                                <div className="text-center col-md-4">
                                    <div className="card mt-4">
                                        <div className="card-body">
                                            <i className="mdi mdi-airplane-takeoff font-40 m-b-15"></i>
                                            <h6 className="text-uppercase">Why is the Site Down?</h6>
                                            <p className="text-muted m-t-20">There are many variations of passages of
                                                Lorem Ipsum available, but the majority have suffered alteration.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center col-md-4">
                                    <div className="card mt-4">
                                        <div className="card-body">
                                            <i className="mdi mdi-clock-alert font-40 m-b-15"></i>
                                            <h6 className="text-uppercase">
                                                What is the Downtime?</h6>
                                            <p className="text-muted m-t-20">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center col-md-4">
                                    <div className="card mt-4">
                                        <div className="card-body">
                                            <i className="mdi mdi-email font-40 m-b-15"></i>
                                            <h6 className="text-uppercase">
                                                Do you need Support?</h6>
                                            <p className="text-muted m-t-20">If you are going to use a passage of Lorem
                                                Ipsum, you need to be sure there isn't anything embar.. <a
                                                        href="mailto:no-reply@domain.com"
                                                        className="text-decoration-underline">no-reply@domain.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>		 
           </AUX>
        );
    }
}


const mapStatetoProps = state => {
    return {
        loginpage: state.ui_red.loginpage
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        UpdateLogin: () => dispatch({ type: actionTypes.LOGINPAGE, value: true }),
        UpdateLoginAgain: () => dispatch({ type: actionTypes.LOGINPAGE, value: false })
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Pages_maintenance);
