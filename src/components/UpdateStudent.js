import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateStudent } from '../features/singleStudentSlice';
import {fetchAllCampuses,selectCampus,} from "../features/campusSlice";

const UpdateStudent = ({studentId}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState("");
  const [option, setOption] = useState("");
  const campuses = useSelector(selectCampus);
  const dispatch = useDispatch();

  const handleUpdate = async (event) => {
    try {
 event.preventDefault();
await dispatch(updateStudent({firstName, lastName, email, gpa, studentId, option}))
    } catch(error){
      throw(error)
    }
  }
  return (
    <div>
      <h3>EditStudent</h3>
      <form id='update-student-form' onSubmit={handleUpdate}>
          <input 
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={ (e) => setFirstName(e.target.value)}
          />
          <input 
              placeholder='Last Name'
              name='lastName'
              value={lastName}
              onChange={ (e) => setLastName(e.target.value)}
          />
          <input 
              placeholder='email'
              name='email'
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
          />
          <input 
              placeholder='gpa'
              name='gpa'
              value={gpa}
              onChange={ (e) => setGpa(e.target.value)}
          />
      <select onChange={(e) => setOption(e.target.value)} >
        <option value="">Choose School</option>
        {campuses.map((campus) => {
          return(
      <option key={campus.id} value={campus.id}>{campus.name}</option>
          );
        })}
      </select>
    <button type='submit'>Update Student</button>
      </form>
    </div>
  )
}
export default UpdateStudent