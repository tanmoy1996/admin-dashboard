// src/features/exampleSlice.ts

import { createSlice } from '@reduxjs/toolkit'

interface ExampleState {
  // Define your state here
}

const initialState: ExampleState = {
  // Initial state
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    // Add your actions and reducers here
  },
})

export const {
  /* Action creators */
} = exampleSlice.actions

export default exampleSlice.reducer
