import { useState } from 'react'
import '../css/form.css'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'; 
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



function FromData() {

  let navigate=useNavigate()

  // const showToastMessage = () => {
  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };
    
let [fdata,setFdata]=useState({})

let handleChange=(e)=>{
  setFdata({...fdata,[e.target.name]:e.target.value})
}

let handleSubmit=(e)=>{
  e.preventDefault()
  // alert('HEllo')
  
    toast.success('Registration Successfull',{position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })

  setTimeout(()=>{
    navigate('/login')
  },4000)
  // showToastMessage()
  
  let sendData=async()=>{
    try{
      let {data}=await axios.post('http://localhost:6999/api/addUser/addUser',fdata)
      console.log(data)
    }
    catch(err)
    {
      console.log(err.message)
    }
  }
sendData()

}
  return (
    <div className='parent'>
          <h1> Storing Form data to MongoDB using React & Express - </h1>
        <form onSubmit={handleSubmit}>
          {/* BASIC DETAILS */}
            <input  className='childinput' name='fname' placeholder='Enter First Name' type="text" onChange={handleChange} required/> <br />
            <input className='childinput' name='lname' placeholder='Enter Last Name' type="text" onChange={handleChange} required/><br />
            <input className='childinput' name='age' placeholder='Enter your Age' type="number" onChange={handleChange} required/><br />
            
            {/* EMAIL */}
            <input className='childinput'name='email'type="email"placeholder='Enter your Email'onChange={handleChange} required/><br />
            <input className='childinput'name='password'type="password"placeholder='Enter your Password'onChange={handleChange} required/><br />
            
            {/* GENDER */}
            <label className='gender' htmlFor="gender">Gender : </label>
            <label htmlFor="male">Male</label><input className='genn' name='gender'id='male'type="radio"value="male"onChange={handleChange} required/>
            <label htmlFor="female">Female</label><input className='genn' name='gender'id='female'type="radio"value="female"onChange={handleChange} required/>
            <label htmlFor="others">Others</label><input className='genn' name='gender'id='others'type="radio"value="other"onChange={handleChange} required/>
            <br />

            {/* BUTTON */}
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}
export default FromData
