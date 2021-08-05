import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Ui_pagination extends Component{
 
render(){

    return(
           <AUX>
		    <div className="page-content-wrapper">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card m-b-20">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">Default Example</h4>
                                    <p className="text-muted m-b-30 font-14">Pagination links indicate a series of related content exists across multiple pages.</p>

                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>

                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card m-b-20">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">Disabled and active states</h4>
                                    <p className="text-muted m-b-30 font-14">Pagination links are customizable for
                                        different circumstances. Use <code
                                                className="highlighter-rouge">.disabled</code> for links that appear
                                        un-clickable and <code className="highlighter-rouge">.active</code> to
                                        indicate the current page.</p>

                                    <nav aria-label="...">
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabindex="-1">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>

                                    <nav aria-label="...">
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <span className="page-link">Previous</span>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item active">
                                                            <span className="page-link">
                                                                2
                                                                <span className="sr-only">(current)</span>
                                                            </span>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div> 
                    </div> 

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card m-b-20">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">Sizing</h4>
                                    <p className="text-muted m-b-30 font-14">Fancy larger or smaller pagination? Add
                                        <code className="highlighter-rouge">.pagination-lg</code> or <code
                                                className="highlighter-rouge">.pagination-sm</code> for additional
                                        sizes.</p>

                                    <nav aria-label="...">
                                        <ul className="pagination pagination-lg">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabindex="-1">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>

                                    <nav aria-label="...">
                                        <ul className="pagination pagination-sm">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabindex="-1">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg-6">
                            <div className="card m-b-20">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">Alignment</h4>
                                    <p className="text-muted m-b-30 font-14">Change the alignment of pagination
                                        components with flexbox utilities.</p>

                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabindex="-1">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>

                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-end">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabindex="-1">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
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

export default Ui_pagination;   