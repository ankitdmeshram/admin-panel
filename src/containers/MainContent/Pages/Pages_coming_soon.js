import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
import ReactMomentCountDown from 'react-moment-countdown';
import moment from 'moment';

class Pages_coming_soon extends Component{

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
    
    const dateInFuture = moment('2020-1-31 00:00:00', 'YYYY-MM-DD HH:mm:ss');
    return(
           <AUX>
                <section className="mt-5 mb-5">
                    <div className="container-alt container">
                        <div className="row">
                            <div className="col-12 text-center">
                                 <div className="home-wrapper m-t-40">
                                   <Link to="/"  onClick={()=> this.props.UpdateLoginAgain()}><img src="assets/images/logo.png" alt="logo" height="30" /></Link> 
                                    <h3 className="m-t-30">Coming Soon</h3>
                                    <p>We are working hard to launch a new website with new features. </p>

                                        <div className="coming-watch text-center mb-5">
                                                <div className="countdown">
                                                <div className="lj-countdown-ms testtimes">
                                                    <ReactMomentCountDown toDate={dateInFuture} />
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Pages_coming_soon);

