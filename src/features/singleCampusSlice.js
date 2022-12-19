import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleCampus = createAsyncThunk('singleCampus', async(campusId)=> {
    try{
        const {data} = await axios.get(`/api/campus/${campusId}`)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const updateCampus = createAsyncThunk(
    async ({ name, address, campusId }) => {
        const { data } = await axios.put(`/api/campus/${campusId}`, {
            name,
            address,
        });
        return data;
    }
);


const singleCampusSlice = createSlice({
    name: 'singleCampus',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleCampus.fulfilled, (state, {payload})=> {
        return payload
        })
        builder.addCase(updateCampus.fulfilled, (state, {payload})=> {
            return payload
        })
    },
})


export const selectSingleCampusSlice = (state) => state.singleCampus
export default singleCampusSlice.reducer