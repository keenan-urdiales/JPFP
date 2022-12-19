import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {createStudent} from '../features/studentSlice'

const NewStudent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    
    const handleSubmit =(event) => {
        event.preventDefault()
        dispatch(createStudent({firstName, lastName, email}))
    }
    return (
        <form id = 'studentForm' onSubmit={handleSubmit}>
<label htmlform ='firtName'>First Name:</label>
<input
name='firstName'
value={firstName}
onChange={(e) => setFirstName(e.target.value)}
required
/>
<label htmlform ='lastName'>Last Name:</label>
<input
name='lastName'
value={lastName}
onChange={(e) => setLastName(e.target.value)}
required
/>
<label htmlform ='email'>Email:</label>
<input
name ='email'
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<button type='submit'>submit</button>
        </form>
    )
}

export default NewStudent;