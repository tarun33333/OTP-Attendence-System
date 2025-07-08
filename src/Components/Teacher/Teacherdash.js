import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Authcontext } from '../Auth';


export default function TeacherDashboard() {
  const [date, setDate] = useState('');
  const {user,login,logout}=useContext(Authcontext);
  const[schedule,setschedule]=useState([]);


  useEffect(()=>{
      axios.get('http://localhost:3001/teachers-schedule')
      .then(res => {
        const s= res.data.filter(x=> user[0]["t-id"] === x["t-id"])
        setschedule(s)
      })
  },[])

  return (
    <div className="dashboard">
      <h2>Welcome,{user[0]["name"]}!☺️</h2>

      <div className="filters">
        <label>Date: </label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <div className="class-list">
        {schedule.map(x => (
          <div key={x["t-id"]} className="class-card">
            <h3>{x.dept}</h3>
            <h4>period:</h4><h3>{x.period}</h3>
            <button  className="otp-button">Generate OTP</button>
          </div>
        ))}
      </div>
    </div>
  );
}
