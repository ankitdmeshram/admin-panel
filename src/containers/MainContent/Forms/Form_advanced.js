import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { SketchPicker } from 'react-color';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MultipleDatePicker from 'react-multiple-datepicker';
import Select from 'react-select';

class Form_advanced extends Component{

    constructor(props) {
        super(props);
     
        this.state = {
          simple_color: false, simple: '#fff', rgb_color: '#fff', rgb: false, cmp_bkg: '#bf98a4', btn: false,
          disbadge : false, disthresh:false, placementbadge:false, textcount:0, optioncount:0, placementcount:0,advanceclass : "badgecount",
          switch1 : true, switch2 : true, switch3 : true, switch4 : true, switch5 : true, switch6 : true, switch7 : true, switch8 : true, switch9 : true,
          default_date: new Date(), default:false, auto_close : new Date(), start_date: new Date(), end_date: new Date(), data_attr:56, postfix:20, prefix:25,
          empty_val : 0, not_attr: 15, explicit_val : 33,  selectedOption: null,selectedOption1: null,
        };

         // Bootsrap Maxlength
         this.threshholdchange =  this.threshholdchange.bind(this);  
         this.optionchange =  this.optionchange.bind(this);
         this.placementchange =  this.placementchange.bind(this);  
         this.textareachange =  this.textareachange.bind(this); 

         // DatePicker
         this.handleDefault = this.handleDefault.bind(this);
         this.handleAutoClose = this.handleAutoClose.bind(this);
         this.handleStart = this.handleStart.bind(this);
         this.handleEnd = this.handleEnd.bind(this);
      }

     //Color Picker
      handleSimple = (color) => {
        this.setState({ simple: color.hex });
      };
      handleRGB = (color) => {
        this.setState({ rgb_color: color.hex });
      };
      handleBtn = (color) => {
        this.setState({ cmp_bkg: color.hex });
      };

       //Bootstrap Maxlength   
       threshholdchange(event) 
       {
           var count = event.target.value.length;
           if(count > 0) {  this.setState({disthresh:true});   } else { this.setState({disthresh:false}); }
           this.setState({threshholdcount: event.target.value.length});
       }
 
       optionchange(event) 
       {
           var count = event.target.value.length;
           if(count > 0) {  this.setState({disbadge:true});   } else { this.setState({disbadge:false}); }
           if(count > 24)  {  this.setState({advanceclass: "badgecountextra"});   }
           else   {  this.setState({advanceclass: "badgecount"});   }
           this.setState({optioncount: event.target.value.length});
       }
 
       placementchange(event) 
       {
           var count = event.target.value.length;
           if(count > 0) {  this.setState({placementbadge:true});   } else { this.setState({placementbadge:false}); }
           this.setState({placementcount: event.target.value.length});
       }
 
       textareachange(event) 
       {
           var count = event.target.value.length;
           if(count > 0) {  this.setState({textareabadge:true});   } else { this.setState({textareabadge:false}); }
           this.setState({textcount: event.target.value.length});
       }

       //DatePicker
       handleDefault(date) {
           console.log(date);
        this.setState({ default_date: date  });
        }
        handleAutoClose(date) {
        this.setState({ auto_close: date  });
        }
        handleStart(date) {
        this.setState({ start_date: date  });
        }
        handleEnd(date) {
            this.setState({ end_date: date  });
        }

      // Select Box
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
           console.log(`Option selected:`, selectedOption);
      }

      handleChange1 = (selectedOption1) => {
        this.setState({ selectedOption1 });
           console.log(`Option selected:`, selectedOption1);
      }
 
render(){
    
    const options = [
        { value: 'Alaska', label: 'Alaska' },
        { value: 'Connecticut', label: 'Connecticut' },
        { value: 'Delaware', label: 'Delaware' },
        { value: 'Florida', label: 'Florida' },
        { value: 'Georgia', label: 'Georgia' },
        { value: 'Indiana', label: 'Indiana' },
        { value: 'Maine', label: 'Maine' },
        { value: 'Maryland', label: 'Maryland' },
        { value: 'Massachusetts', label: 'Massachusetts' },
        { value: 'Michigan', label: 'Michigan' },
        { value: 'New Hampshire', label: 'New Hampshire' },
        { value: 'New Jersey', label: 'New Jersey' },
        { value: 'New York', label: 'New York' },
        { value: 'North Carolina', label: 'North Carolina' },
        { value: 'Ohio', label: 'Ohio' },
        { value: 'Pennsylvania', label: 'Pennsylvania' },
        { value: 'Rhode Island', label: 'Rhode Island' },
        { value: 'South Carolina', label: 'South Carolina' },
        { value: 'Vermont', label: 'Vermont' },
        { value: 'Virginia', label: 'Virginia' },
        { value: 'West Virginia', label: 'West Virginia' },
      ];
      const { selectedOption } = this.state;
      const { selectedOption1 } = this.state;

    return(
           <AUX>
		     <div className="page-content-wrapper">
              <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Colorpicker</h4>
                                <p className="text-muted m-b-30 font-14">Fancy and customizable colorpicker
                                    plugin for Twitter Bootstrap.</p>

                               <form action="#">
                                    <div className="form-group">
                                        <label>Simple input field</label>
                                        <input type="text" className="colorpicker-default form-control" value={this.state.simple} onClick={() => this.setState({ simple_color: !this.state.simple_color, rgb:false,btn:false })} />
                                      {this.state.simple_color ?
                                       <SketchPicker
                                       color='#fff'
                                       width = "120px"
                                       onChangeComplete={ this.handleSimple } />
                                         : null }
                                    </div>
                                    <div className="form-group">
                                        <label>With custom options - RGBA</label>
                                        <input type="text" className="colorpicker-rgba form-control" value={this.state.rgb_color} onClick={() => this.setState({ rgb: !this.state.rgb,simple_color:false,btn:false })} />
                                        {this.state.rgb ?
                                        <SketchPicker
                                       color='#fff'
                                       width = "120px"
                                       onChangeComplete={ this.handleRGB } />
                                         : null }
                                    </div>
                                    <div className="form-group m-b-0">
                                        <label>As a component</label>
                                        <div  className="colorpicker-default input-group">
                                            <input type="text" readonly="readonly" value={this.state.cmp_bkg} className="form-control"   />
                                            <span className="input-group-append add-on">
                                                <button className="btn btn-light picker" type="button" onClick={() => this.setState({ btn: !this.state.btn,rgb:false,simple_color:false })}>
                                                     <i style={{backgroundColor: this.state.cmp_bkg, marginTop: '2px'}}>&nbsp;&nbsp;&nbsp;&nbsp;</i>
                                                </button>
                                            </span>
                                        </div>
                                        {this.state.btn ?
                                                <SketchPicker
                                                color='#fff'
                                                direction = 'vertical'
                                                onChangeComplete={ this.handleBtn } />
                                                    : null }
                                    </div>

                                    {/* <div className="form-group">
                                        <label>Horizontal mode</label>
                                        <input type="text" className="form-control" id="colorpicker-horizontal" />
                                    </div>

                                    <div className="form-group">
                                        <label>Aliased color palette</label>
                                        <div id="colorpicker-color-pattern" data-format="alias" className="input-group colorpicker-component">
                                            <input type="text" value="primary" className="form-control" />
                                            <span className="input-group-append add-on">
                                                <button className="btn btn-light" type="button">
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="form-group mb-0">
                                        <label>Customized widget size</label>
                                        <input type="text" className="colorpicker-large form-control" value="pink" />
                                    </div> */}

                                </form>

                            </div>
                        </div>

                        <div className="card m-b-20">
                        <div className="card-body">

                            <h4 className="mt-0 header-title">Bootstrap MaxLength</h4>
                            <p className="text-muted m-b-30">This plugin integrates by default with
                                Twitter bootstrap using badges to display the maximum lenght of the
                                field where the user is inserting text. </p>

                            <label>Default usage</label>
                            <p className="text-muted m-b-15">
                                The badge will show up by default when the remaining chars are 10 or less:
                            </p>
                            <input type="text" className="form-control" maxlength="25" name="defaultconfig" id="defaultconfig" />

                            <div className="m-t-20">
                                <label>Threshold value</label>
                                <p className="text-muted m-b-15">
                                    Do you want the badge to show up when there are 20 chars or less? Use the <code>threshold</code> option:
                                </p>
                                <input type="text" maxlength="25" onChange={this.threshholdchange} name="thresholdconfig" className="form-control" id="thresholdconfig" />
                                { this.state.disthresh ?   <span className="badgecount">{this.state.threshholdcount} / 25 </span> : null } 
                            </div>

                            <div className="m-t-20">
                                <label>All the options</label>
                                <p className="text-muted m-b-15">
                                    Please note: if the <code>alwaysShow</code> option is enabled, the <code>threshold</code> option is ignored.
                                </p>
                                <input type="text" onChange={this.optionchange} className="form-control" maxlength="25" name="alloptions" id="alloptions" />
                                { this.state.disbadge ?  <span className={this.state.advanceclass}>You Types {this.state.optioncount} out of 25 chars available</span> : null } 
                            </div>

                            <div className="m-t-20">
                                <label>Position</label>
                                <p className="text-muted m-b-15">
                                    All you need to do is specify the <code>placement</code> option, with one of those strings. If none
                                    is specified, the positioning will be defauted to 'bottom'.
                                </p>
                                <input type="text" className="form-control" maxlength="25"  onChange={this.placementchange} name="placement" id="placement" />
                                { this.state.placementbadge ?  <span className="badgecountright">{this.state.placementcount} / 25 </span> : null } 
                            </div>

                            <div className="m-t-20">
                                <label>textareas</label>
                                <p className="text-muted m-b-15">
                                    Bootstrap maxlength supports textarea as well as inputs. Even on old IE.
                                </p>
                                <textarea id="textarea" className="form-control" onChange={this.textareachange} maxlength="225" rows="3" placeholder="This textarea has a limit of 225 chars."></textarea>
                                { this.state.textareabadge ?  <span className="textcenterbadge">{this.state.textcount} / 225 </span> : null } 
                            </div>

                            </div>
                        </div>

                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Css Switch</h4>
                                <p className="text-muted m-b-30 font-14">Here are a few types of switches. </p>

                                <div>
                                <input type="checkbox" id="switch1" checked={this.state.switch1 ? "checked" : ""} switch="none" onChange={() => this.setState({ switch1: !this.state.switch1 })}/>
                                <label for="switch1" data-on-label="On" data-off-label="Off"></label>

                              <input type="checkbox" id="switch2" switch="default" checked={this.state.switch2 ? "checked" : ""}  onChange={() => this.setState({ switch2: !this.state.switch2 })} />
                              <label for="switch2" data-on-label="" data-off-label=""></label>

                              <input type="checkbox" id="switch3" switch="bool" checked={this.state.switch3 ? "checked" : ""}  onChange={() => this.setState({ switch3: !this.state.switch3 })}  />
                              <label for="switch3" data-on-label="Yes" data-off-label="No"></label>

                              <input type="checkbox" id="switch6" switch="primary" checked={this.state.switch4 ? "checked" : ""}  onChange={() => this.setState({ switch4: !this.state.switch4 })} />
                              <label for="switch6" data-on-label="Yes" data-off-label="No"></label>

                              <input type="checkbox" id="switch4" switch="success" checked={this.state.switch5 ? "checked" : ""}  onChange={() => this.setState({ switch5: !this.state.switch5 })} />
                              <label for="switch4" data-on-label="Yes" data-off-label="No"></label>

                              <input type="checkbox" id="switch7" switch="info" checked={this.state.switch6 ? "checked" : ""}  onChange={() => this.setState({ switch6: !this.state.switch6 })}  />
                              <label for="switch7" data-on-label="Yes" data-off-label="No"></label>

                              <input type="checkbox" id="switch5" switch="warning" checked={this.state.switch7 ? "checked" : ""}  onChange={() => this.setState({ switch7: !this.state.switch7 })} />
                              <label for="switch5" data-on-label="Yes" data-off-label="No"></label>

                              <input type="checkbox" id="switch8" switch="danger" checked={this.state.switch8 ? "checked" : ""}  onChange={() => this.setState({ switch8: !this.state.switch8 })} />
                              <label for="switch8" data-on-label="Yes" data-off-label="No"></label>

                              <input type="checkbox" id="switch9" switch="dark" checked={this.state.switch9 ? "checked" : ""}  onChange={() => this.setState({ switch9: !this.state.switch9 })} />
                              <label for="switch9" data-on-label="Yes"  data-off-label="No"></label>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Datepicker</h4>
                                <p className="text-muted m-b-30 font-14">Examples of twitter bootstrap datepicker.</p>

                                <form action="#">
                                    <div className="form-group">
                                        <label>Default Functionality</label>
                                        <div>

                                        <DatePicker
                                                className="form-control"
                                                selected={this.state.default_date}
                                                onChange={this.handleDefault}
                                                />                                               
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Auto Close</label>
                                        <div>

                                               <div class="input-group">
                                                    <DatePicker
                                                    className="form-control"
                                                    id="datepicker-autoclose"
                                                    selected={this.state.auto_close}
                                                    onChange={this.handleAutoClose}
                                                    />   
                                                   
                                                </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Multiple Date</label>
                                        <div>
                                            <div className="input-group-multi">
                                            <MultipleDatePicker
                                               
                                                id = "uniqueTxt"
                                                onSubmit={dates => console.log('selected date', dates)}
                                            />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group mb-0">
                                        <label>Date Range</label>
                                        <div>
                                           <div className="row">
                                             <div className="col-md-6">
                                                <DatePicker
                                                className="form-control"
                                                selected={this.state.start_date}
                                                onChange={this.handleStart}
                                                /> 
                                             </div>

                                             <div className="col-md-6">
                                                <DatePicker
                                                className="form-control"   
                                                selected={this.state.end_date}
                                                onChange={this.handleEnd}
                                                />  
                                             </div>
                                           </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Bootstrap TouchSpin</h4>
                                <p className="text-muted m-b-30 font-14">A mobile and touch friendly input spinner component for Bootstrap</p>

                                <form>
                                    {/* <div className="form-group">
                                        <label className="control-label">Using data attributes</label>
                                        <input id="demo0" type="text" value="55" name="demo0" data-bts-min="0" data-bts-max="100" data-bts-init-val="" data-bts-step="1" data-bts-decimal="0" data-bts-step-interval="100" data-bts-force-step-divisibility="round" data-bts-step-interval-delay="500" data-bts-prefix="" data-bts-postfix="" data-bts-prefix-extra-className="" data-bts-postfix-extra-className="" data-bts-booster="true" data-bts-boostat="10" data-bts-max-boosted-step="false" data-bts-mousewheel="true" data-bts-button-down-className="btn btn-default" data-bts-button-up-className="btn btn-default"/>
                                    </div> */}

                                      <label className="control-label">Using data attributes</label>
                                    <div className="input-group">
                                    <div className="input-group-append" onClick={()=>this.setState({ data_attr: this.state.data_attr - 1 })}>
                                            <span className="input-group-text btn-primary"><i className="mdi mdi-minus"></i></span>
                                        </div>
                                      <input type="number" className="form-control" value={this.state.data_attr} placeholder="number" />
                                        <div className="input-group-append"  onClick={()=>this.setState({ data_attr: this.state.data_attr + 1 })}>
                                            <span className="input-group-text btn-primary"><i className="mdi mdi-plus"></i></span>
                                        </div>
                                    </div>
                                    <br></br>

                                    <label className="control-label">Example with postfix (large)</label>
                                    <div className="input-group">
                                    <div className="input-group-append" onClick={()=>this.setState({ postfix: this.state.postfix - 1 })}>
                                            <span className="input-group-text btn-primary"><i className="mdi mdi-minus"></i></span>
                                        </div>
                                      <input type="number" className="form-control" value={this.state.postfix} placeholder="number" />
                                        <div className="input-group-append"  onClick={()=>this.setState({ postfix: this.state.postfix + 1 })}>
                                            <span className="input-group-text">%</span>
                                            <span className="input-group-text btn-primary"><i className="mdi mdi-plus"></i></span>
                                        </div>
                                    </div>
                                    <br></br>

                                    <label className="control-label">Init with empty value:</label>
                                    <div className="input-group">
                                    <div className="input-group-append" onClick={()=>this.setState({ empty_val: this.state.empty_val - 1 })}>
                                            <span className="input-group-text btn-primary"><i className="mdi mdi-minus"></i></span>
                                        </div>
                                      <input type="number"  className="form-control" value={this.state.empty_val} placeholder="number" />
                                        <div className="input-group-append"  onClick={()=>this.setState({ empty_val: this.state.empty_val + 1 })}>
                                            <span className="input-group-text btn-primary"><i className="mdi mdi-plus"></i></span>
                                        </div>
                                    </div>
                                    <br></br>

                                    <label className="control-label">Value attribute is not set (applying settings.initval)</label>
                                    <div className="input-group">
                                    <div className="input-group-append" onClick={()=>this.setState({ not_attr: this.state.not_attr - 1 })}>
                                            <span className="input-group-text btn-primary"><i className="mdi mdi-minus"></i></span>
                                        </div>
                                      <input type="number" className="form-control" value={this.state.not_attr} placeholder="number" />
                                        <div className="input-group-append"  onClick={()=>this.setState({ not_attr: this.state.not_attr + 1 })}>
                                            <span className="input-group-text btn-primary"><i className="mdi mdi-plus"></i></span>
                                        </div>
                                    </div>
                                    <br></br>

                                    <label className="control-label">Value is set explicitly to 33 (skipping settings.initval)</label>
                                    <div className="input-group">
                                    <div className="input-group-append" onClick={()=>this.setState({ explicit_val: this.state.explicit_val - 1 })}>
                                            <span className="input-group-text btn-primary"><i className="mdi mdi-minus"></i></span>
                                        </div>
                                      <input type="number" className="form-control" value={this.state.explicit_val} placeholder="number" />
                                        <div className="input-group-append"  onClick={()=>this.setState({ explicit_val: this.state.explicit_val + 1 })}>
                                            <span className="input-group-text btn-primary"><i className="mdi mdi-plus"></i></span>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Bootstrap FileStyle</h4>
                                <p className="text-muted m-b-30 font-14">Examples of bootstrap fileStyle.</p>
                                <form action="#">
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        Choose file
                                        </label>
                                    </div>
                                    </div>
                                    <br></br>

                                    <div className="input-group">
                                    <div className="custom-file">
                                        <input
                                        multiple="multiple"
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        Choose multiple file
                                        </label>
                                    </div>
                                    </div>

                                </form>
                            </div>
                        </div>


                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Select2</h4>
                                <p className="text-muted m-b-30 font-14">A mobile and touch friendly input spinner component for Bootstrap</p>

                             
                                <form>
                                    <div className="form-group">
                                        <label className="control-label">Single Select</label>

                                <Select
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />

                                    </div>
                                    <div className="form-group mb-0">
                                        <label className="control-label">Multiple Select</label>
                                    <Select
                                            value={selectedOption1}
                                            onChange={this.handleChange1}
                                            options={options}
                                            isMulti ={true}
                                        />
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

export default Form_advanced;   