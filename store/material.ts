import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createIdUnique } from "@/utils/createIdUnique";

const initialState: IFood.IMaterials = {
  material: [],
  name: '',
  unit: '',
  isInput: true,
  editId: 0,
}

export const appMaterialSlice = createSlice({
  name: "appMaterial",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<any>) => {
      state.name = action.payload
    },
    setUnit: (state, action: PayloadAction<any>) => {
      state.unit = action.payload
    },
    setEditId: (state, action: PayloadAction<any>) => {
      state.editId = action.payload      
      const filter = state.material.filter(item => item.id === action.payload);
      state.name = filter[0].name
      state.unit = filter[0].unit
    },
    changeIsInput: (state, action: PayloadAction<any>) => {
      state.isInput = !action.payload
    },
    // action CRUD
    addMaterial: (state) => {
      const newId = createIdUnique()
      state.material = [...state.material, { id: newId, name: state.name, unit: state.unit}]
      state.name = ''
      state.unit = ''
    },
    editMaterial: (state) => {
      state.material = state.material.map((item) =>
      item.id === state.editId ? { ...item, name: state.name, unit: state.unit } : item
      )
      state.editId = 0
      state.name = ''
      state.unit = ''
    },
    deleteMaterial: (state, action: PayloadAction<any>) => {
      state.material = state.material.filter((item) => item.id !== action.payload)
    },
    appendMaterial: (state, action: PayloadAction<any>) => {
      state.material = [...state.material, { id: action.payload.id, name: action.payload.name, unit: action.payload.unit, amount: action.payload.amount}]
    },
  }
})

export const { setName, changeIsInput, addMaterial, setEditId, editMaterial, setUnit, deleteMaterial, appendMaterial } = appMaterialSlice.actions;

export default appMaterialSlice.reducer