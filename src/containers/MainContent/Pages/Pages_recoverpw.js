import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';

class Pages_recoverpw extends Component{
    
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
		   <div className="accountbg"></div>
          <div className="wrapper-page">

            <div className="card">
                <div className="card-body">

                    <h3 className="text-center m-0">
                        <Link to="/" onClick={()=> this.props.UpdateLoginAgain()}  className="logo logo-admin"><img src="assets/images/logo.png" height="30" alt="logo" /></Link>
                    </h3>

                    <div className="p-3">
                        <h4 className="font-18 m-b-5 text-center">Reset Password</h4>
                        <p className="text-muted text-center">Enter your Email and instructions will be sent to you!</p>

                        <form className="form-horizontal m-t-30" action="/">

                            <div className="form-group">
                                <label for="useremail">Email</label>
                                <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                            </div>

                            <div className="form-group row m-t-20">
                                <div className="col-12 text-right">
                                    <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

            <div className="m-t-40 text-center">
                <p className="text-white">Remember It ? <Link to="pages_login" className="font-500 font-14 text-white font-secondary"> Sign In Here </Link> </p>
                <p className="text-white">© {new Date().getFullYear()-1} -  {new Date().getFullYear()} Admiria. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
            </div>
        </div>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Pages_recoverpw);