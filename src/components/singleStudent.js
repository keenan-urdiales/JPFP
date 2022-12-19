import React,{useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import { selectSingleStudentSlice, fetchSingleStudent} from '../features/singleStudentSlice';
import { useDispatch, useSelector } from 'react-redux';
import UpdateStudent from './UpdateStudent';

const SingleStudent = () => {
    const dispatch = useDispatch();
    const { studentId } = useParams();
    const singleStudent = useSelector(selectSingleStudentSlice);
    const { firstName, lastName, email, imageUrl, gpa, campus } = singleStudent;
    useEffect(() => {
        dispatch(fetchSingleStudent(studentId));
    }, [dispatch]);

    const handleRegistered = async (studentId) => {
        await dispatch(registerStudentAsync({studentId, campusId}));
        window.location.reload(true)
    }

    return (
    <div id='single-student' >
        <h2>Student</h2>
        <p>Full Name: {firstName} {lastName}</p>
        <p>Email: {email}</p>
        <img src={imageUrl}/>
        <p>GPA: {gpa}</p>
        <UpdateStudent studentId={studentId}/>
        {
        campus ? (
          <div>
            <Link to={`/campus/${campus.id}`}>
              <p>Campus Name: {campus.name}</p> 
            </Link>
          </div>

        ) :<p>{firstName} {lastName} is not enrolled at any campus.</p>
      }

    </div>
    );
};
export default SingleStudent;
