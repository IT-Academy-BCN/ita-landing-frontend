import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface CounterState {
  apiPokemon: Array<string>,
  number:number
}

// Define the initial state using that type
const initialState: CounterState = {
  apiPokemon: [],
  number:0
}

export const apiSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    apiCall: (state,action) => {
      state.apiPokemon = action.payload
    },incrementApi:(state,action)=>{
      state.number = action.payload
    }
  },
})

export const { apiCall , incrementApi} = apiSlice.actions

export const llamadaApiPokemon =async( fullData:any )=>{

  try { 

    const endpoint = await fetch('https://87.106.229.119/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(fullData)
    });
    
    const dos = await endpoint.json();
    
    console.log('respuesta', dos);

     
     
     
  } catch (error) {
     console.log(error)
  }
};


// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default apiSlice.reducer