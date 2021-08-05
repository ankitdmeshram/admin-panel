import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import Vector from "../../MapsTypes/VectorMaps/vectormap";

class Maps_vector extends Component{
 
render(){
    return(
           <AUX>
		      <div className="page-content-wrapper">
              <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">World Map</h4>
                                <p className="text-muted m-b-30 font-14">Example of vector map.</p>

                                <div id="world-map-markers" className="vector-map-height"> 
                                     <Vector value="world_mill" />
                                    </div>

                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">USA Map</h4>
                                <p className="text-muted m-b-30 font-14">Example of vector map.</p>

                                <div id="usa" className="vector-map-height"> <Vector value="us_aea" /></div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">UK Map</h4>
                                <p className="text-muted m-b-30 font-14">Example of vector map.</p>

                                <div id="uk" className="vector-map-height"><Vector value="ch_mill" /></div>

                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Chicago Map</h4>
                                <p className="text-muted m-b-30 font-14">Example of vector map.</p>
                               
                                <div id="chicago" className="vector-map-height"><Vector value="continents_mill" /></div>
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

export default Maps_vector;   