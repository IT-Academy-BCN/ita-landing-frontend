import { createSlice } from '@reduxjs/toolkit'
import { getCollaboratorsData } from './getCollaboratorsData'

const initialState =  {
  
  collaborators:[],
  maxWidth:750,
  loading: false,
  
} 
export const apiSlice = createSlice({
  name: "CollaboratorsCard",
  initialState,
  reducers: {
  
    },
  extraReducers:(builder)=>{
    builder
    
    .addCase(getCollaboratorsData.pending,(state)=>{
        state.loading = true;
    })
    .addCase(getCollaboratorsData.fulfilled,(state,action)=>{
        state.loading = false;
        state.collaborators = action.payload;

    })
    .addCase(getCollaboratorsData.rejected, (state) => {
        state.loading = false;
    });
  }
})
export default apiSlice.reducer
