import React , {Component, useState } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


 



const email_read = () => {

    const [drp_button, setdrp_button] = useState(false)
    const [drp_button1, setdrp_button1] = useState(false)
    const [drp_button2, setdrp_button2] = useState(false)


    return (
        <>
        <div className="page-content-wrapper">
              <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="email-leftbar">
                            <Link to="email_compose" className="btn btn-danger btn-rounded btn-custom btn-block waves-effect waves-light">Compose</Link>

                            <div className="mail-list m-t-20">
                                <a href="#" className="active">Inbox <span className="ml-1">(18)</span></a>
                                <a href="#">Starred</a>
                                <a href="#">Important</a>
                                <a href="#">Draft</a>
                                <a href="#">Sent Mail</a>
                                <a href="#">Trash</a>
                            </div>

                            <h6 className="m-t-30">Labels</h6>

                            <div className="mail-list m-t-20">
                                <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-info float-right mt-1 m-l-10"></span>Theme Support</a>
                                <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-warning float-right mt-1 m-l-10"></span>Freelance</a>
                                <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-purple float-right mt-1 m-l-10"></span>Social</a>
                                <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-pink float-right mt-1 m-l-10"></span>Friends</a>
                                <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-success float-right mt-1 m-l-10"></span>Family</a>
                            </div>

                            <h6 className="m-t-30">Chat</h6>

                            <div className="m-t-20">
                                <a href="#" className="media">
                                    <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height="36" />
                                    <div className="media-body chat-user-box">
                                        <p className="user-title m-0">Scott Median</p>
                                        <p className="text-muted">Hello</p>
                                    </div>
                                </a>

                                <a href="#" className="media">
                                    <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image" height="36" />
                                    <div className="media-body chat-user-box">
                                        <p className="user-title m-0">Julian Rosa</p>
                                        <p className="text-muted">What about our next..</p>
                                    </div>
                                </a>

                                <a href="#" className="media">
                                    <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-4.jpg" alt="Generic placeholder image" height="36" />
                                    <div className="media-body chat-user-box">
                                        <p className="user-title m-0">David Medina</p>
                                        <p className="text-muted">Yeah everything is fine</p>
                                    </div>
                                </a>

                                <a href="#" className="media">
                                    <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-6.jpg" alt="Generic placeholder image" height="36" />
                                    <div className="media-body chat-user-box">
                                        <p className="user-title m-0">Jay Baker</p>
                                        <p className="text-muted">Wow that's great</p>
                                    </div>
                                </a>

                            </div>
                        </div>

                        <div className="email-rightbar">
                            <div className="btn-toolbar" role="toolbar">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-inbox"></i></button>
                                    <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-exclamation-circle"></i></button>
                                    <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-trash-o"></i></button>
                                </div>
                                <div className="btn-group ml-1">

                                <Dropdown isOpen={drp_button}  toggle={() => setdrp_button(!drp_button)}>
                                                <DropdownToggle className="btn btn-primary wthoutflag" caret>
                                                <i className="fa fa-folder"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                <DropdownItem>Updates</DropdownItem>
                                                <DropdownItem>Social</DropdownItem>
                                                <DropdownItem>Team Manage</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>

                                            </div>
                                            <div className="btn-group ml-1">
                                            <Dropdown isOpen={drp_button1}  toggle={() => setdrp_button(!drp_button1)}>
                                                <DropdownToggle className="btn btn-primary wthoutflag" caret>
                                                <i className="fa fa-tag"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                <DropdownItem>Updates</DropdownItem>
                                                <DropdownItem>Social</DropdownItem>
                                                <DropdownItem>Team Manage</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>

                                            </div>

                                            <div className="btn-group ml-1">
                                            <Dropdown isOpen={drp_button2}  toggle={() => setdrp_button(!drp_button2)}>
                                                <DropdownToggle className="btn btn-primary wthoutflag" caret>
                                                More
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                <DropdownItem>Mark as Unread</DropdownItem>
                                                <DropdownItem>Mark as Important</DropdownItem>
                                                <DropdownItem>Add to Tasks</DropdownItem>
                                                <DropdownItem>Add Star</DropdownItem>
                                                <DropdownItem>Mute</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                            </div>
                            </div>


                            <div className="card m-t-20">
                                <div className="card-body">

                                    <div className="media m-b-30">
                                        <img className="d-flex mr-3 rounded-circle thumb-md" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h4 className="font-14 m-0">Humberto D. Champion</h4>
                                            <small className="text-muted">support@domain.com</small>
                                        </div>
                                    </div>

                                    <h4 className="mt-0 font-18">This Week's Top Stories</h4>

                                    <p>Dear Lorem Ipsum,</p>
                                    <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus
                                        convallis.</p>
                                    <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia
                                        lacus, vel tincidunt mi nibh sit amet lorem.</p>
                                    <p>Sincerly,</p>
                                    <hr/>

                                    <div className="row">
                                        <div className="col-lg-2 col-md-4">
                                            <div className="card m-b-20">
                                                <img className="card-img-top img-fluid" src="assets/images/small/img-4.jpg" alt="Card image cap" />
                                                <div className="p-t-10 p-b-10 text-center">
                                                    <a href="" className="text-muted font-600">Download</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-4">
                                            <div className="card m-b-20">
                                                <img className="card-img-top img-fluid" src="assets/images/small/img-5.jpg" alt="Card image cap" />
                                                <div className="p-t-10 p-b-10 text-center">
                                                    <a href="" className="text-muted font-600">Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to="#" className="btn btn-secondary waves-effect m-t-30"><i className="mdi mdi-reply"></i> Reply</Link>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default email_read;   