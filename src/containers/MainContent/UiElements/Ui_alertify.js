import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Ui_alertify extends Component{


    createNotification = (type) => {
        return () => {
          switch (type) {
            case 'standard_log':
              NotificationManager.info('Standard log message');
              break;

              case 'standard_log_with_callback':
              NotificationManager.info('Standard log message with callback message', 'Click me!', 5000, () => {  alert('Standard callback');  });
              break;

              case 'close_on_click':
              NotificationManager.info('Click Me to Close');
              break;

              case 'success':
              NotificationManager.success('Success log message');
              break;

              case 'success_log_with_callback':
              NotificationManager.success('Success log message with callback message', 'Click me!', 5000, () => {  alert('Success callback');  });
              break;

              case 'error':
              NotificationManager.error('Error log message');
              break;

              case 'error_log_with_callback':
              NotificationManager.error('Error log message with callback message', 'Click me!', 5000, () => {  alert('Error callback');  });
              break;

              case 'close_on_10sec':
              NotificationManager.warning('', 'Hiding in 5 seconds', 5000);
              break;

          }
        };
      };
 
render(){
    return(
           <AUX>
		   
		    <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Examples</h4>
                                <p className="text-muted m-b-30 font-14">Alertify.js is a small library which
                                    provides light-weight, high performance browser dialogs.</p>

                                    <div>
                                        <NotificationContainer/>
                                    </div>

                                <div className="row text-center">
                                    <div className="col-xl-3 col-md-4 m-b-30">
                                        <p className="text-muted">Standard Log</p>
                                        <button type="button"  onClick={this.createNotification('standard_log')} className="btn btn-primary waves-effect waves-light" id="alertify-notification">Click me</button>
                                    </div>
                                    <div className="col-xl-3 col-md-4 m-b-30">
                                        <p className="text-muted">Standard Log with callback</p>
                                        <button type="button" onClick={this.createNotification('standard_log_with_callback')}  className="btn btn-primary waves-effect waves-light" id="alertify-notification-callback">Click me</button>
                                    </div>
                                    <div className="col-xl-3 col-md-4 m-b-30">
                                        <p className="text-muted">Success Log</p>
                                        <button type="button"  onClick={this.createNotification('success')} className="btn btn-primary waves-effect waves-light" id="alertify-success">Click me</button>
                                    </div>
                                    <div className="col-xl-3 col-md-4 m-b-30">
                                        <p className="text-muted">Success Log with callback</p>
                                        <button type="button"  onClick={this.createNotification('success_log_with_callback')}  className="btn btn-primary waves-effect waves-light" id="alertify-success-callback">Click me</button>
                                    </div>
                                    <div className="col-xl-3 col-md-4 m-b-30">
                                        <p className="text-muted">Error Log</p>
                                        <button type="button"  onClick={this.createNotification('error')} className="btn btn-primary waves-effect waves-light" id="alertify-error">Click me</button>
                                    </div>
                                    <div className="col-xl-3 col-md-4 m-b-30">
                                        <p className="text-muted">Error Log with callback</p>
                                        <button type="button" onClick={this.createNotification('error_log_with_callback')} className="btn btn-primary waves-effect waves-light" id="alertify-error-callback">Click me</button>
                                    </div>

                                    <div className="col-xl-3 col-md-4 m-b-30">
                                        <p className="text-muted">Closing Log On Click</p>
                                        <button type="button"  onClick={this.createNotification('close_on_click')} className="btn btn-primary waves-effect waves-light" id="alertify-click-to-close">Click me</button>
                                    </div>

                                    <div className="col-xl-3 col-md-4 m-b-30">
                                        <p className="text-muted">Hide in 5 seconds</p>
                                        <button type="button" onClick={this.createNotification('close_on_10sec')} className="btn btn-primary waves-effect waves-light" id="alertify-delay">Click me</button>
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

export default Ui_alertify;   