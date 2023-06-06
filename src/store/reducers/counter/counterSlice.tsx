import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface CounterState {
  value: number,
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    
   incrementByAmount: (state, action: PayloadAction<{ arg1: number, arg2: number }>) => {
  const { arg1, arg2 } = action.payload;

  if (state.value === 10 || state.value === 20) {
    state.value += arg2;
  } else {
    state.value += arg1;
  }
},
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type


export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer