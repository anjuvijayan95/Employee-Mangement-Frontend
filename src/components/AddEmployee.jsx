import React, { useState,useEffect } from 'react'
import './AddEmployee.css'
import {Link, useNavigate} from 'react-router-dom'
import uuid from 'react-uuid'
import axios from 'axios'


const AddEmployee = () => {

  const [idEmp,setIdEmp]=useState('')
  const [unameEmp,setUnameEmp]=useState('')
  const [ageEmp,setAgeEmp]=useState('')
  const [desgEmp,setDesgEmp]=useState('')
  const [salaryEmp,setSalaryEmp]=useState(0)
  const [mobileEmp,setMobileEmp]=useState('')
  const [mailEmp,setMailEmp]=useState('')
  const [imageEmp,setImageEmp]=useState('')


  useEffect(()=>{
    setIdEmp(uuid().slice(0,3))
  })

  const location=useNavigate()

  // To add data to backend
  const handleAddEmployee=async(e)=>{
    e.preventDefault()
    setIdEmp(uuid().slice(0,3))
    const body={
      idEmp,
      unameEmp,
      ageEmp,
      desgEmp,
      salaryEmp,
      mobileEmp,
      mailEmp,
      imageEmp
    }
    const result = await axios.post('http://localhost:8000/add-employees',body)
    console.log(result);
    location('/')
  }

  return (
        <div className='formwrap'>
      <form action="">
        <h1>Add Employees</h1>

        <div className="inputdiv">
        <div>UserName</div>
        <input onChange={(e)=>setUnameEmp(e.target.value)} type="text" placeholder='enter username'/>
        </div>

        <div className="inputdiv">
        <div>Age</div>
        <input onChange={(e)=>setAgeEmp(e.target.value)} type="text" placeholder='enter age' />
        </div>

        <div className="inputdiv">
        <div>Mobile</div>
        <input onChange={(e)=>setMobileEmp(e.target.value)} type="text"  placeholder='enter mobile'/>
        </div>

        <div className="inputdiv">
        <div>Designation</div>
        <input onChange={(e)=>setDesgEmp(e.target.value)} type="text"  placeholder='enter designation'/>
        </div>

        <div className="inputdiv">
        <div>Email</div>
        <input onChange={(e)=>setMailEmp(e.target.value)} type="text"  placeholder='enter mail'/>
        </div>

        <div className="inputdiv">
        <div>Salary</div>
        <input onChange={(e)=>setSalaryEmp(e.target.value)} type="text"  placeholder='enter salary'/>
        </div>

        <div className="inputdiv">
        <div>Image</div>
        <input onChange={(e)=>setImageEmp(e.target.value)} type="text"  placeholder='enter image url'/>
        </div>

        <div className='buttons'>
        <button className='add' onClick={(e)=>handleAddEmployee(e)}>Add</button>
            <Link to={'/'}>
            <button className='close'>close</button>
            </Link>
        </div>
        
      </form>
      </div>
  )
}

export default AddEmployee
