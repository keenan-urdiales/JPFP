import React, {useEffect} from 'react'
import {selectStudent,deleteStudents, fetchAllStudents} from '../features/studentSlice'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import NewStudent from './NewStudent'

const AllStudents = () => {
    const students = useSelector(selectStudent)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllStudents());
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteStudents(id))
   }
console.log('This is the log for', students)
return (
    <div>
        <NewStudent />
<h1>Students</h1>

{students && students.length ? students.map((student)=> (
    <div key={student.id}>
        <h2> Student: </h2>
        <Link 
        to={`/student/${student.id}`}
        key={`All Students: ${student.id}`}
        >
<div className='studentRow' key={student.id}>
    <div>
       <img src={'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/4e3UJ5WY9EKhat70ZhI4FRt5cbZfYQ.jpg'} />
        <h3> {student.firstName} {student.lastName}</h3>
    </div>
</div>
        </Link>
        <button onClick={() => handleDelete( student.id)}>delete</button>
        </div>
))
: null}
    </div>
)
}
export default AllStudents;