import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Ui_cards extends Component{
 
render(){
    return(
           <AUX>
		   
        <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-3">

                        <div className="card m-b-20">
                            <img className="card-img-top img-fluid" src="assets/images/small/img-1.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title font-20 mt-0">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary waves-effect waves-light">Button</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-xl-3">

                        <div className="card m-b-20">
                            <img className="card-img-top img-fluid" src="assets/images/small/img-2.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title font-20 mt-0">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-xl-3">

                        <div className="card m-b-20">
                            <img className="card-img-top img-fluid" src="assets/images/small/img-3.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-6 col-xl-3">

                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="card-title font-20 mt-0">Card title</h4>
                                <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                            </div>
                            <img className="img-fluid" src="assets/images/small/img-4.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="card m-b-20 card-body">
                            <h3 className="card-title font-20 mt-0">Special title treatment</h3>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            <a href="#" className="btn btn-primary waves-effect waves-light">Go somewhere</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card m-b-20 card-body">
                            <h3 className="card-title font-20 mt-0">Special title treatment</h3>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            <a href="#" className="btn btn-primary waves-effect waves-light">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card m-b-20 card-body">
                            <h4 className="card-title font-20 mt-0">Special title treatment</h4>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            <a href="#" className="btn btn-primary waves-effect waves-light">Go somewhere</a>
                        </div>
                    </div>

                    <div className="col-lg-4 ">
                        <div className="card m-b-20 card-body text-center">
                            <h4 className="card-title font-20 mt-0">Special title treatment</h4>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            <a href="#" className="btn btn-primary waves-effect waves-light">Go somewhere</a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 card-body text-right">
                            <h4 className="card-title font-20 mt-0">Special title treatment</h4>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            <a href="#" className="btn btn-primary waves-effect waves-light">Go somewhere</a>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <h5 className="card-header mt-0">Featured</h5>
                            <div className="card-body">
                                <h4 className="card-title font-20 mt-0">Special title treatment</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to
                                    additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <div className="card-header">
                                Quote
                            </div>
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h4 className="card-title font-20 mt-0">Special title treatment</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to
                                    additional content.</p>
                                <a href="#" className="btn btn-primary waves-effect waves-light">Go somewhere</a>
                            </div>
                            <div className="card-footer text-muted">
                                2 days ago
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <img className="card-img-top img-fluid" src="assets/images/small/img-5.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title font-20 mt-0">Card title</h4>
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="card-title font-20 mt-0">Card title</h4>
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                            <img className="card-img-bottom img-fluid" src="assets/images/small/img-6.jpg" alt="Card image cap" />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 card-inverse">
                            <img className="card-img img-fluid" src="assets/images/small/img-7.jpg" alt="Card image" />
                            <div className="card-img-overlay">
                                <h4 className="card-title font-20 mt-0">Card title</h4>
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white" style={{backgroundColor : "#333",borderColor:"#333" }}>
                            <div className="card-body">
                                <h3 className="card-title font-20 mt-0">Special title treatment</h3>
                                <p className="card-text">With supporting text below as a natural lead-in to
                                    additional content.</p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-primary">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-success">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-info">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-warning">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-danger">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-dark">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-pink">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-purple">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-indigo">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-teal">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-lime">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-orange">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-brown">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card m-b-20 text-white card-blue-grey">
                            <div className="card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card-group">
                            <div className="card m-b-20">
                                <img className="card-img-top img-fluid" src="assets/images/small/img-1.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title font-20 mt-0">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div className="card m-b-20">
                                <img className="card-img-top img-fluid" src="assets/images/small/img-2.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title font-20 mt-0">Card title</h4>
                                    <p className="card-text">This card has supporting text below as a natural
                                        lead-in to additional content.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div className="card m-b-20">
                                <img className="card-img-top img-fluid" src="assets/images/small/img-3.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title font-20 mt-0">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This card has even longer content
                                        than the first to show that equal height action.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <h4 className="m-t-20 m-b-20">Decks</h4>
                        <div className="card-deck-wrapper">
                            <div className="card-deck">
                                <div className="card m-b-20">
                                    <img className="card-img-top img-fluid" src="assets/images/small/img-4.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title font-20 mt-0">Card title</h4>
                                        <p className="card-text">This is a longer card with supporting text below as
                                            a natural lead-in to additional content. This content is a little
                                            bit longer.</p>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="card m-b-20">
                                    <img className="card-img-top img-fluid" src="assets/images/small/img-5.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title font-20 mt-0">Card title</h4>
                                        <p className="card-text">This card has supporting text below as a natural
                                            lead-in to additional content.</p>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="card m-b-20">
                                    <img className="card-img-top img-fluid" src="assets/images/small/img-6.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title font-20 mt-0">Card title</h4>
                                        <p className="card-text">This is a wider card with supporting text below as
                                            a natural lead-in to additional content. This card has even longer
                                            content than the first to show that equal height action.</p>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <h4 className="m-t-20 m-b-20">Columns</h4>
                        <div className="card-columns">
                            <div className="card m-b-20">
                                <img className="card-img-top img-fluid" src="assets/images/small/img-1.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title font-20 mt-0">Card title that wraps to a new line</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                            <div className="card m-b-20 card-body">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-muted">
                                        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                    </footer>
                                </blockquote>
                            </div>
                            <div className="card m-b-20">
                                <img className="card-img-top img-fluid" src="assets/images/small/img-2.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title font-20 mt-0">Card title</h4>
                                    <p className="card-text">This card has supporting text below as a natural
                                        lead-in to additional content.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div className="card m-b-20 card-body text-white card-primary">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                    </footer>
                                </blockquote>
                            </div>
                            <div className="card m-b-20 card-body">
                                <h4 className="card-title font-20 mt-0">Card title</h4>
                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                    additional content.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                            <div className="card m-b-20">
                                <img className="card-img img-fluid" src="assets/images/small/img-3.jpg" alt="Card image cap" />
                            </div>
                            <div className="card m-b-20 card-body text-xs-right">
                                <blockquote className="card-blockquote mb-0">
                                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.</p>
                                    <footer className="blockquote-footer text-muted">
                                        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                    </footer>
                                </blockquote>
                            </div>
                            <div className="card m-b-20 card-body">
                                <h4 className="card-title font-20 mt-0">Card title</h4>
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This card has even longer content
                                    than the first to show that equal height action.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
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

export default Ui_cards;   