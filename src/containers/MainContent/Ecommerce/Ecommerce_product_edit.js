import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines,SparklinesLine  } from 'react-sparklines';
import { Link } from 'react-router-dom';
import Select from 'react-select';

class ecommerce_product_edit extends Component{

    constructor(props) {
        super(props);
     
        this.state = {
          selectedOption1: null,
        };

        
      }


      handleChange1 = (selectedOption1) => {
        this.setState({ selectedOption1 });
           console.log(`Option selected:`, selectedOption1);
      }
 
render(){

    
    const options = [
        { value: 'Alaska', label: 'Alaska' },
        { value: 'Connecticut', label: 'Connecticut' },
        { value: 'Delaware', label: 'Delaware' },
        { value: 'Florida', label: 'Florida' },
        { value: 'Georgia', label: 'Georgia' },
        { value: 'Indiana', label: 'Indiana' },
        { value: 'Maine', label: 'Maine' },
        { value: 'Maryland', label: 'Maryland' },
        { value: 'Massachusetts', label: 'Massachusetts' },
        { value: 'Michigan', label: 'Michigan' },
        { value: 'New Hampshire', label: 'New Hampshire' },
        { value: 'New Jersey', label: 'New Jersey' },
        { value: 'New York', label: 'New York' },
        { value: 'North Carolina', label: 'North Carolina' },
        { value: 'Ohio', label: 'Ohio' },
        { value: 'Pennsylvania', label: 'Pennsylvania' },
        { value: 'Rhode Island', label: 'Rhode Island' },
        { value: 'South Carolina', label: 'South Carolina' },
        { value: 'Vermont', label: 'Vermont' },
        { value: 'Virginia', label: 'Virginia' },
        { value: 'West Virginia', label: 'West Virginia' },
      ];
      const { selectedOption1 } = this.state;

    return(
           <AUX>
		    <div className="page-content-wrapper">
            <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="card m-b-20">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">Basic Information</h4>
                                    <p className="text-muted m-b-30 font-14">Fill all information below</p>

                                    <form>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="productname">Product Name</label>
                                                    <input id="productname" name="productname" type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="manufacturername">Manufacturer Name</label>
                                                    <input id="manufacturername" name="manufacturername" type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="productdesc">Product Description</label>
                                                    <textarea className="form-control" id="productdesc" rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="manufacturerbrand">Manufacturer Brand</label>
                                                    <input id="manufacturerbrand" name="manufacturerbrand" type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="price">Price</label>
                                                    <input id="price" name="price" type="text" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <label className="control-label">Category</label>
                                                    <select className="form-control select2">
                                                        <option>Select</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="HI">Hawaii</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Features</label>

                                                  <Select
                                                        value={selectedOption1}
                                                        onChange={this.handleChange1}
                                                        options={options}
                                                        isMulti ={true}
                                                    />

                                             
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Product Image</label> <br/>
                                                    <img src="assets/images/products/1.jpg" alt="product img" className="img-fluid" style={{maxWidth : "200px" }}  />
                                                    <br/>
                                                    <button type="button" className="btn btn-purple m-t-10 waves-effect waves-light">Change Image</button>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-success waves-effect waves-light">Save Changes</button>
                                        <button type="submit" className="btn btn-secondary waves-effect">Cancel</button>
                                    </form>

                                </div>
                            </div>

                            <div className="card m-b-20">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">Meta Data</h4>
                                    <p className="text-muted m-b-30 font-14">Fill all information below</p>

                                    <form>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="metatitle">Meta title</label>
                                                    <input id="metatitle" name="productname" type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="metakeywords">Meta Keywords</label>
                                                    <input id="metakeywords" name="manufacturername" type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="metadescription">Meta Description</label>
                                                    <textarea className="form-control" id="metadescription" rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-success waves-effect waves-light">Save Changes</button>
                                        <button type="submit" className="btn btn-secondary waves-effect">Cancel</button>

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

export default ecommerce_product_edit;   