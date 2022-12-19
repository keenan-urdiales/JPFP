import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from '../features/studentSlice'
import singleStudentSlice from '../features/singleStudentSlice'
import campusSlice from '../features/campusSlice'
import singleCampusSlice from '../features/singleCampusSlice'


const store = configureStore({
  reducer: {
campuses: campusSlice,
students: studentsSlice,
singleStudent: singleStudentSlice,
singleCampus: singleCampusSlice
  }
});

export default store;