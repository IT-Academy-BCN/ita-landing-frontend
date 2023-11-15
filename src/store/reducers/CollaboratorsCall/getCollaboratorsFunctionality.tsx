import { createSlice } from '@reduxjs/toolkit'
import { getCollaboratorsData } from './getCollaboratorsData'

const initialState =  {
  
  collaborators:[],
  maxWidth:750,
  loading: false,
  lastClickedButton: null,
  
} 
export const apiSlice = createSlice({
  name: 'CollaboratorsCard',
  initialState,
  reducers: {
    setLastClickedButton: (state, action) => {
      state.lastClickedButton = action.payload;
      },
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
export const { setLastClickedButton } = apiSlice.actions;
export default apiSlice.reducer