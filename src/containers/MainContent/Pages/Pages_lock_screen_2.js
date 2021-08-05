import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';

class Pages_lock_screen_2 extends Component
{
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
        <div className="accountbg" style={{ background : "url('assets/images/bg-2.jpg')",backgroundSize : "cover" }}></div>
        <div className="wrapper-page account-page-full">

            <div className="card">
                <div className="card-body">

                    <h3 className="text-center m-0">
                        <Link to="/" onClick={()=> this.props.UpdateLoginAgain()} className="logo logo-admin"><img src="assets/images/logo.png" height="30" alt="logo" /></Link>
                    </h3>

                    <div className="p-3">
                        <h4 className="font-18 m-b-5 text-center">Locked</h4>
                        <p className="text-muted text-center">Hello Smith, enter your password to unlock the screen!</p>

                        <form className="form-horizontal m-t-30" action="/">

                            <div className="user-thumb text-center m-b-30">
                                <img src="assets/images/users/avatar-1.jpg" className="rounded-circle img-thumbnail" alt="thumbnail" />
                                <h6>Robert Smith</h6>
                            </div>

                            <div className="form-group">
                                <label for="userpassword">Password</label>
                                <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                            </div>

                            <div className="form-group row m-t-20">
                                <div className="col-12 text-right">
                                    <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Unlock</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="m-t-40 text-center">
                <p className="">Not you ? return <Link to="pages_login_2" className="font-500 font-14 font-secondary"> Sign In </Link> </p>
                <p className="">© {new Date().getFullYear()-1} -  {new Date().getFullYear()} Admiria. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Pages_lock_screen_2);
