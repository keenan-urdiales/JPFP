import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectStudent } from '../features/studentSlice'
import {selectCampus} from '../features/campusSlice'


const Navbar = () => {
    const students = useSelector(selectStudent)
    const campuses = useSelector(selectCampus)
    return (
<>
        <Link to ='/student'>Students{students.length}</Link>
        <Link to ='/campus'>Campuses{campuses.length}</Link>
        </>
    )
}
export default Navbar;