import { createSlice } from '@reduxjs/toolkit'

 

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },
    makereset:(state)=>{//this action is create by Govind Naag
        state.value=0
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,makereset } = counterSlice.actions

export default counterSlice.reducer