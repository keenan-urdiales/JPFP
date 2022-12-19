import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Route,Routes} from 'react-router-dom';
import { selectCampus, fetchAllCampuses } from '../features/campusSlice';
import Navbar from "./Navbar";
import { selectStudent, fetchAllStudents } from '../features/studentSlice';
import {AllStudents, SingleStudent ,AllCampuses, SingleCampus} from './index'


const Main = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchAllStudents())
    dispatch(fetchAllCampuses())
    }, [dispatch])
    return (
        <>
        <div>
         <Navbar/>
        </div>
        <Routes>
<Route path ='/campus' element={<AllCampuses/>}/>
<Route path ='/student' element={<AllStudents/>}/>
<Route path ='/student/:studentId' element={<SingleStudent/>}/>
<Route path ='/campus/:campusId' element={<SingleCampus/>}/>
        </Routes>
        </>
    );
}; 

export default Main;