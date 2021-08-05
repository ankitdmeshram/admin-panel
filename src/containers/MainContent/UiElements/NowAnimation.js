import React , {Component } from 'react';
import { bounce,flash,pulse,jello,wobble,headShake,rubberBand,shake,swing,tada,bounceIn,bounceInDown,bounceInLeft,bounceInRight,bounceInUp,bounceOut,bounceOutDown,bounceOutLeft,bounceOutRight,bounceOutUp,fadeIn,fadeInDown,fadeInDownBig,fadeInLeft,fadeInLeftBig,fadeInRight,fadeInRightBig,fadeInUp,fadeInUpBig,fadeOut,fadeOutDown,fadeOutDownBig,fadeOutLeft,fadeOutLeftBig,fadeOutRight,fadeOutRightBig,fadeOutUp,fadeOutUpBig,flip,flipInX,flipInY,flipOutX,flipOutY,lightSpeedIn,lightSpeedOut,rotateIn,rotateInDownLeft,rotateInDownRight,rotateInUpLeft,rotateInUpRight,rotateOut,rotateOutDownLeft,rotateOutDownRight,rotateOutUpLeft,rotateOutUpRight,slideInDown,slideInLeft,slideInRight,slideInUp,slideOutDown,slideOutLeft,slideOutRight,slideOutUp,hinge,rollIn,rollOut,zoomIn,zoomInDown,zoomInLeft,zoomInRight,zoomInUp,zoomOut,zoomOutDown,zoomOutLeft,zoomOutRight,zoomOutUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

class NowAnimation extends Component
{

render(){
    if(this.props.now_control === "bounce")
    {
        return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(bounce, 'bounce')}}>
               <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "flash")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(flash, 'flash')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    } 
    else if(this.props.now_control === "pulse")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(pulse, 'pulse')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }

    
    else if(this.props.now_control === "jello")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(jello, 'jello')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "wobble")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(wobble, 'wobble')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "headShake")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(headShake, 'headShake')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rubberBand")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rubberBand, 'rubberBand')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "shake")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(shake, 'shake')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "swing")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(swing, 'swing')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }

    else if(this.props.now_control === "tada")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(tada, 'tada')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "bounceIn")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(bounceIn, 'bounceIn')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "bounceInDown")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(bounceInDown, 'bounceInDown')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "bounceInLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "bounceInRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(bounceInRight, 'bounceInRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "bounceInUp")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(bounceInUp, 'bounceInUp')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }

    

    else if(this.props.now_control === "bounceOut")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(bounceOut, 'bounceOut')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "bounceOutDown")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(bounceOutDown, 'bounceOutDown')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "bounceOutLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(bounceOutLeft, 'bounceOutLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "bounceOutRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(bounceOutRight, 'bounceOutRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "bounceOutUp")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(bounceOutUp, 'bounceOutUp')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeIn")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeIn, 'fadeIn')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeInDown")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeInDown, 'fadeInDown')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeInDownBig")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeInLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeInLeftBig")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeInRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeInRight, 'fadeInRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeInRightBig")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeInRightBig, 'fadeInRightBig')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeInUp")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeInUp, 'fadeInUp')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeInUpBig")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeInUpBig, 'fadeInUpBig')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeOut")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeOut, 'fadeOut')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeOutDown")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeOutDown, 'fadeOutDown')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeOutDownBig")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeOutDownBig, 'fadeOutDownBig')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeOutLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeOutLeft, 'fadeOutLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeOutLeftBig")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeOutLeftBig, 'fadeOutLeftBig')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeOutRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeOutRight, 'fadeOutRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeOutRightBig")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeOutRightBig, 'fadeOutRightBig')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "fadeOutUp")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeOutUp, 'fadeOutUp')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    
    else if(this.props.now_control === "fadeOutUpBig")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(fadeOutUpBig, 'fadeOutUpBig')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "flip")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(flip, 'flip')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "flipInX")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(flipInX, 'flipInX')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "flipInY")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(flipInY, 'flipInY')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "flipOutX")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(flipOutX, 'flipOutX')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "flipOutY")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(flipOutY, 'flipOutY')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "lightSpeedIn")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "lightSpeedOut")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(lightSpeedOut, 'lightSpeedOut')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rotateIn")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rotateIn, 'rotateIn')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rotateInDownLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rotateInDownLeft, 'rotateInDownLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rotateInDownRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rotateInDownRight, 'rotateInDownRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rotateInUpLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rotateInUpLeft, 'rotateInUpLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rotateInUpRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rotateInUpRight, 'rotateInUpRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rotateOut")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rotateOut, 'rotateOut')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rotateOutDownLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rotateOutDownLeft, 'rotateOutDownLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rotateOutDownRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rotateOutDownRight, 'rotateOutDownRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rotateOutUpLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rotateOutUpLeft, 'rotateOutUpLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rotateOutUpRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rotateOutUpRight, 'rotateOutUpRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "slideInDown")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(slideInDown, 'slideInDown')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "slideInLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(slideInLeft, 'slideInLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
   else if(this.props.now_control === "slideInRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(slideInRight, 'slideInRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "slideInUp")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(slideInUp, 'slideInUp')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "slideOutDown")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(slideOutDown, 'slideOutDown')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "slideOutLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(slideOutLeft, 'slideOutLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "slideOutRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(slideOutRight, 'slideOutRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "slideOutUp")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(slideOutUp, 'slideOutUp')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }

    else if(this.props.now_control === "hinge")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(hinge, 'hinge')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rollIn")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rollIn, 'rollIn')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "rollOut")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(rollOut, 'rollOut')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "zoomIn")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(zoomIn, 'zoomIn')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "zoomInDown")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(zoomInDown, 'zoomInDown')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "zoomInLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(zoomInLeft, 'zoomInLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "zoomInUp")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(zoomInUp, 'zoomInUp')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "zoomInRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(zoomInRight, 'zoomInRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
     else if(this.props.now_control === "zoomOut")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(zoomOut, 'zoomOut')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "zoomOutDown")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(zoomOutDown, 'zoomOutDown')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }else if(this.props.now_control === "zoomOutLeft")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(zoomOutLeft, 'zoomOutLeft')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else if(this.props.now_control === "zoomOutRight")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(zoomOutRight, 'zoomOutRight')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }else if(this.props.now_control === "zoomOutUp")
    { 
         return(<StyleRoot><div align="center" style={{ animation: 'x 1s', animationName: Radium.keyframes(zoomOutUp, 'zoomOutUp')}}>
                <img src="assets/images/logo.png" alt="" className="img-fluid center-block" /></div></StyleRoot>);
    }
    else
    {  
        return(<StyleRoot>
            Nothing             
        </StyleRoot>);
    }
    
   
    }
}

export default NowAnimation;   

