import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createIdUnique } from "@/utils/createIdUnique";

const initialState: IFood.ListProsedure = {
  prosedure: [],
  name: '',
  editId: 0,
  isInput: true,
}

export const appProsedureSlice = createSlice({
  name: "appMProsedure",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<any>) => {
      state.name = action.payload
    },
    setEditId: (state, action: PayloadAction<any>) => {
      state.editId = action.payload      
      const filter = state.prosedure.filter(item => item.id === action.payload);
      state.name = filter[0].name
      state.isInput = false
    },
    changeIsInput: (state, action: PayloadAction<any>) => {
      state.isInput = !action.payload
    },
    // action CRUD
    addProsedure: (state) => {
      const newId = createIdUnique()
      state.prosedure = [...state.prosedure, { id: newId, name: state.name}]
      state.name = ''
      state.isInput = true
    },
    editProsedure: (state) => {
      state.prosedure = state.prosedure.map((item) =>
      item.id === state.editId ? { ...item, name: state.name } : item
      )
      state.editId = 0
      state.name = ''
      state.isInput = true
    }
  }
})

export const { setName, addProsedure, editProsedure, setEditId, changeIsInput } = appProsedureSlice.actions;

export default appProsedureSlice.reducer