import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import SweetAlert  from 'react-bootstrap-sweetalert';

class Ui_sessiontimeout extends Component{
 
    constructor(props) {
        super(props);
        this.state = {timeralert:null, timerswitch:false, seconds: 0,current_time:5 }; 
        this.tick = this.tick.bind(this); 
    } 

    tick() { this.interval = setInterval(() => 
    {   
        this.setState(prevState => ({ seconds: prevState.seconds + 1 })); }, 1000); 
    }

    componentDidMount() {
        this.main_function();  
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    hideAlert() { 
        window.location = '/login';
    }

    confirmAlert() {  this.setState({   timeralert: null  });  }
    main_function()
    {   
        setTimeout(function() {   
            setTimeout(function() {
                this.function1()   }.bind(this),8000);   
                this.function2()  }.bind(this),8000); 
    }

    function1()
    {  
        if(window.location.pathname === "/ui-session-timeout")
        {   window.location = '/pages-login';  }
        else   {  } 
    }
    function2()
    {
          this.tick();
          const nextmsg = () => ( 
          <SweetAlert showCancel 
                    confirmBtnText="Stay Connected" 
                    cancelBtnText="Logout" 
                    confirmBtnBsStyle="success" 
                    cancelBtnBsStyle="danger" 
                    title="Your Session is About to Expire!" 
                    onCancel={() => this.hideAlert()} 
                    onConfirm={() => this.confirmAlert()}>
          Redirecting in 10 seconds.<br></br></SweetAlert> );
          this.setState({  timeralert: nextmsg()  });  
    }


render(){

    return(
           <AUX>
                {this.state.timeralert}
		<div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Bootstrap-session-timeout</h4>
                                <p className="text-muted m-b-30 font-14">Session timeout and keep-alive control
                                    with a nice Bootstrap warning dialog.</p>

                                <div className="text-muted">
                                    <p>After a set amount of idle time, a Bootstrap warning dialog is shown
                                        to the user with the option to either log out, or stay connected. If
                                        "Logout" button is selected, the page is redirected to a logout URL.
                                        If "Stay Connected" is selected the dialog closes and the session is
                                        kept alive. If no option is selected after another set amount of
                                        idle time, the page is automatically redirected to a set timeout
                                        URL.</p>

                                    <p>
                                        Idle time is defined as no mouse, keyboard or touch event activity registered by the browser.
                                    </p>

                                    <p>
                                        As long as the user is active, the (optional) keep-alive URL keeps
                                        getting pinged and the session stays alive. If you have no need to
                                        keep the server-side session alive via the keep-alive URL, you can
                                        also use this plugin as a simple lock mechanism that redirects to
                                        your lock-session or log-out URL after a set amount of idle time.
                                    </p>
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

export default Ui_sessiontimeout;   
