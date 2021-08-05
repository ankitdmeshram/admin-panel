import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Form_validation extends Component{

    constructor(){
        super();
        this.state={ email:'', email_err:'', name:'',name_err:'', pwd:'',pwd_err:'', pwd1:'', pwd1_err:'', url:'', url_err:'', digits:'' , digits_err:'',
        number:'', number_err:'', alpha_num:'', alpha_num_err: '',min:'',min_err:'', 
        max:'', max_err:'', range:'', range_err:'', minv:'', minv_err:'', maxv:'', maxv_err:'', rangev:'', rangev_err:'', reg_exp:'', reg_exp_err: '' }

         this.handleChangeEmail = this.handleChangeEmail.bind(this);
         this.handleChangeName = this.handleChangeName.bind(this);
         this.handleChangePwd = this.handleChangePwd.bind(this);
         this.handleChangePwd1 = this.handleChangePwd1.bind(this);
         this.handleChangeUrl = this.handleChangeUrl.bind(this);
         this.handleChangeDigits = this.handleChangeDigits.bind(this);
         this.handleChangeNumber = this.handleChangeNumber.bind(this);
         this.handleChangeAplaNum = this.handleChangeAplaNum.bind(this);
         this.handleSubmit1 = this.handleSubmit1.bind(this);
         this.handleSubmit2 = this.handleSubmit2.bind(this);

         this.handleMin = this.handleMin.bind(this);
         this.handleMax = this.handleMax.bind(this);
         this.handleMinv = this.handleMinv.bind(this);
         this.handleMaxv = this.handleMaxv.bind(this);
         this.handleRangev = this.handleRangev.bind(this);
         this.handleRegExp = this.handleRegExp.bind(this);
      }

      handleChangeEmail(e){
        this.setState({email:  e.target.value});
        var EmailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(e.target.value == '') 
          this.setState({email_err: 'Required Field'});
        else if(EmailReg.test(e.target.value)) 
          this.setState({email_err: ''});
        else 
          this.setState({email_err: 'Enter Valid Email'});
      }

      handleChangeName(e){
        this.setState({name:  e.target.value});
          if(e.target.value === '') 
            this.setState({name_err: 'Required Field'});
          else 
            this.setState({name_err: ''});
      }
      handleChangePwd(e){
        this.setState({pwd:  e.target.value});
          if(e.target.value === '') 
            this.setState({pwd_err: 'Required Field'});
          else 
            this.setState({pwd_err: ''});
      }
      handleChangePwd1(e){
        this.setState({pwd1:  e.target.value});
          if(e.target.value === '') 
            this.setState({pwd1_err: 'Required Field'});
         else if(e.target.value != this.state.pwd)
           this.setState({pwd1_err: 'Both should be the same.'});
          else 
            this.setState({pwd1_err: ''});
      }
      handleChangeUrl(e){
        this.setState({url:  e.target.value});
        var isValidUrl = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
          if(e.target.value == '') 
            this.setState({url_err: 'Required Field'});
          else if(isValidUrl.test(e.target.value)) 
            this.setState({url_err: ''});
          else 
            this.setState({url_err: 'Enter Valid URL'});
      }
      handleChangeDigits(e){
        this.setState({digits:  e.target.value}); 
        var isNumeric = /^[1-9]\d*(\.\d+)?$/;
          if(e.target.value === '') 
            this.setState({digits_err: 'Required Field'});
          else if(isNumeric.test(e.target.value)) 
            this.setState({digits_err: ''});
          else 
            this.setState({digits_err: 'Enter Only Digits'});
      }
      handleChangeNumber(e){
        this.setState({number:  e.target.value}); 
        var isNumeric = /^[1-9]\d*(\.\d+)?$/;
          if(e.target.value === '') 
            this.setState({number_err: 'Required Field'});
          else if(isNumeric.test(e.target.value)) 
            this.setState({number_err: ''});
          else 
            this.setState({number_err: 'Enter Only Number'});
      }
      handleChangeAplaNum(e){
        this.setState({alpha_num:  e.target.value}); 
          if(e.target.value === '') 
            this.setState({alpha_num_err: 'Required Field'});
          else 
          this.setState({alpha_num_err: ''});
      }
      handleMin(e){
        this.setState({min:  e.target.value}); 
          if(e.target.value === '') 
            this.setState({min_err: 'Required Field'});
          else if((this.state.min).toString().length < 6)
            this.setState({min_err: 'Its Too Short. It should have 6 characters or more.'});
          else 
            this.setState({min_err: ''});
      }
      handleMax(e){
        this.setState({max:  e.target.value}); 
          if(e.target.value === '') 
            this.setState({max_err: 'Required Field'});
          else if((this.state.max).toString().length > 6)
            this.setState({max_err: 'Its Too Long. It should have 6 characters or less.'});
          else 
          this.setState({max_err: ''});
      }

    
      handleMinv(e){
        this.setState({minv:  e.target.value}); 
        console.log(this.state.min);
          if(e.target.value === '') 
            this.setState({minv_err: 'Required Field'});
          else if(parseFloat(e.target.value) > 6)
            this.setState({minv_err: ''});
          else 
            this.setState({minv_err: 'This value should be greater than or equal to 6'});  
      }
      handleMaxv(e){
        this.setState({maxv:  e.target.value}); 
          if(e.target.value === '') 
            this.setState({maxv_err: 'Required Field'});
          else if(e.target.value < 6)
            this.setState({maxv_err: ''});
          else 
            this.setState({maxv_err: 'This value should be less than or equal to 6'});  
      }
      handleRangev(e){
        this.setState({rangev:  e.target.value}); 
          if(e.target.value === '') 
            this.setState({rangev_err: 'Required Field'});
          else if(e.target.value > 6 && e.target.value < 100)
            this.setState({rangev_err: ''});
          else 
            this.setState({rangev_err: 'This value should be between 6 and 100.'});  
      }
      handleRegExp(e){
        this.setState({reg_exp:  e.target.value});
        var isHex  = /^#[0-9A-F]{6}$/i; 
          if(e.target.value === '') 
            this.setState({reg_exp_err: 'Required Field'});
          else if(isHex.test(e.target.value))
            this.setState({reg_exp_err: ''});
          else 
            this.setState({reg_exp_err: 'This value seems to be invalid'});  
      }

      handleSubmit1()
      {
          if(this.state.name === '') 
              this.setState({name_err: 'Required Field'});
          if(this.state.email === '')
              this.setState({email_err: 'Required Field'});
          if(this.state.pwd === '')
               this.setState({pwd_err: 'Required Field'});
          if(this.state.pwd1 === '')
               this.setState({pwd1_err: 'Required Field'});
          if(this.state.url === '')
                this.setState({url_err: 'Required Field'});
          if(this.state.digits === '')
                this.setState({digits_err: 'Required Field'});
          if(this.state.number === '')
                this.setState({number_err: 'Required Field'});
          if(this.state.alpha_num === '')
               this.setState({alpha_num_err: 'Required Field'});
         
      }
      handleSubmit2()
      {
          if(this.state.min === '') 
              this.setState({min_err: 'Required Field'});
          if(this.state.max === '')
              this.setState({max_err: 'Required Field'});
          if(this.state.range === '')
               this.setState({range_err: 'Required Field'});
          if(this.state.minv === '')
               this.setState({minv_err: 'Required Field'});
          if(this.state.maxv === '')
                this.setState({maxv_err: 'Required Field'});
          if(this.state.rangev === '')
                this.setState({rangev_err: 'Required Field'});
          if(this.state.reg_exp === '')
                this.setState({reg_exp_err: 'Required Field'});
      }

      
 
render(){
    return(
           <AUX>
		       <div className="page-content-wrapper">
                 <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Validation type</h4>
                                <p className="text-muted m-b-30 font-14">Parsley is a javascript form validation
                                    library. It helps you provide your users with feedback on their form
                                    submission before sending it to your server.</p>

                                    <form className="" action="#">
                                    <div className="form-group">
                                        <label>Required</label>
                                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName} placeholder="Enter Name"/>
                                        <span id="err">{this.state.name_err}</span>
                                    </div>

                                    <div className="form-group">
                                        <label>Equal To</label>
                                        <div>
                                            <input type="password" value={this.state.pwd} onChange={this.handleChangePwd}  className="form-control" placeholder="Password"/>
                                          <span id="err">{this.state.pwd_err}</span>
                                        </div>
                                        <div className="m-t-10">
                                            <input type="password" className="form-control"  value={this.state.pwd1} onChange={this.handleChangePwd1} placeholder="Password Re Type" />
                                           <span id="err">{this.state.pwd1_err}</span>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>E-Mail</label>
                                        <div>
                                            <input type="text" value={this.state.email} onChange={this.handleChangeEmail}  className="form-control"  placeholder="Enter a valid e-mail"/>
                                         <span id="err">{this.state.email_err}</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>URL</label>
                                        <div>
                                            <input  type="text" value={this.state.url} onChange={this.handleChangeUrl} className="form-control" placeholder="URL"/>
                                            <span id="err">{this.state.url_err}</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Digits</label>
                                        <div>
                                            <input type="text" value={this.state.digits} onChange={this.handleChangeDigits} className="form-control" placeholder="Enter only digits"/>
                                            <span id="err">{this.state.digits_err}</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Number</label>
                                        <div>
                                            <input type="text" value={this.state.number} onChange={this.handleChangeNumber} className="form-control" placeholder="Enter Number" />
                                            <span id="err">{this.state.number_err}</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Alphanumeric</label>
                                        <div>
                                            <input type="text" value={this.state.alpha_num} onChange={this.handleChangeAplaNum} className="form-control" placeholder="Enter Alpha Numeric"/>
                                            <span id="err">{this.state.number_err}</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Textarea</label>
                                        <div>
                                            <textarea  className="form-control" rows="5"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div>
                                            <button  onClick={this.handleSubmit1} type="button" className="btn btn-primary waves-effect waves-light">
                                                Submit
                                            </button>
                                            <button type="reset" className="btn btn-secondary waves-effect m-l-5">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Range validation</h4>
                                <p className="text-muted m-b-30 font-14">Parsley is a javascript form validation
                                    library. It helps you provide your users with feedback on their form
                                    submission before sending it to your server.</p>

                                    <form action="#">
                                    <div className="form-group">
                                        <label>Min Length</label>
                                        <div>
                                        <input type="text" className="form-control" value={this.state.min} onChange={this.handleMin} placeholder="Min 6 chars."/>
                                        <span id="err">{this.state.min_err}</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Max Length</label>
                                        <div>
                                        <input type="text" className="form-control" value={this.state.max} onChange={this.handleMax} placeholder="Max 6 chars."/>
                                        <span id="err">{this.state.max_err}</span>
                                        </div>
                                    </div>
                                   
                                    <div className="form-group">
                                        <label>Min Value</label>
                                        <div>
                                            <input type="text" className="form-control" value={this.state.minv} onChange={this.handleMinv}
                                                    placeholder="Min value is 6"/>
                                            <span id="err">{this.state.minv_err}</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Max Value</label>
                                        <div>
                                            <input type="text" className="form-control" value={this.state.maxv} onChange={this.handleMaxv}
                                                 placeholder="Max value is 6"/>
                                            <span id="err">{this.state.maxv_err}</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Range Value</label>
                                        <div>
                                            <input className="form-control" type="text" value={this.state.rangev} onChange={this.handleRangev}
                                                     placeholder="Number between 6 - 100"/>
                                            <span id="err">{this.state.rangev_err}</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Regular Exp</label>
                                        <div>
                                            <input type="text" className="form-control" value={this.state.reg_exp} onChange={this.handleRegExp}
                                                    placeholder="Hex. Color"/>
                                            <span id="err">{this.state.reg_exp_err}</span>
                                        </div>
                                    </div>

                                    <div className="form-group m-b-0">
                                        <div>
                                            <button onClick={this.handleSubmit2} type="button" className="btn btn-primary waves-effect waves-light">
                                                Submit
                                            </button>
                                            <button type="reset" className="btn btn-secondary waves-effect m-l-5">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
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

export default Form_validation;   