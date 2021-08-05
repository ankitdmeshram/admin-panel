import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';

class Form_mask extends Component{
 
render(){
    
    const ISBN1 = (props) => (
        <InputMask mask="999-99-999-9999-99-9" value={props.value} className="form-control" onChange={props.onChange}>
          {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
        </InputMask>
      );

      const ISBN2 = (props) => (
        <InputMask mask="999 99 999 9999 99 9" value={props.value} className="form-control" onChange={props.onChange}>
          {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
        </InputMask>
      );

      const ISBN3 = (props) => (
        <InputMask mask="999/99/999/9999/99/9" value={props.value} className="form-control" onChange={props.onChange}>
          {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
        </InputMask>
      );

      const IPV4 = (props) => (
        <InputMask mask="999.999.999.999" value={props.value} className="form-control" onChange={props.onChange}>
          {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
        </InputMask>
      );

      const IPV6 = (props) => (
        <InputMask mask="****:****:****:*:***:****:****:****" value={props.value} className="form-control" onChange={props.onChange}>
          {(inputProps) => <MaterialInput {...inputProps}  disableUnderline />}
        </InputMask>
      );
      
      const TAX = (props) => (
        <InputMask mask="99-9999999" value={props.value} className="form-control" onChange={props.onChange}>
          {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
        </InputMask>
      );

      const Phone = (props) => (
        <InputMask mask="(999) 999-9999" value={props.value} className="form-control" onChange={props.onChange}>
          {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
        </InputMask>
      );

      const Currency = (props) => (
        <InputMask mask="$ 999,999,999.99" value={props.value} className="form-control" onChange={props.onChange}>
          {(inputProps) => <MaterialInput {...inputProps}  prefix='$' type="tel" disableUnderline />}
        </InputMask>
      );

      const Date1 = (props) => (
        <InputMask mask="99/99/9999" value={props.value} className="form-control" onChange={props.onChange}>
          {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
        </InputMask>
      );

      const Date2 = (props) => (
        <InputMask mask="99-99-9999" value={props.value} className="form-control" onChange={props.onChange}>
          {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
        </InputMask>
      );


    return(
           <AUX>
		    <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Input Masks</h4>
                                <p className="text-muted m-b-30 font-14">Input masks can be used to force the
                                    user to enter data conform a specific format. Unlike validation, the
                                    user can't enter any other key than the ones specified by the mask.
                                </p>

                                <div className="row">
                                <div className="col-md-6">
                                    <div className="p-20">
                                        <form action="#">
                                            <div className="form-group">
                                                <label>ISBN 1</label>
                                                <ISBN1 />
                                                <span className="font-13 text-muted">e.g "999-99-999-9999-9"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>ISBN 2</label>
                                                <ISBN2 />
                                                <span className="font-13 text-muted">999 99 999 9999 9</span>
                                            </div>
                                            <div className="form-group">
                                                <label>ISBN 3</label>
                                                <ISBN3 />
                                                <span className="font-13 text-muted">999/99/999/9999/9</span>
                                            </div>
                                            <div className="form-group">
                                                <label>IPV4</label>
                                                <IPV4 />
                                                <span className="font-13 text-muted">192.168.110.310</span>
                                            </div>
                                            <div className="form-group mb-0">
                                                <label>IPV6</label>
                                                <IPV6 />
                                                <span className="font-13 text-muted">4deg:1340:6547:2:540:h8je:ve73:98pd</span>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="p-20">
                                        <form action="#">

                                            <div className="form-group">
                                                <label>Tax ID</label>
                                                <TAX />
                                                <span className="font-13 text-muted">99-9999999</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <Phone />
                                                <span className="font-13 text-muted">(999) 999-9999</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Currency</label>
                                                <Currency />
                                                <span className="font-13 text-muted">$ 999,999,999.99</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Date</label>
                                                <Date1 />
                                                <span className="font-13 text-muted">dd/mm/yyyy</span>
                                            </div>
                                            <div className="form-group mb-0">
                                                <label>Date 2</label>
                                                <Date2 />
                                                <span className="font-13 text-muted">dd-mm-yyyy</span>
                                            </div>
                                        </form>
                                    </div>
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

export default Form_mask;   