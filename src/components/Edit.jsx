import React, { useState,useEffect } from 'react'
import './AddEmployee.css'
import {Link, useNavigate} from 'react-router-dom'
import uuid from 'react-uuid'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const Edit = () => {
    const [idEmp,setIdEmp]=useState('')
    const [unameEmp,setUnameEmp]=useState('')
    const [ageEmp,setAgeEmp]=useState('')
    const [desgEmp,setDesgEmp]=useState('')
    const [salaryEmp,setSalaryEmp]=useState(0)
    const [mobileEmp,setMobileEmp]=useState('')
    const [mailEmp,setMailEmp]=useState('')
    const [imageEmp,setImageEmp]=useState('')
  
    const params=useParams()

    const location=useNavigate()

    const fetchEmployee=async ()=>{
        const result= await axios.get('http://localhost:8000/get-an-employee/'+params.id)
        console.log(result.data.employee);

        setIdEmp(result.data.employee.id)
        setUnameEmp(result.data.employee.uname)
        setAgeEmp(result.data.employee.age)
        setDesgEmp(result.data.employee.desg)
        setSalaryEmp(result.data.employee.salary)
        setMobileEmp(result.data.employee.mobile)
        setMailEmp(result.data.employee.mail)
        setImageEmp(result.data.employee.image)

    }

    const handleUpdate=async (e)=>{
        e.preventDefault()
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
        const result = await axios.post('http://localhost:8000/update-employees',body)
        alert(result.data.message)
        location('/')
    }


    useEffect(()=>{
        fetchEmployee()
    },[])
  
    
  
    return (
          <div className='formwrap'>
        <form action="">
          <h1>Update Employees</h1>
  
          <div className="inputdiv">
          <div>UserName</div>
          <input type="text" placeholder='enter username' value={unameEmp} onChange={(e)=>setUnameEmp(e.target.value)}/>
          </div>
  
          <div className="inputdiv">
          <div>Age</div>
          <input type="text" placeholder='enter age' value={ageEmp}  onChange={(e)=>setAgeEmp(e.target.value)}/>
          </div>
  
          <div className="inputdiv">
          <div>Mobile</div>
          <input  type="text"  placeholder='enter mobile' value={mobileEmp} onChange={(e)=>setMobileEmp(e.target.value)}/>
          </div>
  
          <div className="inputdiv">
          <div>Designation</div>
          <input type="text"  placeholder='enter designation'
          value={desgEmp} onChange={(e)=>setDesgEmp(e.target.value)}/>
          </div>
  
          <div className="inputdiv">
          <div>Email</div>
          <input type="text"  placeholder='enter mail' value={mailEmp} onChange={(e)=>setMailEmp(e.target.value)}/>
          </div>
  
          <div className="inputdiv">
          <div>Salary</div>
          <input type="text"  placeholder='enter salary' value={salaryEmp}  onChange={(e)=>setSalaryEmp(e.target.value)}/>
          </div>
  
          <div className="inputdiv">
          <div>Image</div>
          <input type="text"  placeholder='enter image url'
          value={imageEmp} onChange={(e)=>setImageEmp(e.target.value)}/>
          </div>
  
          <div className='buttons'>
          <button className='add' onClick={(e)=>handleUpdate(e)}>Update</button>
              <Link to={'/'}>
              <button className='close'>close</button>
              </Link>
          </div>
          
        </form>
        </div>
    )
  }

export default Edit
