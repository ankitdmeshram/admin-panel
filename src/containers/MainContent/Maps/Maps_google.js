import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';

class Maps_google extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    onMarkerClick(props, marker, e) {
        alert('You clicked in this marker');
    }
    /**
    * Activate the street view
    */
    activateStreetView = (position) => {
        const mapObj = this.mapRef.map.getStreetView();
        mapObj.setPov({ heading: 34, pitch: 10 });
        mapObj.setPosition(position);
        mapObj.setVisible(true);
    }

    render() {
        return (
            <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title">Basic</h4>
                                        <p className="text-muted m-b-30 font-14">Example of google maps.</p>

                                        <div id="gmaps-markers" className="gmaps">
                                            <Map google={this.props.google} zoom={14}
                                                style={{
                                                    height: 300,
                                                    width: 720
                                                }}
                                                google={this.props.google} >

                                                <InfoWindow>
                                                    <div>
                                                        <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                                            </Map>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title">Overlays</h4>
                                        <p className="text-muted m-b-30 font-14">Example of google maps.</p>

                                        <div id="gmaps-overlay" className="gmaps">
                                            <Map google={this.props.google} zoom={14}
                                                style={{
                                                    minWwidth: "50%",
                                                    height: 300,
                                                    width: 720
                                                }}
                                                google={this.props.google} >

                                                <Marker onClick={this.onMarkerClick} />
                                                <Marker />
                                                <InfoWindow>
                                                    <div>
                                                        <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                                            </Map>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title">Street View Panoramas</h4>
                                        <p className="text-muted m-b-30 font-14">Example of google maps.</p>

                                        <div id="panorama" className="gmaps-panaroma">
                                            <Map google={this.props.google} ref={(map) => this.mapRef = map} zoom={14} initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
                                                style={{ height: 300, width: 730 }} streetViewControl={true}
                                                onReady={() => { this.activateStreetView({ lat: 40.7295174, lng: -73.9986496 }) }}></Map>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title">Markers</h4>
                                        <p className="text-muted m-b-30 font-14">Example of google maps.</p>

                                        <div id="gmaps-types" className="gmaps">
                                            <Map google={this.props.google}
                                                style={{ height: 300, width: 720, position: 'relative' }}
                                                zoom={14}>

                                                <Marker
                                                    title={'The marker`s title will appear as a tooltip.'}
                                                    name={'SOMA'}
                                                    position={{ lat: 37.778519, lng: -122.405640 }} />
                                                <Marker name={'Dolores park'} />
                                                <InfoWindow>
                                                    <div>
                                                        <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                                            </Map>
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

export default GoogleApiWrapper({
    apiKey: "AIzaSyCtSAR45TFgZjOs4nBFFZnII-6mMHLfSYI",
    v: "3"
})(Maps_google);
