'use client'
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class CalendarComponent extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                selectedSlot: null,
                eventTitle: ''
            };
            this.state = {
                selectedSlot: null,
                eventTitle: '',
                events: []
            };
            this.handleSelectSlot = this.handleSelectSlot.bind(this);
            this.handleTitleChange = this.handleTitleChange.bind(this);
            this.handleCreateEvent = this.handleCreateEvent.bind(this);
        }

        handleSelectSlot(slotInfo) {
            this.setState({
                selectedSlot: slotInfo
            });
        }

        handleTitleChange(event) {
            this.setState({
                eventTitle: event.target.value
            });
        }

        handleCreateEvent() {
            const { selectedSlot, eventTitle } = this.state;
            if (selectedSlot && eventTitle) {
                const newEvent = {
                    title: eventTitle,
                    start: selectedSlot.start,
                    end: selectedSlot.end
                };
                // Add newEvent to the events array
                // You can use a state variable or a Redux store to manage the events array
                // For example, if you're using a state variable:
                // const { events } = this.state;
                // this.setState({
                //     events: [...events, newEvent],
                //     selectedSlot: null,
                //     eventTitle: ''
                // });
            }
        }

        render() {
            const { selectedSlot, eventTitle } = this.state;
            return (
                <div className="w-full max-w-md mx-auto">
                    <Calendar
                        localizer={localizer}
                        events={[]}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                        selectable
                        onSelectSlot={this.handleSelectSlot}
                    />
                    {selectedSlot && (
                        <div className="mt-4">
                            <label className="block font-bold mb-2" htmlFor="eventTitle">
                                Event Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="eventTitle"
                                type="text"
                                placeholder="Enter event title"
                                value={eventTitle}
                                onChange={this.handleTitleChange}
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                                onClick={this.handleCreateEvent}
                            >
                                Create Event
                            </button>
                        </div>
                    )}
                </div>
            );
        }
    }


export default CalendarComponent;
