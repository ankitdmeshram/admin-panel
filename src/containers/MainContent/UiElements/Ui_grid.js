import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Ui_grid extends Component{
 
render(){

    return(
           <AUX>
		     <div className="page-content-wrapper">
              <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Grid options</h4>
                                <p className="text-muted m-b-30 font-14">See how aspects of the Bootstrap grid
                                    system work across multiple devices with a handy table.</p>

                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped mb-0">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th className="text-center">
                                                Extra small<br></br>
                                                <small>&lt;576px</small>
                                            </th>
                                            <th className="text-center">
                                                Small<br></br>
                                                <small>≥576px</small>
                                            </th>
                                            <th className="text-center">
                                                Medium<br></br>
                                                <small>≥768px</small>
                                            </th>
                                            <th className="text-center">
                                                Large<br></br>
                                                <small>≥992px</small>
                                            </th>
                                            <th className="text-center">
                                                Extra large<br></br>
                                                <small>≥1200px</small>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th className="text-nowrap" scope="row">Grid behavior</th>
                                            <td>Horizontal at all times</td>
                                            <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
                                        </tr>
                                        <tr>
                                            <th className="text-nowrap" scope="row">Max container width</th>
                                            <td>None (auto)</td>
                                            <td>540px</td>
                                            <td>720px</td>
                                            <td>960px</td>
                                            <td>1140px</td>
                                        </tr>
                                        <tr>
                                            <th className="text-nowrap" scope="row">class prefix</th>
                                            <td><code>.col-</code></td>
                                            <td><code>.col-sm-</code></td>
                                            <td><code>.col-md-</code></td>
                                            <td><code>.col-lg-</code></td>
                                            <td><code>.col-xl-</code></td>
                                        </tr>
                                        <tr>
                                            <th className="text-nowrap" scope="row"># of columns</th>
                                            <td colspan="5">12</td>
                                        </tr>
                                        <tr>
                                            <th className="text-nowrap" scope="row">Gutter width</th>
                                            <td colspan="5">20px (10px on each side of a column)</td>
                                        </tr>
                                        <tr>
                                            <th className="text-nowrap" scope="row">Nestable</th>
                                            <td colspan="5">Yes</td>
                                        </tr>
                                        <tr>
                                            <th className="text-nowrap" scope="row">Offsets</th>
                                            <td colspan="5">Yes</td>
                                        </tr>
                                        <tr>
                                            <th className="text-nowrap" scope="row">Column ordering</th>
                                            <td colspan="5">Yes</td>
                                        </tr>
                                        </tbody>
                                    </table>
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

export default Ui_grid;   