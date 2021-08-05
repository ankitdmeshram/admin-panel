import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Email_templates_basic extends Component{
 
render(){
    return(
           <AUX>
		   <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">

                        <table className="body-wrap" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , width : "100%" ,backgroundColor : "#f6f6f6" , margin : "0"}} bgcolor="#f6f6f6">
                            <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                <td style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , verticalAlign : "top" , margin : "0"}} valign="top"></td>
                                <td style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , verticalAlign : "top" , margin : "0"}} valign="top"></td>
                                <td className="container" width="600" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , verticalAlign : "top" , display : "block !important"  , maxWidth : "600px !important" , clear : "both !important" , margin : "0 auto"}} valign="top">
                                    <div className="content" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , maxWidth: "600px" ,  display: "block" , margin: "0 auto" ,  padding: "20px" }}>
                                        <table className="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope itemtype="http://schema.org/ConfirmAction" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , borderRadius : "3px" , margin : "0" , border : "none"}}>
                                            <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                <td className="content-wrap" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , verticalAlign : "top" ,  margin : "0" , padding : "30px" , border: "3px solid #67a8e4" , borderRadius: "7px" , backgroundColor: "#fff" }} valign="top">
                                                    <meta itemprop="name" content="Confirm Email" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , margin : "0"}} />
                                                    <table width="100%" cellpadding="0" cellspacing="0" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                            <td className="content-block" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" , padding: "0 0 20px"}} valign="top">
                                                                Please confirm your email address by clicking the link below.
                                                            </td>
                                                        </tr>
                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                            <td className="content-block" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" , padding: "0 0 20px"}} valign="top">
                                                                We may need to send you critical information about our service and it is important that we have an accurate email address.
                                                            </td>
                                                        </tr>
                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                            <td className="content-block" itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" , padding: "0 0 20px"}} valign="top">
                                                                <a href="#" className="btn-primary" itemprop="url" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" ,padding: "6px", boxSizing : "border-box" , fontSize : "14px" , color: "#FFF" , textDecoration : "none" , lineHeight: "2em" , fontWeight: "bold" , textAlign: "center" ,  cursor: "pointer" , display: "inline-block" , borderRadius: "5px" ,  textTransform: "capitalize" , backgroundColor: "#f06292 !important" , margin : "0", borderColor: "#f06292 !important" , borderStyle: "solid !important" , borderWidth: "8px 16px !important"}}>Confirm
                                                                    email address</a>
                                                            </td>
                                                        </tr>
                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                            <td className="content-block" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" , padding: "0 0 20px"}} valign="top">
                                                                <b>Admiria</b>
                                                                <p>Support Team</p>
                                                            </td>
                                                        </tr>

                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , margin : "0"}}>
                                                            <td className="content-block" style={{ textAlign : "center" , fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif" , boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" ,  padding: "0" }} valign="top">
                                                                ©  {new Date().getFullYear() - 1} -  {new Date().getFullYear()} Admiria
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

export default Email_templates_basic;   