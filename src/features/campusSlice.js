import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = []

export const fetchAllCampuses = createAsyncThunk('campus',async()=> {
    // console.log('This is a log for campusSlice',campus)
    try{
        const {data} = await axios.get('/api/campus')
        return data 
    } catch(error) {
        console.log(error)
    }
})

export const createCampus = createAsyncThunk('createCampus', async ({name,address})=>{
    try{
        const {data} = await axios.post('/api/campus', {
            name, address
        })
        return data 
    } catch(error) {
        console.log(error)
    }
})

export const deleteCampus = createAsyncThunk('deleteCampus', async(id)=> {
    try {
        await axios.delete(`/api/campus${id}`)
        return id 
    } catch(error) {
        console.log(error)
    }
})

const campusSlice = createSlice({
name: 'campus',
initialState,
reducers: {},
extraReducers: (builder) => {
    builder.addCase(fetchAllCampuses.fulfilled, (state, action)=> {
        return action.payload
    })
    builder.addCase(deleteCampus.fulfilled, (state,action)=> {
        return state.filter((campus)=> campus.id !== action.payload)
    })
    builder.addCase(createCampus.fulfilled, (state, action) => {
        state.push(action.payload)
    })
},
})

export const selectCampus = (state) => state.campuses;
export default campusSlice.reducer;