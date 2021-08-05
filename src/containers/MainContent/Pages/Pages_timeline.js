import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Pages_timeline extends Component{
 
render(){
    return(
           <AUX>
		   
           <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <section id="cd-timeline" className="cd-container">
                                    <div className="cd-timeline-block">
                                        <div className="cd-timeline-img bg-success">
                                            <i className="mdi mdi-adjust"></i>
                                        </div>

                                        <div className="cd-timeline-content">
                                            <h3>Timeline Event One</h3>
                                            <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                                            <span className="cd-date">May 23</span>
                                        </div>
                                    </div> 
                                    <div className="cd-timeline-block">
                                        <div className="cd-timeline-img bg-danger">
                                            <i className="mdi mdi-adjust"></i>
                                        </div>
                                        <div className="cd-timeline-content">
                                            <h3>Timeline Event Two</h3>
                                            <p className="m-b-20 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                                            <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light m-t-5">See more detail</button>

                                            <span className="cd-date">May 30</span>
                                        </div> 
                                    </div>
                                    <div className="cd-timeline-block">
                                        <div className="cd-timeline-img bg-info">
                                            <i className="mdi mdi-adjust"></i>
                                        </div>

                                        <div className="cd-timeline-content">
                                            <h3>Timeline Event Three</h3>
                                            <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat ... <a href="#">Read more</a></p>
                                            <span className="cd-date">Jun 05</span>
                                        </div> 
                                    </div> 
                                    <div className="cd-timeline-block">
                                        <div className="cd-timeline-img bg-pink">
                                            <i className="mdi mdi-adjust"></i>
                                        </div> 
                                        <div className="cd-timeline-content">
                                            <h3>Timeline Event Four</h3>
                                            <p className="m-b-20 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                                            <img src="assets/images/small/img-1.jpg" alt="" className="rounded" style={{width:"120px"}}  />
                                            <img src="assets/images/small/img-2.jpg" alt="" className="rounded" style={{width:"120px"}}  />
                                            <span className="cd-date">Jun 14</span>
                                        </div>
                                    </div>
                                    <div className="cd-timeline-block">
                                        <div className="cd-timeline-img bg-warning">
                                            <i className="mdi mdi-adjust"></i>
                                        </div> 

                                        <div className="cd-timeline-content">
                                            <h3>Timeline Event Five</h3>
                                            <p className="m-b-20 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
                                            <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light">See more detail</button>
                                            <span className="cd-date">Jun 18</span>
                                        </div> 
                                    </div>

                                    <div className="cd-timeline-block">
                                        <div className="cd-timeline-img bg-primary">
                                            <i className="mdi mdi-adjust"></i>
                                        </div> 
                                        <div className="cd-timeline-content">
                                            <h3>Timeline Event End</h3>
                                            <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
                                            <span className="cd-date">Jun 30</span>
                                        </div>
                                    </div> 
                                </section> 
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

export default Pages_timeline;   