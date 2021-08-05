import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import * as $ from 'jquery';


const div ={
    clear:'both'
};

class Calendar extends Component{

    state={
    };
    constructor(props) {
        const date = new Date();
        const d = date.getDate();
        const m = date.getMonth();
        const y = date.getFullYear();
        super(props)
        this.state = {
            events:[
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1)
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d-5, 18, 0),
                    allDay: false,
                    className: 'bg-teal'
                },
                {
                    id: 999,
                    title: 'Meeting',
                    start: new Date(y, m, d-3, 16, 0),
                    allDay: false,
                    className: 'bg-purple'
                },
                {
                    id: 999,
                    title: 'Meeting',
                    start: new Date(y, m, d+4, 16, 0),
                    allDay: false,
                    className: 'bg-warning'
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                    className: 'bg-danger'
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    className: 'bg-success'
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d+1, 19, 0),
                    end: new Date(y, m, d+1, 22, 30),
                    allDay: false,
                    className: 'bg-brown'
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/',
                    className: 'bg-pink'
                },
            ]
        }
      }
    
    componentDidMount() {
        const  calendar = $('#calendar').fullCalendar({
                header: {
                    right: 'prev,next today',
                    left: 'title',
                    center: 'month,agendaWeek,agendaDay'
                },
                firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
                selectable: true,
                defaultView: 'month',
                axisFormat: 'h:mm',
                editable: true,
                allDaySlot: false,
                selectHelper: true,
                select: function(start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) 
                {
                  calendar.fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true // make the event "stick"
                  );
                }
            calendar.fullCalendar('unselect');
        },
                droppable: true, // this allows things to be dropped onto the calendar
                drop: function(date, allDay) { // this function is called when something is dropped

                    var originalEventObject = $(this).data('eventObject');
                    var copiedEventObject = $.extend({}, originalEventObject);
                    copiedEventObject.start = date;
                    copiedEventObject.allDay = allDay;
                    $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);      
                   if ($('#drop-remove').is(':checked')) {
                        // if so, remove the element from the "Draggable Events" list
                        $(this).remove();
                    }
                },
                events:this.state.events,
        })
      }


render(){
    return(
           <AUX>
			  <div className="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                       <div id='calendar'></div>
                                         <div style={div}></div>
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

export default Calendar;   