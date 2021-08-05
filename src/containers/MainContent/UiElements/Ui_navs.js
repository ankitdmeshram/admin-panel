import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Ui_navs extends Component{
 
render(){

    return(
           <AUX>
		   
		     <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Base nav</h4>
                                <p className="text-muted m-b-30 font-14">Add className <code>.nav</code>:</p>

                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Horizontal alignment</h4>
                                <p className="text-muted m-b-30 font-14">Centered with <code className="highlighter-rouge">.justify-content-center</code>:</p>

                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Right alignment</h4>
                                <p className="text-muted m-b-30 font-14">Right-aligned with <code className="highlighter-rouge">.justify-content-end</code>:</p>

                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Vertical</h4>
                                <p className="text-muted m-b-30 font-14">Centered with <code className="highlighter-rouge">.justify-content-center</code>:</p>

                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Tabs</h4>
                                <p className="text-muted m-b-30 font-14">Takes the basic nav from above and adds the <code className="highlighter-rouge">.nav-tabs</code> className to generate a tabbed interface.</p>

                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a  className="nav-link active" href="#">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Pills</h4>
                                <p className="text-muted m-b-30 font-14">Take that same HTML, but use <code className="highlighter-rouge">.nav-pills</code> instead:</p>

                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <Link className="nav-link my-active active" to="#">Active</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="#">Disabled</Link>
                                    </li>
                                </ul>
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

export default Ui_navs;   