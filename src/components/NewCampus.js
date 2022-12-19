import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {createCampus} from '../features/campusSlice'

const NewCampus = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('')
    const dispatch = useDispatch()
   

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createCampus({name, address}))
    }
return (
    <div>
    <form id = 'newCampusForm' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
        name='name'
        value={name}
        onChange={(e)=> setName(e.target.value)}
        required
        />
        <label htmlFor='address'>Address:</label>
        <input
        name='address'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
/>
<button type = 'submit'>Submit</button>
    </form>
    </div>
)
}

export default NewCampus