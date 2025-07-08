import React, { useContext, useEffect, useState } from 'react'
import './styles.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Authcontext } from '../Auth';

export default function LoginT() {

    const[det,setdet]=useState({email:"",password:""});
    const[db,setdb]=useState([])
    const navi=useNavigate();
    const {user,login,logout}=useContext(Authcontext);

    const handlechange=(e)=>{

        const{name,value}=e.target;

        setdet(pre=>({...pre,[name]:value}))
    }

    useEffect(()=>{
        axios.get("http://localhost:3001/teachers")
        .then(res => {
            setdb(res.data);
    })
        .catch(err => console.log(err))
    }

    ,[])

    const handlelogin=(t)=>{
         t.preventDefault();
        const found= db.filter(x=>x.email===det.email && x.password===det.password)
        if(found.length !== 0){
          login(found)
          navi('/teacherdash')
        }
        else{
          alert("invalid user and password")
        }
    }

  return (
    <div className='mainbody'>

    
    <div className='loginpage' >
      <h1>Teacher Login</h1>
      <form className='login' onSubmit={handlelogin}>
        <label className=''>Username</label>
        <input type='email' value={det.email} placeholder='abc@gmail.com' name="email" onChange={(e)=>handlechange(e)}/><br></br>
        <label className=''>Password</label>
        <input type='password' value={det.password} placeholder='password' name="password" onChange={(e)=>handlechange(e)}/><br></br>
        <button type='submit' className='butsub'>Submit</button>
      </form><br></br>
        <p><Link to='/'>Are you Student?</Link></p>
    </div>
    </div>
  )
  
}
