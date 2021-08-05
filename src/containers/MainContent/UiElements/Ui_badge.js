import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Ui_badge extends Component{
 
render(){
    return(
           <AUX>
		       <div className="page-content-wrapper">
               <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Example</h4>
                                <p className="text-muted m-b-30 font-14">Badges scale to match the size of the
                                    immediate parent element by using relative font sizing and <code
                                            className="highlighter-rouge">em</code> units.</p>

                                <div className="">
                                    <h1>Example heading <span className="badge badge-default">New</span></h1>
                                    <h2>Example heading <span className="badge badge-default">New</span></h2>
                                    <h3>Example heading <span className="badge badge-default">New</span></h3>
                                    <h4>Example heading <span className="badge badge-default">New</span></h4>
                                    <h5>Example heading <span className="badge badge-default">New</span></h5>
                                    <h6>Example heading <span className="badge badge-default">New</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Variations</h4>
                                <p className="text-muted m-b-30 font-14">Add any of the below mentioned modifier
                                    classNamees to change the appearance of a badge.</p>
                                <div>
                                    <span className="badge badge-default">Default</span>&nbsp;
                                    <span className="badge badge-primary">Primary</span>&nbsp;
                                    <span className="badge badge-success">Success</span>&nbsp;
                                    <span className="badge badge-info">Info</span>&nbsp;
                                    <span className="badge badge-warning">Warning</span>&nbsp;
                                    <span className="badge badge-danger">Danger</span>&nbsp;
                                    <span className="badge badge-dark">Dark</span>&nbsp;
                                    <span className="badge badge-pink">Pink</span>&nbsp;
                                    <span className="badge badge-purple">Purple</span>&nbsp;
                                    <span className="badge badge-indigo">Indigo</span>&nbsp;
                                    <span className="badge badge-teal">Teal</span>&nbsp;
                                    <span className="badge badge-lime">Lime</span>&nbsp;
                                    <span className="badge badge-orange">Orange</span>&nbsp;
                                    <span className="badge badge-brown">Brown</span>&nbsp;
                                    <span className="badge badge-blue-grey">Blue Grey</span>
                                </div>

                                <p className="text-muted m-b-30 font-14 m-t-40">Use the <code
                                        className="highlighter-rouge">.badge-pill</code> modifier className to make
                                    badges more rounded (with a larger <code className="highlighter-rouge">border-radius</code>
                                    and additional horizontal <code className="highlighter-rouge">padding</code>).
                                    Useful if you miss the badges from v3.</p>

                                <div>
                                    <span className="badge badge-pill badge-default">Default</span>&nbsp;
                                    <span className="badge badge-pill badge-primary">Primary</span>&nbsp;
                                    <span className="badge badge-pill badge-success">Success</span>&nbsp;
                                    <span className="badge badge-pill badge-info">Info</span>&nbsp;
                                    <span className="badge badge-pill badge-warning">Warning</span>&nbsp;
                                    <span className="badge badge-pill badge-danger">Danger</span>&nbsp;
                                    <span className="badge badge-pill badge-dark">Dark</span>&nbsp;
                                    <span className="badge badge-pill badge-pink">Pink</span>&nbsp;
                                    <span className="badge badge-pill badge-purple">Purple</span>&nbsp;
                                    <span className="badge badge-pill badge-indigo">Indigo</span>&nbsp;
                                    <span className="badge badge-pill badge-teal">Teal</span>&nbsp;
                                    <span className="badge badge-pill badge-lime">Lime</span>&nbsp;
                                    <span className="badge badge-pill badge-orange">Orange</span>&nbsp;
                                    <span className="badge badge-pill badge-brown">Brown</span>&nbsp;
                                    <span className="badge badge-pill badge-blue-grey">Blue Grey</span>
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

export default Ui_badge;   