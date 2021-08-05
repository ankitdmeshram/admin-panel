import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import NowAnimation from './NowAnimation';

class Ui_animation extends Component
{
  constructor(props) {
    super(props);
    this.state = {   now_control:"bounce"  };  
    this.handleSubmit = this.handleSubmit.bind(this);

 } 


handleSubmit(e){
        this.setState({now_control:  e.target.value}); 
      }
 
render(){
    
    return(
           <AUX>
   		      <div className="page-content-wrapper">
               <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Animation Effects</h4>
                                <p className="text-muted m-b-30 font-14">Just-add-water CSS animations.</p>

                                       <NowAnimation now_control={this.state.now_control} /> 

                                <form className="m-b-30 m-t-40">
                                    <div className="input-group">
                                        <select className="form-control js--animations" value={this.state.now_control} onChange={this.handleSubmit}>
                                            <option value="bounce">bounce</option>
                                            <option value="flash">flash</option>
                                            <option value="pulse">pulse</option>
                                            <option value="jello">jello</option>
                                            <option value="wobble">wobble</option>
                                            <option value="headShake">headShake</option>
                                            <option value="rubberBand">rubberBand</option>
                                            <option value="shake">shake</option>
                                            <option value="swing">swing</option>
                                            <option value="tada">tada</option>
                                            <option value="bounceIn">bounceIn</option>
                                            <option value="bounceInDown">bounceInDown</option>
                                            <option value="bounceInLeft">bounceInLeft</option>
                                            <option value="bounceInRight">bounceInRight</option>
                                            <option value="bounceInUp">bounceInUp</option>
                                            <option value="bounceOut">bounceOut</option>
                                            <option value="bounceOutDown">bounceOutDown</option>
                                            <option value="bounceOutLeft">bounceOutLeft</option>
                                            <option value="bounceOutRight">bounceOutRight</option>
                                            <option value="bounceOutUp">bounceOutUp</option>
                                            <option value="fadeIn">fadeIn</option>
                                            <option value="fadeInDown">fadeInDown</option>
                                            <option value="fadeInDownBig">fadeInDownBig</option>
                                            <option value="fadeInLeft">fadeInLeft</option>
                                            <option value="fadeInLeftBig">fadeInLeftBig</option>
                                            <option value="fadeInRight">fadeInRight</option>
                                            <option value="fadeInRightBig">fadeInRightBig</option>
                                            <option value="fadeInUp">fadeInUp</option>
                                            <option value="fadeInUpBig">fadeInUpBig</option>
                                            <option value="fadeOut">fadeOut</option>
                                            <option value="fadeOutDown">fadeOutDown</option>
                                            <option value="fadeOutDownBig">fadeOutDownBig</option>
                                            <option value="fadeOutLeft">fadeOutLeft</option>
                                            <option value="fadeOutLeftBig">fadeOutLeftBig</option>
                                            <option value="fadeOutRight">fadeOutRight</option>
                                            <option value="fadeOutRightBig">fadeOutRightBig</option>
                                            <option value="fadeOutUp">fadeOutUp</option>
                                            <option value="fadeOutUpBig">fadeOutUpBig</option>
                                            <option value="flip">flip</option>
                                            <option value="flipInX">flipInX</option>
                                            <option value="flipInY">flipInY</option>
                                            <option value="flipOutX">flipOutX</option>
                                            <option value="flipOutY">flipOutY</option>
                                            <option value="lightSpeedIn">lightSpeedIn</option>
                                            <option value="lightSpeedOut">lightSpeedOut</option>
                                            <option value="rotateIn">rotateIn</option>
                                            <option value="rotateInDownLeft">rotateInDownLeft</option>
                                            <option value="rotateInDownRight">rotateInDownRight</option>
                                            <option value="rotateInUpLeft">rotateInUpLeft</option>
                                            <option value="rotateInUpRight">rotateInUpRight</option>
                                            <option value="rotateOut">rotateOut</option>
                                            <option value="rotateOutDownLeft">rotateOutDownLeft</option>
                                            <option value="rotateOutDownRight">rotateOutDownRight</option>
                                            <option value="rotateOutUpLeft">rotateOutUpLeft</option>
                                            <option value="rotateOutUpRight">rotateOutUpRight</option>
                                            <option value="slideInDown">slideInDown</option>
                                            <option value="slideInLeft">slideInLeft</option>
                                            <option value="slideInRight">slideInRight</option>
                                            <option value="slideInUp">slideInUp</option>
                                            <option value="slideOutDown">slideOutDown</option>
                                            <option value="slideOutLeft">slideOutLeft</option>
                                            <option value="slideOutRight">slideOutRight</option>
                                            <option value="slideOutUp">slideOutUp</option>
                                            <option value="hinge">hinge</option>
                                            <option value="rollIn">rollIn</option>
                                            <option value="rollOut">rollOut</option>
                                            <option value="zoomIn">zoomIn</option>
                                            <option value="zoomInDown">zoomInDown</option>
                                            <option value="zoomInLeft">zoomInLeft</option>
                                            <option value="zoomInRight">zoomInRight</option>
                                            <option value="zoomInUp">zoomInUp</option>
                                            <option value="zoomOut">zoomOut</option>
                                            <option value="zoomOutDown">zoomOutDown</option>
                                            <option value="zoomOutLeft">zoomOutLeft</option>
                                            <option value="zoomOutRight">zoomOutRight</option>
                                            <option value="zoomOutUp">zoomOutUp</option>
                                        </select>

                                      </div>
                                </form>
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


export default Ui_animation;   