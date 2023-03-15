import React,{useEffect,useState} from 'react'
import './Admin.css'
// import {BiCategory} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {GiCalendarHalfYear} from 'react-icons/gi'
import {AiFillMail,AiFillPhone,AiFillEdit} from 'react-icons/ai'
import {RiMoneyDollarBoxFill} from 'react-icons/ri'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
// import {params} from 'react-router-dom'


const Admin = () => {

// const params=useParams()

const [allEmployees,setAllEmployees]=useState([])

const fetchData=async ()=>{
  const result=await axios.get('http://localhost:8000/get-employees')
  setAllEmployees(result.data.employees);
}

const filter=(desg)=>{
  console.log(allEmployees);
  setAllEmployees(allEmployees.filter(emp=>emp['desg']===desg))
}

useEffect(()=>{
  fetchData()
  filter()
},[])

const handleDeleteEmp=async(id)=>{
  const result=axios.delete('http://localhost:8000/delete-employees/'+id)
  alert((await result).data.message)
  fetchData()
}

  return (
    <div>
      <div className="wrapper">
        <div className="side">
            <div className="logo">
            <img src="https://images.vexels.com/media/users/3/229320/isolated/preview/3dbf158d77c22e31cee5eafbdcf5ce0f-square-gradient-logo.png" alt="" />
            </div>

            <div className="employee">
                <h3>Employees</h3>
                <h4 onClick={()=>setAllEmployees(allEmployees)}>All Employees</h4>
            </div>
            
            <div className="department">
                <h3>Department</h3>
                <h4 onClick={()=>filter("React Developer")}>React Developer</h4>
                <h4 onClick={()=>filter("Angular Developer")}>Angular Developer</h4>
                <h4 onClick={()=>filter("Software Tester")}>Software Testing</h4>
                <h4 onClick={()=>filter("Server Admin")}>Server</h4>
            </div>      
        </div>

        <div className="content">
            <div className="bar">
            <Link to={'/add'}>
                <button className='add'>           
                  <BsFillPersonCheckFill/><span>Add Employee</span>               
                  </button>
                  </Link>
               
            </div>
            <div className="cardwrap">
              {
                allEmployees.map((item)=>(

            <div className="card">
            <div className="icon">
                <MdDelete className='i' onClick={()=>handleDeleteEmp(item.id)}/>
               <Link to={'/edit/'+item.id}><AiFillEdit className='i'/></Link> 
            </div>
            <div className="image">
                <img src={item.image} alt="" />
            </div>
            <div className="desg">
                <h3>{item.uname}</h3>
                <h3>{item.desg}</h3>
            </div>
            <div className="details">

                <div className="salary">
                <RiMoneyDollarBoxFill/><span>:{item.salary}/-</span>
                </div>

                <div className='age'>
                <GiCalendarHalfYear/><span>:{item.age} years old</span>
                </div>

                <div className="mail">
                  <AiFillMail/><span>:{item.mail}</span>
                </div>

                <div className="mobile">
                <AiFillPhone/><span>:{item.mobile}</span>
                </div>

            </div>
            </div>
                ))
            
              }

            </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
