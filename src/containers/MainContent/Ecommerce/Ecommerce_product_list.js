import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { ProgressBar  } from 'react-bootstrap';
import { Progress } from 'reactstrap';

class ecommerce_product_list extends Component{
 
render(){


    return(
           <AUX>
		   <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                               

                                <table id="datatable" className="table table-striped dt-responsive nowrap table-vertical" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Added Date</th>
                                            <th>Amount</th>
                                            <th>No. of Units</th>
                                            <th>Stock</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-list-img">
                                                <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>
                                                <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                            </td>
                                            <td>22/05/2017</td>
                                            <td>$521</td>
                                            <td>5841</td>
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="product-list-img">
                                                <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">Shine Company Catalina</h6>
                                                <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                            </td>
                                            <td>22/05/2017</td>
                                            <td>$211</td>
                                            <td>7851</td>
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="product-list-img">
                                                <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>
                                                <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                            </td>
                                            <td>22/05/2017</td>
                                            <td>$521</td>
                                            <td>5841</td>
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-list-img">
                                                <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">Trex Outdoor Furniture Cape</h6>
                                                <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                            </td>
                                            <td>23/05/2017</td>
                                            <td>$111</td>
                                            <td>3841</td>
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-list-img">
                                                <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">	Oasis Bathroom Teak Corner</h6>
                                                <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                            </td>
                                            <td>12/05/2017</td>
                                            <td>$821</td>
                                            <td>3841</td>
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-list-img">
                                                <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">Condimentum Posuere</h6>
                                                <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                            </td>
                                            <td>20/05/2017</td>
                                            <td>$421</td>
                                            <td>2841</td>
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-list-img">
                                                <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">Micro Board</h6>
                                                <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                            </td>
                                            <td>22/05/2017</td>
                                            <td>$521</td>
                                            <td>5841</td>
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-list-img">
                                                <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">BeoPlay Speaker</h6>
                                                <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                            </td>
                                            <td>22/05/2017</td>
                                            <td>$521</td>
                                            <td>5841</td>
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-list-img">
                                                <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>
                                                <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                            </td>
                                            <td>22/05/2017</td>
                                            <td>$521</td>
                                            <td>5841</td>
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-list-img">
                                                <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">Travelers Leather Bag</h6>
                                                <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                            </td>
                                            <td>22/05/2017</td>
                                            <td>$521</td>
                                            <td>5841</td>
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-list-img">
                                                <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>
                                                <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                            </td>
                                            <td>22/05/2017</td>
                                            <td>$521</td>
                                            <td>5841</td>
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
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

export default ecommerce_product_list;   