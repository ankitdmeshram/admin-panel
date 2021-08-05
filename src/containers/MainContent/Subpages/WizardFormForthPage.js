import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './validate';

const WizardFormForthPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
                        <h3>Confirm Detail</h3>
                                <fieldset>
                                <div className="p-3">
                                    <div className="custom-control custom-checkbox">
                                     <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" for="customCheck1">I agree with the Terms and Conditions.</label>
                                </div>
                            </div>
                         </fieldset>
                        <div id="btn_div">
                            <button type="button" className="btn btn-primary previous" onClick={previousPage}>Previous</button>&nbsp;
                            <button type="submit" className="btn btn-primary next" disabled={pristine || submitting} >Finish</button>
                        </div>
         </form>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormForthPage)