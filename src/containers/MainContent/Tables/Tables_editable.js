import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import Editable from 'react-x-editable';

class Tables_editable extends Component{
 
render(){
    return(
           <AUX>
		   <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Examples</h4>
                                <p className="text-muted m-b-30 font-14">just start typing to edit, or move around with arrow keys or mouse clicks!</p>

                                <table className="table table-editable">
                                            <thead>
                                                <tr>
                                                <th>ID</th>
                                                <th>Age (AutoFill)</th>
                                                <th>Qty (AutoFill and Editable)</th>
                                                <th>Cost (Editable)</th>
                                                </tr>
                                            </thead>
                                            <tr>
                                                <td>1</td>
                                                <td data-original-value="11">11</td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="1"
                                                    />
                                                </td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="1.99"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td data-original-value="22">22</td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="2"
                                                    />
                                                </td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="2.99"
                                                    />
                                                </td>
                                              </tr>
                                            <tr>
                                                <td>3</td>
                                                <td data-original-value="33">33</td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="3"
                                                    />
                                                </td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="3.99"
                                                    />
                                                </td>
                                                 </tr>
                                            <tr>
                                                <td>4</td>
                                                <td data-original-value="44">44</td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="4"
                                                    />
                                                </td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="4.99"
                                                    />
                                                </td>
                                               </tr>
                                            <tr>
                                                <td>5</td>
                                                <td data-original-value="55">55</td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="5"
                                                    />
                                                </td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="5.99"
                                                    />
                                                </td>
                                                </tr>
                                        </table>

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

export default Tables_editable;   