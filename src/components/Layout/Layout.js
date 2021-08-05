import Aux from '../../hoc/Aux_';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import React, {Component } from 'react';
import { withRouter } from 'react-router-dom';

class layout extends Component {

    render() {
        return (
            <Aux>
            {!this.props.loginpage ?
                <main>
                    <div id="wrapper">
                        {this.props.sidebar ? <Sidebar  /> : null}
                           <div className="content-page">
                               <div className="content">
                                    {this.props.header ? <Header  /> : null}
                                    {this.props.children}
                               </div>
                               {this.props.footer ? <Footer /> : null}
                           </div>
                    </div>
                </main>:this.props.children}  
            </Aux> 
        );
    }
}

export default withRouter(layout);

