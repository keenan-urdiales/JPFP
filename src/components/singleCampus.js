import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleCampus, selectSingleCampusSlice } from '../features/singleCampusSlice'
import {Link, useParams} from 'react-router-dom'
import UpdateCampus from './UpdateCampus'

const SingleCampus = () => {
const dispatch = useDispatch()  
const {campusId} = useParams()

const singleCampus = useSelector(selectSingleCampusSlice)
const {name,address,imageUrl,description,students} = singleCampus

useEffect(() => {
    dispatch(fetchSingleCampus(campusId))
}, [dispatch])

return(
    <div>
<div id = 'singleCampus'>
<h1>Name: {name}</h1>
<p>Address: {address}</p>
<p>{description}</p>
<img src = {'https://sites.google.com/site/mrtrampeconestogapublicschools/_/rsrc/1493899387670/542017/zoolander_center.jpg'}/>
<UpdateCampus campusId={campusId}/>
</div>
<div id='singleCampusNav'>
{students && students.length ? (students.map((student) => (
    <div key= {student.id}>
<Link to={`/students/${student.id}`}
>
<p>
    Students: {student.firstName} {student.lastName}
</p>
</Link>
</div>
))
): 
<p>{name} does not have any registered students</p>
}
</div>
    </div>
)
 }

 export default SingleCampus;