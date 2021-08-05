import React , {Component, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const email_inbox = () => {

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

                        <div className="email-rightbar mb-3">
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
                                <ul className="message-list">
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk19" />
                                                    <label htmlFor="chk19" className="toggle"></label>
                                                </div>
                                                <p className="title">Peter, me (3)</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject">Hello &nbsp;–&nbsp; <span className="teaser">Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)</span>
                                                </div>
                                                <div className="date">Mar. 6</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk20" />
                                                    <label htmlFor="chk20" className="toggle"></label>
                                                </div>
                                                <p className="title">me, Susanna (7)</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject"><span className="badge-warning badge mr-2">Freelance</span>Since you asked... and i'm
                                                    inconceivably bored at the train station &nbsp;–&nbsp;
                                                    <span className="teaser">Alright thanks. I'll have to re-book that somehow, i'll get back to you.</span>
                                                </div>
                                                <div className="date">Mar. 6</div>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk6" />
                                                    <label htmlFor="chk6" className="toggle"></label>
                                                </div>
                                                <p className="title">Web Support Dennis</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject">Re: New mail settings &nbsp;–&nbsp;
                                                    <span className="teaser">Will you answer him asap?</span>
                                                </div>
                                                <div className="date">Mar 7</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk7" />
                                                    <label htmlFor="chk7" className="toggle"></label>
                                                </div>
                                                <p className="title">me, Peter (2)</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject"><span className="badge-info badge mr-2">Support</span>Off on Thursday &nbsp;–&nbsp;
                                                    <span className="teaser">Eff that place, you might as well stay here with us instead! Sent from my iPhone 4 &gt; 4 mar 2014 at 5:55 pm</span>
                                                </div>
                                                <div className="date">Mar 4</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk8" />
                                                    <label htmlFor="chk8" className="toggle"></label>
                                                </div>
                                                <p className="title">Medium</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject"><span className="badge-purple badge mr-2">Social</span>This Week's Top Stories &nbsp;–&nbsp;
                                                    <span className="teaser">Our top pick for you on Medium this week The Man Who Destroyed America’s Ego</span>
                                                </div>
                                                <div className="date">Feb 28</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk9" />
                                                    <label htmlFor="chk9" className="toggle"></label>
                                                </div>
                                                <p className="title">Death to Stock</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject">Montly High-Res Photos &nbsp;–&nbsp;
                                                    <span className="teaser">To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.</span>
                                                </div>
                                                <div className="date">Feb 28</div>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="unread">
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk3" />
                                                    <label htmlFor="chk3" className="toggle"></label>
                                                </div>
                                                <p className="title">Randy, me (5)</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject"><span className="badge-success badge mr-2">Family</span>Last pic over my village &nbsp;–&nbsp;
                                                    <span className="teaser">Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!</span>
                                                </div>
                                                <div className="date">5:01 am</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk4" />
                                                    <label htmlFor="chk4" className="toggle"></label>
                                                </div>
                                                <p className="title">Andrew Zimmer</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject">Mochila Beta: Subscription Confirmed
                                                    &nbsp;–&nbsp; <span className="teaser">You've been confirmed! Welcome to the ruling className of the inbox. For your records, here is a copy of the information you submitted to us...</span>
                                                </div>
                                                <div className="date">Mar 8</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk5" />
                                                    <label htmlFor="chk5" className="toggle"></label>
                                                </div>
                                                <p className="title">Infinity HR</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject">Sveriges Hetaste sommarjobb &nbsp;–&nbsp;
                                                    <span className="teaser">Hej Nicklas Sandell! Vi vill bjuda in dig till "First tour 2014", ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.</span>
                                                </div>
                                                <div className="date">Mar 8</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk10" />
                                                    <label htmlFor="chk10" className="toggle"></label>
                                                </div>
                                                <p className="title">Revibe</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject"><span className="badge-pink badge mr-2">Friends</span>Weekend on Revibe &nbsp;–&nbsp;
                                                    <span className="teaser">Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!</span>
                                                </div>
                                                <div className="date">Feb 27</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk11" />
                                                    <label htmlFor="chk11" className="toggle"></label>
                                                </div>
                                                <p className="title">Erik, me (5)</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject">Regarding our meeting &nbsp;–&nbsp;
                                                    <span className="teaser">That's great, see you on Thursday!</span>
                                                </div>
                                                <div className="date">Feb 24</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk12" />
                                                    <label htmlFor="chk12" className="toggle"></label>
                                                </div>
                                                <p className="title">KanbanFlow</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject"><span className="badge-purple badge mr-2">Social</span>Task assigned: Clone ARP's website
                                                    &nbsp;–&nbsp; <span className="teaser">You have been assigned a task by Alex@Work on the board Web.</span>
                                                </div>
                                                <div className="date">Feb 24</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk13" />
                                                    <label htmlFor="chk13" className="toggle"></label>
                                                </div>
                                                <p className="title">Tobias Berggren</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject">Let's go fishing! &nbsp;–&nbsp;
                                                    <span className="teaser">Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.</span>
                                                </div>
                                                <div className="date">Feb 23</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk14" />
                                                    <label htmlFor="chk14" className="toggle"></label>
                                                </div>
                                                <p className="title">Charukaw, me (7)</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject">Hey man &nbsp;–&nbsp; <span className="teaser">Nah man sorry i don't. Should i get it?</span>
                                                </div>
                                                <div className="date">Feb 23</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="unread">
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk15" />
                                                    <label htmlFor="chk15" className="toggle"></label>
                                                </div>
                                                <p className="title">me, Peter (5)</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject"><span className="badge-info badge mr-2">Support</span>Home again! &nbsp;–&nbsp; <span className="teaser">That's just perfect! See you tomorrow.</span>
                                                </div>
                                                <div className="date">Feb 21</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk16" />
                                                    <label htmlFor="chk16" className="toggle"></label>
                                                </div>
                                                <p className="title">Stack Exchange</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject">1 new items in your Stackexchange inbox
                                                    &nbsp;–&nbsp; <span className="teaser">The following items were added to your Stack Exchange global inbox since you last checked it.</span>
                                                </div>
                                                <div className="date">Feb 21</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk17" />
                                                    <label htmlFor="chk17" className="toggle"></label>
                                                </div>
                                                <p className="title">Google Drive Team</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject">You can now use your storage in Google
                                                    Drive &nbsp;–&nbsp; <span className="teaser">Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.</span>
                                                </div>
                                                <div className="date">Feb 20</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <input type="checkbox" id="chk18" />
                                                    <label htmlFor="chk18" className="toggle"></label>
                                                </div>
                                                <p className="title">me, Susanna (11)</p><span className="star-toggle fa fa-star-o"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <div className="subject">Train/Bus &nbsp;–&nbsp; <span className="teaser">Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.</span>
                                                </div>
                                                <div className="date">Feb 19</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div> 

                            <div className="row m-t-20">
                                <div className="col-7">
                                    Showing 1 - 20 of 1,524
                                </div>
                                <div className="col-5">
                                    <div className="btn-group pull-right">
                                        <button type="button" className="btn btn-sm btn-success waves-effect"><i className="fa fa-chevron-left"></i></button>
                                        <button type="button" className="btn btn-sm btn-success waves-effect"><i className="fa fa-chevron-right"></i></button>
                                    </div>
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
export default email_inbox;   