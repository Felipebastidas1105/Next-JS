import React from 'react';

const Event = ({ event, start, end, onClick }) => {
  return (
    <div
      className="bg-blue-500 text-white p-2 rounded cursor-pointer"
      onClick={() => onClick({ event })}
    >
      <div>{event.title}</div>
      <div>
        {new Date(start).toLocaleTimeString()} -{' '}
        {new Date(end).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Event;