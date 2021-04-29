import React, {useState, useEffect}  from 'react';
import Doctor from './doctor.jsx';
import Appointment from './appointment.jsx';
import axios from 'axios';

const App = () => {

  const [physicians, setPhysicians] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState('')

  useEffect(() => {
    axios.get('/physicians')
      .then(docs => setPhysicians(docs.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
  }, [physicians]);

  const getName = (name) => {
    console.log(name);
    axios.get('/appointments', { params: { name } })
      .then(appts => setAppointments(appts.data))
      .catch(err => console.log('error'));
  };

  const buildDocs = () => {
    let result = physicians.map((name) => {
      return <Doctor name={name} getName={getName}/>
    });
    return result;
  };

  const buildAppts = () => {
    return appointments.map((appt) => {
      return <Appointment time={appt[0]} type={appt[1]} />
    });
  }

  return (
    <div id='docs'>
      <div>
        <h1>Doctors</h1>
        <ul>
          {buildDocs()}
        </ul>
      </div>
      <div>
        {buildAppts()}
      </div>
    </div>
  )
};

export default App;