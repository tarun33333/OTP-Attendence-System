import React, { useContext, useEffect, useState } from 'react'
import Auth, { Authcontext } from '../Auth'
import axios from 'axios'
import './styles.css';

export default function Studentdash() {

    const[data,setdata]=useState([])
    const{user,login,logout}=useContext(Authcontext)
    const[attendence,setattendence]=useState({"1":false ,"2":false,"3":false,"4":false,"5":false,'6':false,"7":false})
    useEffect(()=>{
        axios.get("http://localhost:3001/class-schedules")
        .then(res =>{
            const s=res.data.filter(x => x.classId==user[0].classId)
            setdata(s[0].schedule)
            console.log(data)
        })
    },[])
  return (
    <div className='student-dashboard'>
       <h1>Welcome, {user[0].name}!! ☺️</h1>
     
       <div className="student-class-list">
         {data.map(x => (
           <div key={x.period} className="student-class-card">
             <h3>{x.dept}</h3>
             <h4>Period: {x.period}</h4>
             <h4>Subject: {x.subject}</h4>
             <h3>{x.teacher}</h3>
             <button className="student-otp-button">OTP</button>
             {attendence["1"] && <h4>Present</h4>}
           </div>
         ))}
       </div>
    </div>
  )
}
