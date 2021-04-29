import React from 'react';

const Appointment = ({ time, type }) => {

  return (
    <div>
      <h3>{`Time: ${time}  , Type: ${type}`}</h3>
    </div>
  )
}

export default Appointment;