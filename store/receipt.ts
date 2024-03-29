import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IFood.ListReceipt = {
  receipt: [],
  name: "",
  amount: 0,
  idEdit: 0,
  title: "",
  isTitle: true,
};

export const appReceiptSlice = createSlice({
  name: "appReceipt",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<any>) => {
      state.title = action.payload;
    },
    setName: (state, action: PayloadAction<any>) => {
      state.name = action.payload;
    },
    setAmount: (state, action: PayloadAction<any>) => {
      state.amount = action.payload;
    },
    changeIsTitle: (state, action: PayloadAction<any>) => {
      state.isTitle = !action.payload;
    },
    // action CRUD
    addReceipt: (state, action: PayloadAction<any>) => {      
      state.receipt = [
        ...state.receipt,
        {
          id: action.payload.id,
          name: action.payload.name,
          unit: action.payload.unit,
          amount: action.payload.amount,
          isAmount: action.payload.amount === undefined ? true : false,
        },
      ];
      state.amount = 0;
    },
    deleteReceipt: (state, action: PayloadAction<any>) => {
      state.receipt = state.receipt.filter(
        (item) => item.id !== action.payload
      );
    },
    editAmount: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;
      const amount = state.amount;
      const isAmount = false;
      state.receipt = state.receipt.map((item) =>
        item.id === id ? { ...item, amount, isAmount } : item
      );
      state.amount = 0;
    },
    editReceipt: (state) => {
      const name = state.name;
      const amount = state.amount;
      const isAmount = false;
      const isName = false;
      state.receipt = state.receipt.map((item) =>
        item.id === state.idEdit ? { ...item, name, amount, isAmount, isName } : item
      );
      state.idEdit = 0;
    },
    setEditId: (state, action: PayloadAction<any>) => {
      state.idEdit = action.payload.id;
      const index = state.receipt.findIndex((item) => item.id === action.payload.id);
      state.receipt[index].isAmount = true
      state.receipt[index].isName = true
      state.name = action.payload.name;
      state.amount = action.payload.amount;
    },
  },
});

export const {
  setName,
  setAmount,
  addReceipt,
  deleteReceipt,
  editAmount,
  setEditId,
  editReceipt,
  setTitle,
  changeIsTitle,
} = appReceiptSlice.actions;

export default appReceiptSlice.reducer;
