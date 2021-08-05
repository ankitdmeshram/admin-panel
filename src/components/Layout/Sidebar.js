import React, {Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import $ from 'jquery';

class sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Tab: 'index', SubTab: '', MoreTab: '',  dashboard_menu:false, email_menu : false, ui_menu : false,
            form_menu: false, chart_menu: false, table_menu: false, icon_menu: false, map_menu: false,
            auth_menu: false, extra_menu: false, eco_menu: false, emt_menu: false
        };
    }

    setActiveTab = (tab,subtab,moretab,toggleTab, e)=> {
        this.setState({Tab: tab,SubTab: subtab,MoreTab: moretab});
    }
    
    componentDidMount() 
    {
        var now_route = "";
        var pageUrl = window.location.pathname.split(/[?#]/)[0];
            now_route = pageUrl.substr(1).replace(/_/g," ");
        $('#now_routing').empty();
        if(now_route == "") { now_route="Dashboard1" } else {  }
        $('#now_routing').append(now_route);

        $('.toggle-search').on('click', function () {
            var targetId = $(this).data('target');
            var $searchBar;
            if (targetId) {
                $searchBar = $(targetId);
                $searchBar.toggleClass('open');
            }
        });

        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            $("body").toggleClass("enlarged");
        });

        $('li.has_sub li').on('click', function (event) {
            $("body").toggleClass("enlarged");
        });
    }
    componentDidUpdate() 
    {   
            var now_route = "";
            var pageUrl = window.location.pathname.split(/[?#]/)[0];
                now_route = pageUrl.substr(1).replace("_"," ");
            $('#now_routing').empty();
            if(now_route == "") { now_route="Dashboard1" } else {  }
            $('#now_routing').append(now_route);
    }
  
    render() {
        return (
            <div className="left side-menu">

            <div className="topbar-left">
                <div className="">
                    <Link to="/" className="logo"><img src="assets/images/logo-sm.png" height="36" alt="logo" /></Link>
                </div>
            </div>
           
            <div className="sidebar-inner slimscrollleft" >
            <PerfectScrollbar>
                <div id="sidebar-menu">
                    <ul>
                        <li className="menu-title">Main</li>
                        <li className={this.state.dashboard_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ dashboard_menu: !this.state.dashboard_menu, email_menu : false, ui_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) }  className={this.state.Tab === 'index' ? 'waves-effect active-menu':'waves-effect'}  ><i className="mdi mdi-view-dashboard"></i> <span> Dashboard <span className="badge badge-pill badge-primary pull-right">20+</span></span> </Link>
                            <ul className="list-unstyled" style={{display: this.state.dashboard_menu ? 'block' : 'none' }}>
                                    <li><Link className={this.state.SubTab === 'dashboard1' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'index','dashboard1','')}  to="/">Dashboard One</Link></li>
                                    <li><Link className={this.state.SubTab === 'dashboard2' ? 'active-menu' : ''} onClick={this.setActiveTab.bind(this, 'index','dashboard2','')}   to="dashboard2">Dashboard Two</Link></li>
                                </ul>
                        </li>
                        <li>
                            <Link to="widgets" className={this.state.Tab === 'widget' ? 'waves-effect active-menu':'waves-effect'} onClick={this.setActiveTab.bind(this, 'widget','','')}><i className="mdi mdi-cube-outline"></i><span> Widgets </span></Link>
                        </li>

                        <li className={this.state.email_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ email_menu: !this.state.email_menu,dashboard_menu : false, ui_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) } className={this.state.Tab === 'email' ? 'waves-effect active-menu':'waves-effect'}><i className="mdi mdi-email-outline"></i><span> Email <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                            <ul className="list-unstyled" style={{display: this.state.email_menu ? 'block' : 'none' }}>
                                <li><Link  className={this.state.SubTab === 'email_inbox' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'email','email_inbox','')}  to="email_inbox">Inbox</Link></li>
                                <li><Link  className={this.state.SubTab === 'email_read' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'email','email_read','')}  to="email_read">Email Read</Link></li>
                                <li><Link  className={this.state.SubTab === 'email_compose' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'email','email_compose','')}  to="email_compose">Email Compose</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="calendar" className={this.state.Tab === 'calendar' ? 'waves-effect active-menu':'waves-effect'} onClick={this.setActiveTab.bind(this, 'calendar','','')}><i className="mdi mdi-calendar-check"></i><span> Calendar </span></Link>
                        </li>

                        <li className="menu-title">Components</li>
                        <li  className={this.state.ui_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#"  onClick={()=> this.setState({ ui_menu: !this.state.ui_menu, email_menu : false, dashboard_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) }  className={this.state.Tab === 'ui' ? 'waves-effect active-menu':'waves-effect'}><i className="mdi mdi-buffer"></i> <span> User Interface <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span> </Link>
                            <ul className="list-unstyled" style={{display: this.state.ui_menu ? 'block' : 'none' }}>
                                <li><Link className={this.state.SubTab === 'buttons' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','buttons','')} to="buttons">Buttons</Link></li>
                                <li><Link className={this.state.SubTab === 'colors' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','colors','')} to="colors">Colors</Link></li>
                                <li><Link className={this.state.SubTab === 'cards' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','cards','')} to="cards">Cards</Link></li>
                                <li><Link className={this.state.SubTab === 'tabs_accordions' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','tabs_accordions','')} to="tabs_accordions">Tabs &amp; Accordions</Link></li>
                                <li><Link className={this.state.SubTab === 'modals' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','modals','')} to="modals">Modals</Link></li>
                                <li><Link className={this.state.SubTab === 'images' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','images','')} to="images">Images</Link></li>
                                <li><Link className={this.state.SubTab === 'alerts' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','alerts','')} to="alerts">Alerts</Link></li>
                                <li><Link className={this.state.SubTab === 'progressbars' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','progressbars','')} to="progressbars">Progress Bars</Link></li>
                                <li><Link className={this.state.SubTab === 'dropdowns' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','dropdowns','')} to="dropdowns">Dropdowns</Link></li>
                                <li><Link className={this.state.SubTab === 'lightbox' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','lightbox','')} to="lightbox">Lightbox</Link></li>
                                <li><Link className={this.state.SubTab === 'navs' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','navs','')} to="navs">Navs</Link></li>
                                <li><Link className={this.state.SubTab === 'pagination' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','pagination','')} to="pagination">Pagination</Link></li>
                                <li><Link className={this.state.SubTab === 'popover_tooltips' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','popover_tooltips','')} to="popover_tooltips">Popover & Tooltips</Link></li>
                                <li><Link className={this.state.SubTab === 'badge' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','badge','')} to="badge">Badge</Link></li>
                                <li><Link className={this.state.SubTab === 'carousel' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','carousel','')} to="carousel">Carousel</Link></li>
                                <li><Link className={this.state.SubTab === 'video' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','video','')} to="video">Video</Link></li>
                                <li><Link className={this.state.SubTab === 'typography' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','typography','')} to="typography">Typography</Link></li>
                                <li><Link className={this.state.SubTab === 'sweet_alert' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','sweet_alert','')} to="sweet_alert">Sweet-Alert</Link></li>
                                <li><Link className={this.state.SubTab === 'grid' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','grid','')} to="grid">Grid</Link></li>
                                <li><Link className={this.state.SubTab === 'animation' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','animation','')} to="animation">Animation</Link></li>
                                <li><Link className={this.state.SubTab === 'highlight' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','highlight','')} to="highlight">Highlight</Link></li>
                                <li><Link className={this.state.SubTab === 'rating' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','rating','')} to="rating">Rating</Link></li>
                                <li><Link className={this.state.SubTab === 'nestable' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','nestable','')} to="nestable">Nestable</Link></li>
                                <li><Link className={this.state.SubTab === 'alertify' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','alertify','')} to="alertify">Alertify</Link></li>
                                <li><Link className={this.state.SubTab === 'rangeslider' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','rangeslider','')} to="rangeslider">Range Slider</Link></li>
                                <li><Link className={this.state.SubTab === 'sessiontimeout' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','sessiontimeout','')} to="sessiontimeout">Session Timeout</Link></li>
                            </ul>
                        </li>

                        <li  className={this.state.form_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#"  onClick={()=> this.setState({ form_menu: !this.state.form_menu, dashboard_menu : false, email_menu : false, ui_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) }  className={this.state.Tab === 'form' ? 'waves-effect active':'waves-effect'}><i className="mdi mdi-clipboard-outline"></i><span> Forms <span className="badge badge-pill badge-success pull-right">9</span> </span></Link>
                            <ul className="list-unstyled"  style={{display: this.state.form_menu ? 'block' : 'none' }}>
                                <li><Link className={this.state.SubTab === 'form_elements' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'form','form_elements','')} to="form_elements">Form Elements</Link></li>
                                <li><Link className={this.state.SubTab === 'form_validation' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'form','form_validation','')} to="form_validation">Form Validation</Link></li>
                                <li><Link className={this.state.SubTab === 'form_advanced' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'form','form_advanced','')} to="form_advanced">Form Advanced</Link></li>
                                <li><Link className={this.state.SubTab === 'form_wizard' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'form','form_wizard','')} to="form_wizard">Form Wizard</Link></li>
                                <li><Link className={this.state.SubTab === 'form_editors' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'form','form_editors','')} to="form_editors">Form Editors</Link></li>
                                <li><Link className={this.state.SubTab === 'form_uploads' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'form','form_uploads','')} to="form_uploads">Form File Upload</Link></li>
                                <li><Link className={this.state.SubTab === 'form_mask' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'form','form_mask','')} to="form_mask">Form Mask</Link></li>
                                <li><Link className={this.state.SubTab === 'form_summernote' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'form','form_summernote','')} to="form_summernote">Summernote</Link></li>
                                <li><Link className={this.state.SubTab === 'form_xeditable' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'form','form_xeditable','')} to="form_xeditable">Form Xeditable</Link></li>
                            </ul>
                        </li>

                        <li  className={this.state.chart_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ chart_menu: !this.state.chart_menu,dashboard_menu : false, email_menu : false, ui_menu: false,form_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) }  className={this.state.Tab === 'chart' ? 'waves-effect active':'waves-effect'}><i className="mdi mdi-chart-line"></i><span> Charts <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                            <ul className="list-unstyled" style={{display: this.state.chart_menu ? 'block' : 'none' }}>
                                <li><Link className={this.state.SubTab === 'charts_easy' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'chart','charts_easy','')} to="charts_easy">Easy Chart</Link></li>
                                <li><Link className={this.state.SubTab === 'chartjs' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'chart','chartjs','')} to="chartjs">ChartJs Chart</Link></li>
                                <li><Link className={this.state.SubTab === 'apexchart' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'chart','apexchart','')} to="apexchart">Apex Chart</Link></li>
                                <li><Link className={this.state.SubTab === 'sparkline' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'chart','sparkline','')} to="sparkline">SparkLine Chart</Link></li>
                            </ul>
                        </li>

                        <li className={this.state.table_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ table_menu: !this.state.table_menu,dashboard_menu : false, email_menu : false, ui_menu: false,form_menu: false,chart_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) }  className={this.state.Tab === 'table' ? 'waves-effect active-menu':'waves-effect'}><i className="mdi mdi-format-list-bulleted-type"></i><span> Tables <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                            <ul className="list-unstyled" style={{display: this.state.table_menu ? 'block' : 'none' }}>
                                <li><Link className={this.state.SubTab === 'tables_basic' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'table','tables_basic','')} to="tables_basic">Basic Tables</Link></li>
                                <li><Link className={this.state.SubTab === 'tables_datatable' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'table','tables_datatable','')} to="tables_datatable">Data Table</Link></li>
                                <li><Link className={this.state.SubTab === 'tables_responsive' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'table','tables_responsive','')} to="tables_responsive">Responsive Table</Link></li>
                                <li><Link className={this.state.SubTab === 'tables_editable' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'table','tables_editable','')} to="tables_editable">Editable Table</Link></li>
                            </ul>
                        </li>

                        <li className={this.state.icon_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ icon_menu: !this.state.icon_menu,dashboard_menu : false, email_menu : false, ui_menu: false,form_menu: false,chart_menu: false,table_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false}) }  className={this.state.Tab === 'icon' ? 'waves-effect active-menu':'waves-effect'}><i className="mdi mdi-album"></i> <span> Icons  <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span></span> </Link>
                            <ul className="list-unstyled" style={{display: this.state.icon_menu ? 'block' : 'none' }}>
                                <li><Link  className={this.state.SubTab === 'icons_material' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'icon','icons_material','')} to="icons_material">Material Design</Link></li>
                                <li><Link  className={this.state.SubTab === 'icons_ion' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'icon','icons_ion','')} to="icons_ion">Ion Icons</Link></li>
                                <li><Link  className={this.state.SubTab === 'icons_fontawesome' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'icon','icons_fontawesome','')} to="icons_fontawesome">Font Awesome</Link></li>
                                <li><Link  className={this.state.SubTab === 'icons_themify' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'icon','icons_themify','')} to="icons_themify">Themify Icons</Link></li>
                                <li><Link  className={this.state.SubTab === 'icons_dripicons' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'icon','icons_dripicons','')} to="icons_dripicons">Dripicons</Link></li>
                                <li><Link  className={this.state.SubTab === 'icons_typicons' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'icon','icons_typicons','')} to="icons_typicons">Typicons I_ons</Link></li>
                                <li><Link  className={this.state.SubTab === 'icons_weather' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'icon','icons_weather','')} to="icons_weather">Weather Icons</Link></li>
                                <li><Link  className={this.state.SubTab === 'icons_mobirise' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'icon','icons_mobirise','')} to="icons_mobirise">Mobirise Icons</Link></li>
                            </ul>
                        </li>

                        <li className={this.state.map_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ map_menu: !this.state.map_menu,dashboard_menu : false, email_menu : false, ui_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) }  className={this.state.Tab === 'map' ? 'waves-effect active-menu':'waves-effect'}><i className="mdi mdi-google-maps"></i><span> Maps <span className="badge badge-pill badge-danger pull-right">2</span> </span></Link>
                            <ul className="list-unstyled" style={{display: this.state.map_menu ? 'block' : 'none' }}>
                                <li><Link className={this.state.SubTab === 'maps_google' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'map','maps_google','')}  to="maps_google"> Google Map</Link></li>
                                <li><Link className={this.state.SubTab === 'maps_vector' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'map','maps_vector','')}  to="maps_vector"> Vector Map</Link></li>
                            </ul>
                        </li>

                        <li className="menu-title">Extras</li>

                        <li className={this.state.auth_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ auth_menu: !this.state.auth_menu,dashboard_menu : false, email_menu : false, ui_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) } className="waves-effect"><i className="mdi mdi-account-location"></i><span> Authentication <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                            <ul className="list-unstyled"  style={{display: this.state.auth_menu ? 'block' : 'none' }}>
                                <li><Link to="pages_login">Login</Link></li>
                                <li><Link to="pages_register">Register</Link></li>
                                <li><Link to="pages_recoverpw">Recover Password</Link></li>
                                <li><Link to="pages_lock_screen">Lock Screen</Link></li>
                                <li><Link to="pages_login_2">Login 2</Link></li>
                                <li><Link to="pages_register_2">Register 2</Link></li>
                                <li><Link to="pages_recoverpw_2">Recover Password 2</Link></li>
                                <li><Link to="pages_lock_screen_2">Lock Screen 2</Link></li>
                            </ul>
                        </li>

                        <li className={this.state.extra_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ extra_menu: !this.state.extra_menu,dashboard_menu : false, email_menu : false, ui_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,eco_menu: false,emt_menu: false }) }  className={this.state.Tab === 'extra' ? 'waves-effect active-menu':'waves-effect'}><i className="mdi mdi-google-pages"></i><span> Extra Pages <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                            <ul className="list-unstyled"  style={{display: this.state.extra_menu ? 'block' : 'none' }}>
                                <li><Link className={this.state.SubTab === 'pages_timeline' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'extra','pages_timeline','')}  to="pages_timeline">Timeline</Link></li>
                                <li><Link className={this.state.SubTab === 'pages_invoice' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'extra','pages_invoice','')}  to="pages_invoice">Invoice</Link></li>
                                <li><Link className={this.state.SubTab === 'pages_directory' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'extra','pages_directory','')}  to="pages_directory">Directory</Link></li>
                                <li><Link className={this.state.SubTab === 'pages_blank' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'extra','pages_blank','')}  to="pages_blank">Blank Page</Link></li>
                                <li><Link className={this.state.SubTab === 'pages_400' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'extra','pages_400','')}  to="pages_400">Error 404</Link></li>
                                <li><Link className={this.state.SubTab === 'pages_500' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'extra','pages_500','')}  to="pages_500">Error 500</Link></li>
                                <li><Link className={this.state.SubTab === 'pages_pricing' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'extra','pages_pricing','')}  to="pages_pricing">Pricing</Link></li>
                                <li><Link className={this.state.SubTab === 'pages_gallery' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'extra','pages_gallery','')}  to="pages_gallery">Gallery</Link></li>
                                <li><Link className={this.state.SubTab === 'pages_maintenance' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'extra','pages_maintenance','')}  to="pages_maintenance">Maintenance</Link></li>
                                <li><Link className={this.state.SubTab === 'pages_coming_soon' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'extra','pages_coming_soon','')}  to="pages_coming_soon">Coming Soon</Link></li>
                            </ul>
                        </li>

                        <li className={this.state.eco_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ eco_menu: !this.state.eco_menu,dashboard_menu : false, email_menu : false, ui_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,emt_menu: false }) }   className={this.state.Tab === 'eco' ? 'waves-effect active-menu':'waves-effect'}><i className="mdi mdi-cart-outline"></i><span> Ecommerce <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                            <ul className="list-unstyled" style={{display: this.state.eco_menu ? 'block' : 'none' }}>
                                <li><Link className={this.state.SubTab === 'ecommerce_product_list' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','ecommerce_product_list','')}  to="ecommerce_product_list">Product List</Link></li>
                                <li><Link className={this.state.SubTab === 'ecommerce_product_grid' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','ecommerce_product_grid','')}  to="ecommerce_product_grid">Product Grid</Link></li>
                                <li><Link className={this.state.SubTab === 'ecommerce_order_history' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','ecommerce_order_history','')}  to="ecommerce_order_history">Order History</Link></li>
                                <li><Link className={this.state.SubTab === 'ecommerce_customers' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','ecommerce_customers','')}  to="ecommerce_customers">Customers</Link></li>
                                <li><Link className={this.state.SubTab === 'ecommerce_product_edit' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','ecommerce_product_edit','')}  to="ecommerce_product_edit">Product Edit</Link></li>
                            </ul>
                        </li>

                        <li>
                            <a href="/" className="waves-effect" target="_blank"><i className="mdi mdi-airplane"></i><span> Front End </span></a>
                        </li>

                        <li className={this.state.emt_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ emt_menu: !this.state.emt_menu,dashboard_menu : false, email_menu : false, ui_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false }) }  className={this.state.Tab === 'emt' ? 'waves-effect active-menu':'waves-effect'}><i className="mdi mdi-flask-outline"></i><span> Email Templates <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                            <ul className="list-unstyled"  style={{display: this.state.emt_menu ? 'block' : 'none' }}>
                                <li><Link  className={this.state.SubTab === 'email_templates_basic' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'emt','email_templates_basic','')} to="email_templates_basic">Basic Action Email</Link></li>
                                <li><Link  className={this.state.SubTab === 'email_templates_alert' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'emt','email_templates_alert','')} to="email_templates_alert">Alert Email</Link></li>
                                <li><Link  className={this.state.SubTab === 'email_templates_billing' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'emt','email_templates_billing','')} to="email_templates_billing">Billing Email</Link></li>
                            </ul>
                        </li>

                        <li className="menu-title">Help & Support</li>

                        <li>
                            <Link to="pages_faq" className={this.state.Tab === 'faq' ? 'waves-effect active-menu':'waves-effect'} onClick={this.setActiveTab.bind(this, 'faq','','')}><i className="mdi mdi-help-circle"></i><span> FAQ </span></Link>
                        </li>

                        <li>
                            <Link to="pages_contact" className={this.state.Tab === 'contact' ? 'waves-effect active-menu':'waves-effect'} onClick={this.setActiveTab.bind(this, 'contact','','')}><i className="mdi mdi-headset"></i><span> Contact <span className="badge badge-pill badge-warning pull-right">3</span> </span></Link>
                        </li>

                        <li>
                            <Link to="#" className="waves-effect"><i className="mdi mdi-file-document-box"></i><span> Documentation </span></Link>
                        </li>
                    </ul>
                </div>
              
                <div className="clearfix"></div>
                </PerfectScrollbar>
            </div> 
           
        </div>
        );
    }
}

export default withRouter(sidebar);