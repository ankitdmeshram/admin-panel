import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight'

class Ui_highlight extends Component{

render(){
    return(
           <AUX>
		    <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">HTML Highlight</h4>
                                <p className="text-muted m-b-30 font-14">Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.</p>
                              
                                <Highlight className='language-name-of-snippet'>
                                {"<html>"}
                                {"  <!-- this is a comment -->"}<br></br>
                                {"<head>"}<br></br>
                                {"   <title>HTML Example</title>"}<br></br>
                                {"</head>"}<br></br>
                               
                                {"<body>"}<br></br>
                                {"    The indentation tries to be <em>somewhat &quot;do what"}<br></br>
                                {"    I mean&quot;</em>... but might not match your style."}<br></br>
                                {"</body>"}<br></br>
                                {"</html>"}<br></br>
                                </Highlight>
                                          
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Css Highlight</h4>
                                <p className="text-muted m-b-30 font-14">Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.</p>


                              <Highlight className='language-name-of-snippet'>
                                {".example {"}<br></br>
                                {"    font-family: Georgia, Times, serif;"}<br></br>
                                {"    color: #555;"}<br></br>
                                {"    text-align: center;"}<br></br>
                                {"}"}<br></br>
                             
                                </Highlight>

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

export default Ui_highlight;   