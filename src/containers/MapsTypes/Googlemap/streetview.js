import React, { Component } from "react";
import  { GoogleApiWrapper } from "google-maps-react";
import { StreetView }  from "react-google-map-street-view";
export class Streetview extends Component 
{
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div>
            <StreetView  address="Times square" APIkey="AIzaSyCtSAR45TFgZjOs4nBFFZnII-6mMHLfSYI" streetView zoomLevel={10}/>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCtSAR45TFgZjOs4nBFFZnII-6mMHLfSYI",
  v: "3"
})(Streetview);
