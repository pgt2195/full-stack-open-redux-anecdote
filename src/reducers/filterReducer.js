import { createSlice } from '@reduxjs/toolkit'


const filterSlice = createSlice({
  name: "filter",
  initialState: '',
  reducers: {
    filterResults(_state, action) {
      return action.payload.toLowerCase()
    }
  }
})

export const { filterResults } = filterSlice.actions
export default filterSlice.reducer