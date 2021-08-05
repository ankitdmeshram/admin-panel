import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const images = [
    'assets/images/small/img-2.jpg',
    'assets/images/small/img-3.jpg',
    'assets/images/small/img-4.jpg',
    'assets/images/small/img-5.jpg',
    'assets/images/small/img-6.jpg',
  ];

class Ui_lightbox extends Component{
    
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isFits: false,
          isEffects: false,
          isGallery: false,
          isGalleryZoom: false,
          isVideo: false,
          modalIsOpen: false
        };
      }
 
render(){
    const { photoIndex } = this.state;
    return(
           <AUX>

{this.state.isFits ? 
                    <Lightbox mainSrc={images[photoIndex]}
                    onCloseRequest={() => this.setState({ isFits: false })} 
                    /> : null }

                    {this.state.isVideo ? 
                    <Lightbox mainSrc={images[6]}
                    onCloseRequest={() => this.setState({ isVideo: false })} 
                    /> : null }

                    {this.state.isEffects ? 
                    <Lightbox mainSrc={images[photoIndex]}
                    onCloseRequest={() => this.setState({ isEffects: false })} 
                    imageCaption="Caption. Can be aligned it to any side and contain any HTML."
                    zoomInLabel = "Zoom in"
                    /> : null }

                    {this.state.isGallery ? 
                    <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isGallery: false })}
                    onMovePrevRequest={() => this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length, }) }
                    onMoveNextRequest={() => this.setState({  photoIndex: (photoIndex + 1) % images.length, })}
                    imageCaption={"Project "+parseFloat(photoIndex+1)}
                    />: null }

                    {this.state.isGalleryZoom ? 
                    <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isGalleryZoom: false })}
                    onMovePrevRequest={() => this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length, }) }
                    onMoveNextRequest={() => this.setState({  photoIndex: (photoIndex + 1) % images.length, })}
                    />: null }
		   
		     <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Single image lightbox</h4>
                                <p className="text-muted m-b-30 font-14">Three simple popups with different scaling settings.</p>

                                <div className="row">
                                    <div className="col-6">
                                        <h5 className="mt-0 font-14 m-b-15 text-muted">Fits (Horz/Vert)</h5>
                                        <img className="img-fluid" onClick={() => this.setState({ isFits: true })} alt="" src="assets/images/small/img-2.jpg"  width="145" />
                                        
                                    </div>
                                    <div className="col-6">
                                        <h5 className="mt-0 font-14 m-b-15 text-muted">Effects</h5>
                                        <img onClick={() => this.setState({ isEffects: true })}  className="img-fluid" alt="" src="assets/images/small/img-3.jpg" width="75" />
                                       
                                        <p className="mt-2 mb-0 font-14 text-muted">No gaps, zoom animation, close icon in top-right corner.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Lightbox gallery</h4>
                                <p className="text-muted m-b-30 font-14">In this example lazy-loading of images is enabled for the next image based on move direction. </p>

                                <div className="popup-gallery">
                                <Link className="float-left" to="#">
                                        <div className="img-responsive">
                                        <img onClick={() => this.setState({ isGallery: true,photoIndex:0 })} alt="" src="assets/images/small/img-2.jpg" width="120" />
                                        </div>
                                        </Link>

                                        <Link className="float-left" to="#">
                                        <div className="img-responsive">
                                        <img onClick={() => this.setState({ isGallery: true,photoIndex:1 })} alt="" src="assets/images/small/img-3.jpg" width="120" />
                                        </div>
                                        </Link>

                                        <Link className="float-left" to="#">
                                        <div className="img-responsive">
                                        <img onClick={() => this.setState({ isGallery: true,photoIndex:2 })} alt="" src="assets/images/small/img-4.jpg" width="120" />
                                        </div>
                                        </Link>
                                        
                                        <Link className="float-left" to="#">
                                        <div className="img-responsive">
                                        <img onClick={() => this.setState({ isGallery: true,photoIndex:3 })} alt="" src="assets/images/small/img-5.jpg" width="120" />
                                        </div>
                                        </Link>

                                        <Link className="float-left" to="#">
                                        <div className="img-responsive">
                                        <img onClick={() => this.setState({ isGallery: true,photoIndex:4 })} alt="" src="assets/images/small/img-6.jpg" width="120" />
                                        </div>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Zoom Gallery</h4>
                                <p className="text-muted m-b-30 font-14">Zoom effect works only with images.</p>

                                <div className="zoom-gallery">
                                <Link className="float-left" to="#">
                                          <img onClick={() => this.setState({ isGalleryZoom: true,photoIndex:1 })} alt="" src="assets/images/small/img-3.jpg" width="275" />
                                        </Link>
                                        <Link className="float-left" to="#" >
                                          <img onClick={() => this.setState({ isGalleryZoom: true,photoIndex:5 })} alt="" src="assets/images/small/img-7.jpg" width="275" />
                                        </Link>   </div>
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

export default Ui_lightbox;   