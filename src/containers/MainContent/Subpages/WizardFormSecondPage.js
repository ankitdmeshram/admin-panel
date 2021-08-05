import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
                           <h3>Company Document</h3>
                                        <fieldset>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label for="txtFirstNameShipping" className="col-lg-3 col-form-label">PAN Card</label>
                                                        <div className="col-lg-9">
                                                            <input id="txtFirstNameShipping" name="txtFirstNameShipping" type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label for="txtLastNameShipping" className="col-lg-3 col-form-label">VAT/TIN No.</label>
                                                        <div className="col-lg-9">
                                                            <input id="txtLastNameShipping" name="txtLastNameShipping" type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label for="txtCompanyShipping" className="col-lg-3 col-form-label">CST No.</label>
                                                        <div className="col-lg-9">
                                                            <input id="txtCompanyShipping" name="txtCompanyShipping" type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label for="txtEmailAddressShipping" className="col-lg-3 col-form-label">Service Tax No.</label>
                                                        <div className="col-lg-9">
                                                            <input id="txtEmailAddressShipping" name="txtEmailAddressShipping" type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label for="txtCityShipping" className="col-lg-3 col-form-label">Company UIN</label>
                                                        <div className="col-lg-9">
                                                            <input id="txtCityShipping" name="txtCityShipping" type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label for="txtStateProvinceShipping" className="col-lg-3 col-form-label">Declaration</label>
                                                        <div className="col-lg-9">
                                                            <input id="txtStateProvinceShipping" name="txtStateProvinceShipping" type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                </fieldset>
            <div id="btn_div">
                <button type="button" className="btn btn-primary previous" onClick={previousPage}>  Previous </button> &nbsp;
                <button type="submit" className="btn btn-primary next"> Next </button>
            </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)