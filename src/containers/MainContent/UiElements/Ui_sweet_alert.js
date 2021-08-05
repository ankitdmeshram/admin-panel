import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import SweetAlert  from 'react-bootstrap-sweetalert';

class Ui_sweet_alert extends Component{

    constructor(props) {
        super(props);
        this.state = {   basic:false, with_title:false, success_msg:false, confirm_msg:false, success_dlg:false, error_dlg:false,  
            dynamic_title:'', dynamic_description: '', confirm_both:false, img_header:false, img_html:false, custom_div:false, 
            emailtxt:'',emailerr:'', step1:false, step1_txt:'', step2:false, step2_txt:'', step3:false, step3_txt:'',step_queue:false,
            final_queue:false, current_ip:'219.91.239.22', close_timer:false, timeralert:null  }; 

        this.handleEmailChange = this.handleEmailChange.bind(this); 
        this.handleStep1Change = this.handleStep1Change.bind(this); 
        this.handleStep2Change = this.handleStep2Change.bind(this); 
        this.handleStep3Change = this.handleStep3Change.bind(this); 
     } 


     handleEmailChange(e)  
     {  
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(e.target.value) === false){
            this.setState({ emailerr: 'Invalid Email'});  
        }
        else {
            this.setState({ emailerr: ''});  
        }  
        this.setState({ emailtxt: e.target.value });
     } 

     handleStep1Change(e)  {  
        this.setState({ step1_txt: e.target.value });
     } 

     handleStep2Change(e)  {  
        this.setState({ step2_txt: e.target.value });
     } 

     handleStep3Change(e)  {  
        this.setState({ step3_txt: e.target.value });
     } 

     stimer() {  
        const getTimer = () => ( 
        <SweetAlert title={ <span>HTML <small>AutoClose Timer</small>!</span>} onConfirm={() => this.hideTimeAlert()} > <span>
        Timer Will Expire after 3 Seconds.</span></SweetAlert> );
        this.setState({    timeralert: getTimer()  });  
        setTimeout(function() {  this.setState({timeralert: null});  }.bind(this),3000);
    }
    hideTimeAlert() {   
        this.setState({   timeralert: null  }); 
    }

 
render(){

    return(
           <AUX>

             {this.state.timeralert}
             {this.state.success_dlg ? 
                        <SweetAlert  
                             success
                             title={this.state.dynamic_title}
                             onConfirm={() => this.setState({ success_dlg: false })}  >
                             {this.state.dynamic_description}
                        </SweetAlert>  : null }

             {this.state.error_dlg ? 
                        <SweetAlert  
                             error
                             title={this.state.dynamic_title}
                             onConfirm={() => this.setState({ error_dlg: false })}  >
                             {this.state.dynamic_description}
                        </SweetAlert>  : null }     

		    <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Examples</h4>
                                <p className="text-muted m-b-30 font-14">A beautiful, responsive, customizable
                                    and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero
                                    dependencies.</p>

                                    <div className="row text-center">
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>A basic message</p>
                                    <button type="button" onClick={() => this.setState({ basic: true })} className="btn btn-primary waves-effect waves-light" id="sa-basic">Click me</button>
                                    {this.state.basic ? 
                                     <SweetAlert  
                                         title="Any fool can use a computer" 
                                         onConfirm={() => this.setState({ basic: false })} > 
                                    </SweetAlert>  : null }
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>A title with a text under</p>
                                    <button type="button" onClick={() => this.setState({ with_title: true })} className="btn btn-primary waves-effect waves-light" id="sa-title">Click me</button>
                                    {this.state.with_title ? 
                                     <SweetAlert  
                                         title="The Internet?" 
                                         warning
                                         onConfirm={() => this.setState({ with_title: false })} > 
                                         That thing is still around?
                                    </SweetAlert>  : null }
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>A success message!</p>
                                    <button type="button"  onClick={() => this.setState({ success_msg: true })} className="btn btn-primary waves-effect waves-light" id="sa-success">Click me</button>
                                    {this.state.success_msg ? 
                                    <SweetAlert  
                                         title="Good job!" 
                                         success
                                         showCancel
                                         confirmBtnBsStyle="success"
                                         cancelBtnBsStyle="danger"
                                         onConfirm={() => this.setState({ success_msg: false })} 
                                         onCancel={() => this.setState({ success_msg: false })} >
                                        You clicked the button!
                                    </SweetAlert>  : null }
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>A warning message, with a function attached to the "Confirm"-button...</p>
                                    <button type="button"  onClick={() => this.setState({ confirm_msg: true })} className="btn btn-primary waves-effect waves-light" id="sa-warning">Click me</button>
                                    {this.state.confirm_msg ? 
                                    <SweetAlert  
                                         title="Are you sure?" 
                                         success
                                         showCancel
                                         confirmBtnBsStyle="success"
                                         cancelBtnBsStyle="danger"
                                         onConfirm={() => this.setState({ confirm_msg: false, success_dlg:true, dynamic_title:'Deleted', dynamic_description:'Your file has been deleted.' })} 
                                         onCancel={() => this.setState({ confirm_msg: false })} >
                                         You won't be able to revert this!
                                    </SweetAlert>  : null }
                                </div>

                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>By passing a parameter, you can execute something else for "Cancel".</p>
                                    <button type="button" onClick={() => this.setState({ confirm_both: true })} className="btn btn-primary waves-effect waves-light" id="sa-params">Click me</button>
                                    {this.state.confirm_both ? 
                                    <SweetAlert  
                                         title="Are you sure?" 
                                         warning
                                         showCancel
                                         confirmBtnBsStyle="success"
                                         cancelBtnBsStyle="danger"
                                         onConfirm={() => this.setState({ confirm_both: false, success_dlg:true, dynamic_title:'Deleted', dynamic_description:'Your file has been deleted.' })} 
                                         onCancel={() => this.setState({ confirm_both: false, error_dlg:true, dynamic_title:'Cancelled', dynamic_description:'Your imaginary file is safe :)' })} >
                                        You won't be able to revert this!
                                    </SweetAlert>  : null }
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>A message with custom Image Header</p>
                                    <button type="button"  onClick={() => this.setState({ img_header: true })} className="btn btn-primary waves-effect waves-light" id="sa-image">Click me</button>
                                    {this.state.img_header ? 
                                    <SweetAlert  
                                         title="Sweet!"
                                         custom
                                         customIcon="assets/images/logo-sm.png"
                                         onConfirm={() => this.setState({ img_header: false })} >
                                         Modal with a custom image.
                                    </SweetAlert>  : null }
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>A message with auto close timer</p>
                                    <button type="button" onClick={() => this.stimer()} className="btn btn-primary waves-effect waves-light" id="sa-close">Click me</button>
                                   
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>Custom HTML description and buttons</p>
                                    <button type="button" onClick={() => this.setState({ img_html: true })}  className="btn btn-primary waves-effect waves-light" id="custom-html-alert">Click me</button>
                                    {this.state.img_html ? 
                                    <SweetAlert  
                                         title={<span>HTML <u>example</u>!</span>}
                                         warning
                                         onConfirm={() => this.setState({ img_html: false })} >
                                           You can use <b>bold</b> text, links and other HTML tags
                                    </SweetAlert>  : null }
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>A message with custom width, padding and background</p>
                                    <button type="button"  onClick={() => this.setState({ custom_div: true })} className="btn btn-primary waves-effect waves-light" id="custom-padding-width-alert">Click me</button>
                                    {this.state.custom_div ? 
                                    <SweetAlert  
                                         title="Custom width, padding, background."
                                         style={{backgroundColor:'#ebebeb',padding:'3em',borderRadius:"20px"}}
                                         onConfirm={() => this.setState({ custom_div: false })} >
                                    </SweetAlert>  : null }
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>Ajax request example</p>
                                    <button onClick={() => this.setState({ ajax_div: true })} type="button" className="btn btn-primary waves-effect waves-light" id="ajax-alert">Click me</button>
                                    {this.state.ajax_div ? 
                                     <SweetAlert
                                     showCancel
                                     title="Submit email to run ajax request"
                                     cancelBtnBsStyle="danger"
                                     confirmBtnBsStyle="success"
                                     onConfirm={() => this.setState({ ajax_div: false,success_dlg: true, dynamic_title:'Ajax request finished!', dynamic_description:'Submitted email : '+this.state.emailtxt, })}
                                     onCancel={() => this.setState({ ajax_div: false })} >
                                    <input type="email" onChange={ this.handleEmailChange } className="form-control" placeholder="Enter Email"  />
                                    <span>{this.state.emailerr}</span>
                                    </SweetAlert>  : null }
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>Chaining modals (queue) example</p>
                                    <button  onClick={() => this.setState({ step1: true })} type="button" className="btn btn-primary waves-effect waves-light" id="chaining-alert">Click me</button>
                                    {this.state.step1 ? 
                                     <SweetAlert
                                     showCancel
                                     title="Question 1"
                                     cancelBtnBsStyle="danger"
                                     confirmBtnText="Next"
                                     onConfirm={() => this.setState({ step1: false, step2:true })}
                                     onCancel={() => this.setState({ step1: false })} >
                                     Chaining swal2 modals is easy
                                    <input type="text" className="form-control"  onChange={ this.handleStep1Change } />
                                    </SweetAlert>  : null }

                                    {this.state.step2 ? 
                                     <SweetAlert
                                     showCancel
                                     title="Question 2"
                                     cancelBtnBsStyle="danger"
                                     confirmBtnText="Next"
                                     onConfirm={() => this.setState({ step2: false, step3:true })}
                                     onCancel={() => this.setState({ step2: false })} >
                                     Chaining swal2 modals is easy
                                    <input type="text" className="form-control"  onChange={ this.handleStep2Change } />
                                    </SweetAlert>  : null }

                                    {this.state.step3 ? 
                                     <SweetAlert
                                     showCancel
                                     title="Question 3"
                                     cancelBtnBsStyle="danger"
                                     confirmBtnText="Next"
                                     onConfirm={() => this.setState({ step3: false, final_step:true })}
                                     onCancel={() => this.setState({ step3: false })} >
                                     Chaining swal2 modals is easy
                                    <input type="text" className="form-control"  onChange={ this.handleStep3Change } />
                                    </SweetAlert>  : null }

                                    {this.state.final_step ? 
                                     <SweetAlert
                                     title="All done!"
                                     confirmBtnText="Lovely!"
                                     onConfirm={() => this.setState({ final_step: false })} >
                                    Your answers : [{this.state.step1_txt}, {this.state.step2_txt}, {this.state.step3_txt}]
                                    </SweetAlert>  : null } 

                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b-30">
                                    <p>Dynamic queue example</p>
                                    <button type="button"  onClick={() => this.setState({ step_queue: true })} className="btn btn-primary waves-effect waves-light" id="dynamic-alert">Click me</button>
                                    {this.state.step_queue ? 
                                     <SweetAlert
                                     title="Your public IP"
                                     confirmBtnText="Show my public IP"
                                     onConfirm={() => this.setState({ step_queue: false, final_queue:true })} >
                                     Your public IP will be received via AJAX request
                                    </SweetAlert>  : null }

                                    {this.state.final_queue ? 
                                     <SweetAlert
                                     confirmBtnText="OK"
                                     title=""
                                     onConfirm={() => this.setState({ final_queue:false })} >
                                     {this.state.current_ip}
                                    </SweetAlert>  : null }
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

export default Ui_sweet_alert;   
