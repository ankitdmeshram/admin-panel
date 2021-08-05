import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import RatingTooltip from 'react-rating-tooltip';
import 'font-awesome/css/font-awesome.min.css';

class Ui_rating extends Component{

    constructor(props) {
        super(props);
        this.state = {
          tooltipContent: ["Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5"],
          tooltipContentMore: ["1", "2", "3", "4", "5", "6","7","8"],
          tooltipContentHalf: ["6","7","8","9","10"],
          tooltipContentMiddle: ["2","3","4","5","6","7","8","9","10","11","12"],
          tooltipContentStep : ["2","4","6","8","10"],
          default : '',
          half : '',
          customize : ''
          }
        }
 
render(){

    return(
           <AUX>
		
		      <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">
                            <div className="row">
                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Default rating</h5>

                                        <RatingTooltip 
                                            max = {5} 
                                            onChange={(rate) => this.setState({ default: rate })}
                                            ActiveComponent={<i className="fa fa-star" style={this.state.starStyle} />}
                                            InActiveComponent={<i className="fa fa-star-o" style={this.state.starStyle} />}
                                            />  <span>{this.state.default}</span> 

                                         </div>
                                    </div>

                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Disabled rating</h5>
                                            <Rating
                                               emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" alt="nice" className="icon" />}
                                               fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" alt="nice" className="icon" />}
                                               readonly={true}
                                            />
                                         </div>
                                    </div>

                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Readonly rating with a value</h5>
                                            <Rating
                                               emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" alt="nice" className="icon" />}
                                               fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" alt="nice" className="icon" />}
                                               readonly={true}
                                               initialRating={3}
                                            />
                                         </div>
                                    </div>

                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Customized heart rating</h5>

                                            <RatingTooltip 
                                        max = {5}
                                        onChange={(rate) => this.setState({ customize: rate })}
                                        ActiveComponent={<i className="fa fa-heart" style={this.state.starStyle} />}
                                        InActiveComponent={<i className="fa fa-heart-o" style={this.state.starStyle} />}
                                    />
                                            <span>{this.state.customize}</span>
                                        </div>
                                    </div>


                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Handle events</h5>
                                            <Rating
                                             onChange={(rate) => alert("Rating : "+rate)}
                                            emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" alt="nice" className="icon" />}
                                            fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" alt="nice" className="icon" />}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Customize tooltips</h5>
                                            
                                    <RatingTooltip 
                                        max = {5}
                                        tooltipContent = {this.state.tooltipContent}
                                        ActiveComponent={<i className="fa fa-star" style={this.state.starStyle} />}
                                        InActiveComponent={<i className="fa fa-star-o" style={this.state.starStyle} />}
                                    />
                                        
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Default rating</h5>
                                    
                                    <RatingTooltip 
                                        max = {8}
                                        tooltipContent = {this.state.tooltipContentMore}
                                        ActiveComponent={<i className="fa fa-star" style={this.state.starStyle} />}
                                        InActiveComponent={<i className="fa fa-star-o" style={this.state.starStyle} />}
                                    />
                                       
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Set start rate to 5 [6..10]</h5>
                                    <RatingTooltip 
                                        max = {5}
                                        tooltipContent = {this.state.tooltipContentHalf}
                                        ActiveComponent={<i className="fa fa-star" style={this.state.starStyle} />}
                                        InActiveComponent={<i className="fa fa-star-o" style={this.state.starStyle} />}
                                    />
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Set start and stop rate [2..10]</h5>
                                         

                                  <RatingTooltip 
                                        max = {11}
                                        tooltipContent = {this.state.tooltipContentMiddle}
                                        ActiveComponent={<i className="fa fa-star" style={this.state.starStyle} />}
                                        InActiveComponent={<i className="fa fa-star-o" style={this.state.starStyle} />}
                                    />

                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Set start and stop rate [2..10] with step 2</h5>
                                     <RatingTooltip 
                                        max = {5}
                                        tooltipContent = {this.state.tooltipContentStep}
                                        ActiveComponent={<i className="fa fa-star" style={this.state.starStyle} />}
                                        InActiveComponent={<i className="fa fa-star-o" style={this.state.starStyle} />}
                                    />
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Custom icons</h5>
                                            <Rating
                                                stop={5}
                                                emptySymbol="fa fa-battery-empty fa-2x"
                                                fullSymbol={['fa fa-battery-1 fa-2x', 'fa fa-battery-2 fa-2x',
                                                    'fa fa-battery-3 fa-2x', 'fa fa-battery-4 fa-2x']}
                                                />
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Fractional rating</h5>
                                            <Rating
                                               emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" className="icon" />}
                                               fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" className="icon" />}
                                                fractions={6}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-4 col-sm-6">
                                        <div className="p-4 text-center">
                                            <h5 className="font-16 m-b-15">Custom CSS icons</h5>
                                             <Rating  fractions={2} /> 
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

export default Ui_rating;   
