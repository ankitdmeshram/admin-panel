import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class ecommerce_product_grid extends Component{
 
render(){
    return(
           <AUX>
            <div className="page-content-wrapper">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-3">
                                            <div className="product-list-box">
                                                <a href="javascript:void(0);">
                                                    <img src="assets/images/products/1.jpg" className="img-fluid" alt="work-thumbnail" />
                                                </a>
                                                <div className="detail">
                                                    <h4 className="font-16"><a href="" className="text-dark">Riverston Glass Chair</a> </h4>

                                                    <a href="#" className="btn btn-success btn-sm">Edit</a>
                                                    <a href="#" className="btn btn-secondary btn-sm">Delete</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-3">
                                            <div className="product-list-box">
                                                <span className="product-tag">sale</span>
                                                <a href="javascript:void(0);">
                                                    <img src="assets/images/products/2.jpg" className="img-fluid" alt="work-thumbnail" />
                                                </a>
                                                <div className="detail">
                                                    <h4 className="font-16"><a href="" className="text-dark">Shine Company Catalina</a> </h4>

                                                    <a href="#" className="btn btn-success btn-sm">Edit</a>
                                                    <a href="#" className="btn btn-secondary btn-sm">Delete</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-3">
                                            <div className="product-list-box">
                                                <a href="javascript:void(0);">
                                                    <img src="assets/images/products/3.jpg" className="img-fluid" alt="work-thumbnail" />
                                                </a>
                                                <div className="detail">
                                                    <h4 className="font-16"><a href="" className="text-dark">Trex Outdoor Furniture Cape</a> </h4>

                                                    <a href="#" className="btn btn-success btn-sm">Edit</a>
                                                    <a href="#" className="btn btn-secondary btn-sm">Delete</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-3">
                                            <div className="product-list-box">
                                                <a href="javascript:void(0);">
                                                    <img src="assets/images/products/4.jpg" className="img-fluid" alt="work-thumbnail" />
                                                </a>
                                                <div className="detail">
                                                    <h4 className="font-16"><a href="" className="text-dark">Riverston Glass Chair</a> </h4>

                                                    <a href="#" className="btn btn-success btn-sm">Edit</a>
                                                    <a href="#" className="btn btn-secondary btn-sm">Delete</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-3">
                                            <div className="product-list-box">
                                                <span className="product-tag bg-primary">Popular</span>
                                                <a href="javascript:void(0);">
                                                    <img src="assets/images/products/5.jpg" className="img-fluid" alt="work-thumbnail" />
                                                </a>
                                                <div className="detail">
                                                    <h4 className="font-16"><a href="" className="text-dark">Trex Outdoor Furniture Cape</a> </h4>

                                                    <a href="#" className="btn btn-success btn-sm">Edit</a>
                                                    <a href="#" className="btn btn-secondary btn-sm">Delete</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-3">
                                            <div className="product-list-box">
                                                <a href="javascript:void(0);">
                                                    <img src="assets/images/products/6.jpg" className="img-fluid" alt="work-thumbnail" />
                                                </a>
                                                <div className="detail">
                                                    <h4 className="font-16"><a href="" className="text-dark">Oasis Bathroom Teak Corner</a> </h4>

                                                    <a href="#" className="btn btn-success btn-sm">Edit</a>
                                                    <a href="#" className="btn btn-secondary btn-sm">Delete</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-3">
                                            <div className="product-list-box">
                                                <a href="javascript:void(0);">
                                                    <img src="assets/images/products/7.jpg" className="img-fluid" alt="work-thumbnail" />
                                                </a>
                                                <div className="detail">
                                                    <h4 className="font-16"><a href="" className="text-dark">Riverston Glass Chair</a> </h4>

                                                    <a href="#" className="btn btn-success btn-sm">Edit</a>
                                                    <a href="#" className="btn btn-secondary btn-sm">Delete</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-3">
                                            <div className="product-list-box">
                                                <span className="product-tag bg-pink">75% Off</span>
                                                <a href="javascript:void(0);">
                                                    <img src="assets/images/products/8.jpg" className="img-fluid" alt="work-thumbnail" />
                                                </a>
                                                <div className="detail">
                                                    <h4 className="font-16"><a href="" className="text-dark">Condimentum Posuere</a> </h4>

                                                    <a href="#" className="btn btn-success btn-sm">Edit</a>
                                                    <a href="#" className="btn btn-secondary btn-sm">Delete</a>
                                                </div>
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

export default ecommerce_product_grid;   