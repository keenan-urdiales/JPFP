import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleStudent = createAsyncThunk('singleStudent',async(id)=> {
    try{
        const {data} = await axios.get(`/api/students/${id}`);
        return data;
    } catch(error) {
        console.log(error)
    }
})

export const editStudentAsync = createAsyncThunk("editStudent", async (student) => {
    const { firstName, lastName, email, imageUrl, gpa, studentId } = student;
   const editStudent = {firstName,lastName,email,imageUrl,gpa,};
   const { data } = await axios.put(`/api/students/${studentId}`, editStudent)
   return data
   });

export const updateStudent = createAsyncThunk(
    async ({studentId, firstName, lastName, details, email,gpa}) => {
        const {data} = await axios.put (`/api/students/${studentId}`, {
            studentId,firstName,lastName,details,email,gpa
        })
        return data
    }
)


const singleStudentSlice = createSlice({
    name: 'singleStudent',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleStudent.fulfilled, (state,action) => {
            return action.payload;
        })
         builder.addCase(updateStudent.fulfilled, (state,action)=>{
            return action.payload
         })
    }
})

export const selectSingleStudentSlice = (state) =>  state.singleStudent 
export default singleStudentSlice.reducer