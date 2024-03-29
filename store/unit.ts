import { createSlice } from "@reduxjs/toolkit";

const initialState: IFood.ListUnit = {
  units: [
    {
      id: 0,
      name: 'Kg'
    },
    {
      id: 1,
      name: 'Sdm'
    },
    {
      id: 2,
      name: 'Sdt'
    }
  ]
}

export const appUnitSlice = createSlice({
  name: "appUnit",
  initialState,
  reducers: {}
})

export default appUnitSlice.reducer