import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = []

export const fetchAllStudents = createAsyncThunk('students', async()=>{
    try{
        const { data } = await axios.get('/api/students')
        return data
    } catch(error) {
        console.log(error)
    }
})

export const createStudent = createAsyncThunk(
    'createStudent',
    async({firstName, lastName, email}) => {
        try {
        let {data} = await axios.post('/api/students', {
            firstName,
            lastName,
            email,
        })
        return data
    } catch(error) {
        console.log(error)
    }
}
)

export const deleteStudents = createAsyncThunk('deleteStudents', async (id)=>{
    try{
        await axios.delete(`/api/students/${id}`)
        return id
    } catch (error) {
        console.log(error)
    }
})

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(createStudent.fulfilled, (state, action) => {
            state.push(action.payload)
        })
        builder.addCase(deleteStudents.fulfilled, (state,action) => {
            return state.filter((student) => student.id != action.payload)
        })
    },
})

export const selectStudent = (state) => state.students;
export default studentsSlice.reducer;