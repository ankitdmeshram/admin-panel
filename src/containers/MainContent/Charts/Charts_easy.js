import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import {AreaChart,BarChart,LineChart,PieChart} from 'react-easy-chart';

class Charts_easy extends Component{
 
render(){
    return(
           <AUX>
             <div className="page-content-wrapper">
                 <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Line Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">25610</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">56210</h5>
                                        <p className="text-muted font-14">Pending</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">12485</h5>
                                        <p className="text-muted font-14">Deactivated</p>
                                    </li>
                                </ul>

                                <LineChart
                                    axes
                                    yAxisOrientLeft
                                    width={700}
                                    interpolate={'cardinal'}
                                    lineColors={['blue', 'cyan', 'pink']}
                                    height={250}
                                    data={[
                                    [
                                        { x: 1, y: 12, z: 5 },
                                        { x: 2, y: 10, z: 15},
                                        { x: 3, y: 25, z: 25},
                                       
                                    ],[
                                        { x: 1, y: 10, z: 15},
                                        { x: 2, y: 12, z: 35 },
                                        { x: 3, y: 4, z: 45 },
                                      
                                    ],[
                                        { x: 1, y: 4, z: 25},
                                        { x: 2, y: 12, z: 12 },
                                        { x: 3, y: 24, z: 18 },
                                    ]
                                    ]}
                                />

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Bar Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">6,95,412</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">1,63,542</h5>
                                        <p className="text-muted font-14">Pending</p>
                                    </li>
                                </ul>

                                <BarChart
                                        colorBars
                                        height={250}
                                        width={700}
                                        data={[
                                        {  x: 'A',y: 46  },
                                        {  x: 'B',y: 26  },
                                        {  x: 'C',y: 16  },
                                        {  x: 'D',y: 36  },
                                        {  x: 'E',y: 76  },
                                        {  x: 'F',y: 16  },
                                        {  x: 'G',y: 51  },
                                        {  x: 'H',y: 43  },
                                        {  x: 'I',y: 25  },
                                        {  x: 'J',y: 35  },
                                        {  x: 'K',y: 18  },
                                        {  x: 'L',y: 26  }, 
                                        {  x: 'M',y: 36  },
                                        {  x: 'N',y: 76  },
                                        {  x: 'O',y: 16  },
                                        {  x: 'P',y: 51  },  
                                        {  x: 'Q',y: 46  },
                                        {  x: 'R',y: 36  },
                                        {  x: 'S',y: 11  },
                                        ]}
                                    />

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Area Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">86541</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">2541</h5>
                                        <p className="text-muted font-14">Pending</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">102030</h5>
                                        <p className="text-muted font-14">Deactivated</p>
                                    </li>
                                </ul>

                                <AreaChart
                                        axes
                                        margin={{top: 10, right: 10, bottom: 50, left: 50}}
                                        axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
                                        width={700}
                                        interpolate={'cardinal'}
                                        height={300}
                                        areaColors={['#6bcdc3', '#f8c788','#bcb7d8']}
                                        data={[
                                            [
                                            { x: 2001, y: 20 },
                                            { x: 2002, y: 30 },
                                            { x: 2003, y: 85 },
                                            { x: 2004, y: 55 },
                                            { x: 2005, y: 75 },
                                            { x: 2006, y: 65 },
                                            { x: 2007, y: 15 },
                                            { x: 2008, y: 55 },
                                            { x: 2009, y: 18 },
                                            { x: 2010, y: 39 }
                                            ], [
                                            { x: 2001, y: 10 },
                                            { x: 2002, y: 22 },
                                            { x: 2003, y: 45 },
                                            { x: 2004, y: 78 },
                                            { x: 2005, y: 14 },
                                            { x: 2006, y: 65 },
                                            { x: 2007, y: 45 },
                                            { x: 2008, y: 12 },
                                            { x: 2009, y: 77 },
                                            { x: 2010, y: 84 }
                                            ],[
                                                { x: 2001, y: 25 },
                                                { x: 2002, y: 50 },
                                                { x: 2003, y: 10 },
                                                { x: 2004, y: 30 },
                                                { x: 2005, y: 45 },
                                                { x: 2006, y: 78 },
                                                { x: 2007, y: 15 },
                                                { x: 2008, y: 25 },
                                                { x: 2009, y: 20 },
                                                { x: 2010, y: 36 }
                                            ]
                                        ]}
                                        />

                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">PieChart Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">3201</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">85120</h5>
                                        <p className="text-muted font-14">Pending</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">65214</h5>
                                        <p className="text-muted font-14">Deactivated</p>
                                    </li>
                                </ul>

                                <div align="center">

                                <PieChart
                                            data={[
                                                { key: 'A', value: 100, color: '#3c4ccf' },
                                                { key: 'B', value: 200, color: '#02a499' },
                                                { key: 'C', value: 50, color: '#f0f1f4' }
                                            ]}
                                            innerHoleSize={200}
                                            padding={10}
                                            size={300}
                                    />
                                 </div>

                            </div>
                        </div>
                    </div>
                </div> 

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Bar Chart With Area Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">86541</h5>
                                        <p className="text-muted font-14">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">2541</h5>
                                        <p className="text-muted font-14">Pending</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">102030</h5>
                                        <p className="text-muted font-14">Deactivated</p>
                                    </li>
                                </ul>

                                <BarChart
                                    axisLabels={{x: 'My x Axis', y: 'My y Axis', y2: 'My second y Axis'}}
                                    axes
                                    grid
                                    colorBars
                                    height={350}
                                    width={1500}
                                    interpolate={'cardinal'}
                                    lineData={[
                                    {   x: 'A', y: 10  },
                                    {   x: 'B', y: 20  }, 
                                    {   x: 'C', y: 18  }, 
                                    {   x: 'D', y: 17  }, 
                                    {   x: 'E', y: 10  }, 
                                    {   x: 'F', y: 23  }, 
                                    {   x: 'G', y: 35  }, 
                                    {   x: 'H', y: 15  }, 
                                    {   x: 'I', y: 18  }, 
                                    {   x: 'J', y: 16  }, 
                                    {   x: 'K', y: 15  }, 
                                    {   x: 'L', y: 25  }, 
                                    {   x: 'M', y: 23  }, 
                                    {   x: 'N', y: 35  }, 
                                    {   x: 'O', y: 15  }, 
                                    {   x: 'P', y: 27  }, 
                                    {   x: 'Q', y: 15  }, 
                                    {   x: 'R', y: 34  }, 
                                    ]}
                                    data={[
                                    {    x: 'A',  y: 46  },
                                    {    x: 'B',  y: 26  },
                                    {    x: 'C',  y: 76  },
                                    {    x: 'D',  y: 36  },
                                    {    x: 'E',  y: 16  },
                                    {    x: 'F',  y: 46  },
                                    {    x: 'G',  y: 36  },
                                    {    x: 'H',  y: 29  },
                                    {    x: 'I',  y: 45  },
                                    {    x: 'J',  y: 15  },
                                    {    x: 'K',  y: 68  },
                                    {    x: 'L',  y: 45  }, 
                                    {    x: 'M',  y: 36  },
                                    {    x: 'N',  y: 29  },
                                    {    x: 'O',  y: 45  },
                                    {    x: 'P',  y: 16  },
                                    {    x: 'Q',  y: 19  },
                                    {    x: 'R',  y: 58  },
                                    ]}
                                />



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

export default Charts_easy;   