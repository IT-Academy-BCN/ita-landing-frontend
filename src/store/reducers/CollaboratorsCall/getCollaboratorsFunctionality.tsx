import { createSlice } from '@reduxjs/toolkit'
import { getCollaboratorsData } from './getCollaboratorsData'

const initialState =  {
  
  collaborators:[],
  maxWidth:750
  
} 
export const apiSlice = createSlice({
  name: 'CollaboratorsCard',
  initialState,
  reducers: {
    
  },extraReducers:(builder)=>{

    builder.addCase(getCollaboratorsData.fulfilled,(state,action)=>{
      state.collaborators = action.payload;
        
  })
  }
})

//export const {} = apiSlice.actions;


  



export default apiSlice.reducer