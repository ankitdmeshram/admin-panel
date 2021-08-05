import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Pages_faq extends Component{
 
render(){
    return(
           <AUX>
		       <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-8">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Frequently Asked Questions</h4>
                                <div className="m-t-30">
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header bg-white border-bottom-0 p-3" id="headingOne">
                                                <h5 className="mb-0 mt-0 font-16 font-light">
                                                    <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                                       aria-controls="collapseOne" className="text-dark">
                                                       Q.1 What is Lorem Ipsum?
                                                    </a>
                                                </h5>
                                            </div>

                                            <div id="collapseOne" className="collapse show"
                                                 aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body text-muted">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                                    aute, non cupidatat skateboard dolor brunch. Food truck
                                                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee
                                                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt
                                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                    Leggings occaecat craft beer farm-to-table, raw denim
                                                    aesthetic synth nesciunt you probably haven't heard of them
                                                    accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header bg-white border-bottom-0 p-3" id="headingTwo">
                                                <h5 className="mb-0 mt-0 font-16 font-light">
                                                    <a href="#" className="text-dark collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Q.2 Is safe use Lorem Ipsum?
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="card-body text-muted">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                                    aute, non cupidatat skateboard dolor brunch. Food truck
                                                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee
                                                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt
                                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                    Leggings occaecat craft beer farm-to-table, raw denim
                                                    aesthetic synth nesciunt you probably haven't heard of them
                                                    accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header bg-white border-bottom-0 p-3" id="headingThree">
                                                <h5 className="mb-0 mt-0 font-16 font-light">
                                                    <a href="#" className="text-dark collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Q.3 Why use Lorem Ipsum?
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className="card-body text-muted">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                                    aute, non cupidatat skateboard dolor brunch. Food truck
                                                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee
                                                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt
                                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                    Leggings occaecat craft beer farm-to-table, raw denim
                                                    aesthetic synth nesciunt you probably haven't heard of them
                                                    accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header bg-white border-bottom-0 p-3" id="headingFour">
                                                <h5 className="mb-0 mt-0 font-16 font-light">
                                                    <a href="#" className="text-dark collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        Q.4 When can be used?
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                                <div className="card-body text-muted">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                                    aute, non cupidatat skateboard dolor brunch. Food truck
                                                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee
                                                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt
                                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                    Leggings occaecat craft beer farm-to-table, raw denim
                                                    aesthetic synth nesciunt you probably haven't heard of them
                                                    accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header bg-white border-bottom-0 p-3" role="tab" id="headingFive">
                                                <h5 className="mb-0 mt-0 font-16 font-light">
                                                    <a href="#" className="text-dark collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        Q.5 How many variations exist?
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                                <div className="card-body text-muted">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                                    aute, non cupidatat skateboard dolor brunch. Food truck
                                                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee
                                                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt
                                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                    Leggings occaecat craft beer farm-to-table, raw denim
                                                    aesthetic synth nesciunt you probably haven't heard of them
                                                    accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header bg-white border-bottom-0 p-3" role="tab" id="headingSix">
                                                <h5 className="mb-0 mt-0 font-16 font-light">
                                                    <a href="#" className="text-dark collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        Q.6 License & Copyright
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                                                <div className="card-body text-muted">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                                    aute, non cupidatat skateboard dolor brunch. Food truck
                                                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee
                                                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt
                                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                    Leggings occaecat craft beer farm-to-table, raw denim
                                                    aesthetic synth nesciunt you probably haven't heard of them
                                                    accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                    <h5>Can't find what you are looking for?</h5>
                                    <button type="button" className="btn btn-primary m-t-20 waves-effect waves-light">Email Us</button>
                                    <h6 className="text-muted m-t-20">OR</h6>

                                    <button type="button" className="btn btn-success m-t-10 waves-effect waves-light">Send us a tweet</button>
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

export default Pages_faq;   