import React from 'react';

const Doctor = ({ name, getName }) => {

  return (
    <div onClick={() => getName(name)}>
      <h3>{name}</h3>
    </div>
  )
}

export default Doctor;