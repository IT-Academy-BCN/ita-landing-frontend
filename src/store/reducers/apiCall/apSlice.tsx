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

export const llamadaApiPokemon =async(dispatch:any,number:number)=>{

  try { 
    const dataOne =await  fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${number}`);
    const dataDos = await dataOne.json();
    dispatch(apiCall(dataDos.results));  
  } catch (error) {
    console.log(error)
  }
};


// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default apiSlice.reducer