import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { Sparklines,SparklinesLine ,SparklinesBars, SparklinesSpots, SparklinesNormalBand, SparklinesReferenceLine, SparklinesCurve } from 'react-sparklines';

class SparkLine extends Component{
 
render(){
    return(
           <AUX>
             <div className="page-content-wrapper">
                 <div className="container-fluid">
                   
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Simple Chart</h4>
                                <Sparklines data={[5, 10, 5, 20, 18, 17, 29, 10, 18, 8, 17, 29, 10, 18]}>
                                  <SparklinesLine />
                               </Sparklines>
                         
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Bar Chart</h4>
                               
                                <Sparklines data={[5, 10, 5, 20, 18, 17, 29, 10, 18, 8, 17, 29, 10, 18]}>
                                    <SparklinesBars />
                                 </Sparklines>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body analytics-info">
                                <h4 className="mt-0 header-title">Simple Curve Chart</h4>
                            
                                        <Sparklines data={[15, 12, 5, 20, 18, 17, 29, 10, 18]}>
                                            <SparklinesCurve />
                                        </Sparklines>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Spots Chart</h4>
                                <Sparklines  data={[5, 10, 5, 20, 18, 17, 29, 10, 18]} margin={6}>
                                    <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
                                    <SparklinesSpots size={4}
                                        style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
                                </Sparklines>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Normal Band</h4>

                            <Sparklines data={[5, 10, 5, 20, 18, 17, 29, 10, 18]}>
                                <SparklinesLine style={{ fill: "none" }}/>
                                <SparklinesNormalBand />
                                <SparklinesReferenceLine type="mean" />
                          </Sparklines>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card bg-success m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 header-title text-white">Real world Chart</h4>

                                <Sparklines data={[5, 10, 5, 20, 18, 17, 29, 10, 18,5, 10, 5, 20, 18, 17, 29, 10, 28,5, 10, 5, 7, 18, 17, 5, 10, 18,5, 10, 5, 20, 18, 17, 19, 10, 18,5, 10, 5, 23, 18, 17, 29, 10, 18]} width={200}>
                                    <SparklinesLine style={{ stroke: "#ffffff", fill: "none"}} />
                                    <SparklinesSpots />
                                    <SparklinesNormalBand style={{ fill: "#2991c8", fillOpacity: .1 }} />
                                </Sparklines>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Reference Line Chart</h4>
                                <Sparklines data={[5, 10, 5, 20, 18, 17, 29, 10, 18, 15, 20, 18, 17, 29, 10, 18]}>
                                   <SparklinesBars style={{ fill: 'slategray', fillOpacity: ".5" }} />
                                   <SparklinesReferenceLine />
                                </Sparklines>
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

export default SparkLine;   