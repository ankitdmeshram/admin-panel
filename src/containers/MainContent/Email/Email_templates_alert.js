import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Email_templates_alert extends Component{
 
render(){
    return(
           <AUX>
		<div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">

                        <table className="body-wrap"  style={{fontFamily : "", fontSize : "14px", width : "100%", backgroundColor: "#f6f6f6", margin : "0", boxSizing : "border-box" }} >
                            <tr style={{fontFamily : "", fontSize : "14px", margin : "0", boxSizing : "border-box" }}>
                                <td  style={{fontFamily : "", fontSize : "14px", backgroundColor : "#f6f6f6", margin : "0", boxSizing : "border-box", verticalAlign :"top" }} valign="top"></td>
                                <td className="container" width="600"   style={{fontFamily : "", display: "block !important", maxWidth: "600px !important", clearLine: "both !important" , margin : "0 auto", boxSizing : "border-box", verticalAlign : "top" }} valign="top">
                                    <div className="content" style={{fontFamily : "", boxSizing : "border-box" , fontSize : "14px" , maxWidth: "600px" , display : "block" , margin : "0 auto" , padding: "20px" }}>
                                        <table className="main" width="100%" cellpadding="0" cellspacing="0" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , borderRadius: "3px" , backgroundColor: "#fff" , margin : "0" , border: "1px solid #e9e9e9"}} bgcolor="#fff">
                                            <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                <td className="alert alert-warning"  style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "16px" , verticalAlign : "top" , color: "#fff" , fontWeight: "500" , textAlign: "center" , borderRadius : "3px 3px 0 0" , backgroundColor : "#67a8e4" , margin : "0" , padding : "20px"}} align="center" bgcolor="#71b6f9" valign="top">
                                                    Warning: You're approaching your limit. Please upgrade.
                                                </td>
                                            </tr>
                                            <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                <td className="content-wrap" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign : "top" ,  margin : "0" , padding : "20px"}} valign="top">
                                                    <table width="100%" cellpadding="0" cellspacing="0" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                            <td className="content-block" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" , padding: "0 0 20px"}} valign="top">
                                                                You have <strong style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}><span style={{backgroundColor : "#ea553d" , color : "#ffffff" , padding : "5px 8px" , fontSize : "12px" , borderRadius : "4px"}}>1
                                                                            free report</span></strong> remaining.
                                                            </td>
                                                        </tr>
                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                            <td className="content-block" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" , padding: "0 0 20px"}} valign="top">
                                                                Add your credit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports.
                                                            </td>
                                                        </tr>
                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                            <td className="content-block" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" , padding: "0 0 20px"}} valign="top">
                                                                <a href="#" className="btn-primary" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , color: "#FFF" , textDecoration : "none" , lineHeight: "2em" , fontWeight: "bold" , textAlign: "center" ,  cursor: "pointer" , display: "inline-block" , borderRadius: "5px" ,  textTransform: "capitalize" , backgroundColor: "#f06292 !important" , margin : "0", borderColor: "#f06292 !important" , borderStyle: "solid !important" ,padding: "10px", borderWidth: "8px 16px !important"}}>Upgrade
                                                                    my account</a>
                                                            </td>
                                                        </tr>
                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                            <td className="content-block" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" , padding: "0 0 20px"}} valign="top">
                                                                Thanks for choosing <b>Admiria</b> Admin.
                                                            </td>
                                                        </tr>
                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                            <td className="content-block" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" , padding: "0 0 20px"}} valign="top">
                                                                <b>Admiria</b>
                                                                <p>Support Team</p>
                                                            </td>
                                                        </tr>

                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                            <td className="content-block" style={{ textAlign : "center" , fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" ,  padding: "0" }} valign="top">
                                                                ©  {new Date().getFullYear() - 1 } -  {new Date().getFullYear()} Admiria
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div> 
        </div>
           </AUX>
        );
    }
}

export default Email_templates_alert;