import React, {Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';  

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            dropdownOpen1: false,
            dropdownOpenprofile: false,
            dropdownOpenbadge: false,
            now_route : ""
        };

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggleprofile = this.toggleprofile.bind(this);
        this.togglebadge = this.togglebadge.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
      toggle1() {
        this.setState(prevState => ({
          dropdownOpen1: !prevState.dropdownOpen1
        }));
      }
      toggleprofile() {
        this.setState(prevState => ({
          dropdownOpenprofile: !prevState.dropdownOpenprofile
        }));
      }
      togglebadge() {
        this.setState(prevState => ({
          dropdownOpenbadge: !prevState.dropdownOpenbadge
        }));
      }
       
      togglescreen(e)
      {
          if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
              if (document.documentElement.requestFullscreen) {
                  document.documentElement.requestFullscreen();
              } else if (document.documentElement.mozRequestFullScreen) {
                  document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullscreen) {
                  document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
              }
          } else {
              if (document.cancelFullScreen) {
                  document.cancelFullScreen();
              } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
              } else if (document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen();
              }
          }
      }
      componentDidMount()
      {
        this.setState({now_route :this.props.location.pathname })
      }

    render() {
        return (
            <div className="topbar">
                        <nav className="navbar-custom">
                            <div className="search-wrap" id="search-wrap">
                                <div className="search-bar">
                                    <input className="search-input" type="search" placeholder="Search" />
                                    <a href="#" className="close-search toggle-search" data-target="#search-wrap">
                                        <i className="mdi mdi-close-circle"></i>
                                    </a>
                                </div>
                            </div>

                            <ul className="list-inline float-right mb-0">
                                <li className="list-inline-item dropdown notification-list">
                                    <Link  className="nav-link waves-effect toggle-search" to="#"  data-target="#search-wrap">
                                        <i className="mdi mdi-magnify noti-icon"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item dropdown notification-list hidden-xs-down">
                                    <Link  onClick={() => this.togglescreen()}  className="nav-link waves-effect" to="#" id="btn-fullscreen">
                                        <i className="mdi mdi-fullscreen noti-icon"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item dropdown notification-list hidden-xs-down">

                                <Dropdown isOpen={this.state.dropdownOpen1}  toggle={this.toggle1}>
                                    <DropdownToggle  className="nav-link dropdown-toggle arrow-none waves-effect text-muted" tag="a">
                                        <span style={{color:"#707070"}}>English</span> <img src="assets/images/flags/us_flag.jpg" className="ml-2" height="16" alt="" />
                                    </DropdownToggle>
                                    <DropdownMenu className='dropdown-menu dropdown-menu-right language-switch'>
                                    <a className="dropdown-item" href="#"><img src="assets/images/flags/germany_flag.jpg" alt="" height="16"/><span> German </span></a>
                                    <a className="dropdown-item" href="#"><img src="assets/images/flags/italy_flag.jpg" alt="" height="16"/><span> Italian </span></a>
                                    <a className="dropdown-item" href="#"><img src="assets/images/flags/french_flag.jpg" alt="" height="16"/><span> French </span></a>
                                    <a className="dropdown-item" href="#"><img src="assets/images/flags/spain_flag.jpg" alt="" height="16"/><span> Spanish </span></a>
                                    <a className="dropdown-item" href="#"><img src="assets/images/flags/russia_flag.jpg" alt="" height="16"/><span> Russian </span></a>
                                   </DropdownMenu>
                                </Dropdown>

                                </li>
                                <li className="list-inline-item dropdown notification-list">
                                <Dropdown isOpen={this.state.dropdownOpenbadge}  toggle={this.togglebadge}>
                                    <DropdownToggle className="nav-link dropdown-toggle droptest arrow-none waves-effect" tag="a">
                                        <i className="ion-ios7-bell noti-icon"></i>
                                        <span className="badge badge-pill badge-danger noti-icon-badge">3</span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                                    <h6 className="dropdown-item-text">
                                            Notifications (258)
                                        </h6>

                                    <DropdownItem >
                                    <Scrollbars style={{ height: "200px" }} className="notification-item-list" >
                                       <Link id="ex" to="#" className="dropdown-item notify-item active">
                                         <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline"></i></div>
                                         <p className="notify-details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                       </Link>

                                       <Link id="ex" to="#" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-warning"><i className="mdi mdi-message-text-outline"></i></div>
                                            <p className="notify-details">New Message received<span className="text-muted">You have 87 unread messages</span></p>
                                        </Link>
                                        
                                        <Link id="ex" to="#" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-info"><i className="mdi mdi-glass-cocktail"></i></div>
                                            <p className="notify-details">Your item is shipped<span className="text-muted">It is a long established fact that a reader will</span></p>
                                        </Link>
                                       
                                        </Scrollbars>
                                        <Link id="ex" to="#" className="dropdown-item text-center text-primary">
                                            View all <i className="fi-arrow-right"></i>
                                        </Link>
                                    </DropdownItem>
                                    </DropdownMenu>                                
                                </Dropdown>

                                </li>
                                <li className="list-inline-item dropdown notification-list">
                                    <Dropdown isOpen={this.state.dropdownOpenprofile}  toggle={this.toggleprofile}>
                                        <DropdownToggle className="nav-link dropdown-toggle droptest arrow-none waves-effect nav-user" tag="a">
                                        <img src="assets/images/users/avatar-4.jpg" alt="user" className="rounded-circle" />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem><i className="mdi mdi-account-circle m-r-5"></i> Profile</DropdownItem>
                                        <DropdownItem><i className="mdi mdi-wallet m-r-5"></i> My Wallet</DropdownItem>
                                        <DropdownItem><span className="badge badge-success float-right">11</span><i className="mdi mdi-settings m-r-5"></i> Settings</DropdownItem>
                                        <DropdownItem><i className="mdi mdi-lock-open-outline m-r-5"></i> Lock screen</DropdownItem>
                                        <DropdownItem><i className="mdi mdi-power text-danger"></i> Logout</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </li>
                            </ul>

                            <ul className="list-inline menu-left mb-0">
                                <li className="list-inline-item">
                                    <button type="button" className="button-menu-mobile open-left waves-effect">
                                        <i className="ion-navicon"></i>
                                    </button>
                                </li>
                                <li className="hide-phone list-inline-item app-search">
                                    <h3 className="page-title" id="now_routing"></h3>
                                </li>
                            </ul>
                            <div className="clearfix"></div>
                        </nav>
                    </div>

        );
    }
}

export default withRouter(header);