import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import {selectCampus, deleteCampus, fetchAllCampuses} from '../features/campusSlice'
import NewCampus from './NewCampus'

 const AllCampuses = () => {
const campuses = useSelector(selectCampus)
const dispatch = useDispatch()
useEffect(()=> {
    dispatch(fetchAllCampuses())
}, [dispatch])

const handleDelete = (id) => {
     dispatch(deleteCampus(id))
}

console.log('this is a log for campuses', campuses)
return (
    <div>
<h1>Campuses</h1>
<NewCampus/>
{campuses && campuses.length ? campuses.map((campus)=> (
    <div key = {campus.id}>
        <Link
to={`/campus/${campus.id}`}
key={`All Campuses: ${campus.id}`}
>
<div className='campusRow'>
    <h3>{campus.id}</h3>
    <img src ={'https://sites.google.com/site/mrtrampeconestogapublicschools/_/rsrc/1493899387670/542017/zoolander_center.jpg'}/>
    </div> 
    <div>Name: {campus.name}</div>
    <div>Description {campus.description}</div>
</Link>
<button
onClick={() => {
handleDelete(campus.id);}}
>
Delete
 </button>
</div>
))
:null }
</div> 
);
 };

export default AllCampuses;