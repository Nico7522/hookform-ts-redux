import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FormArray {
  dataForm: Array<{}>;
  actualPage: number;
}
const initialState: FormArray = {
  dataForm: [],
  actualPage: 1,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Object>) => {
      
      state.dataForm.push(action.payload);
    },

    nextPage: (state, action: PayloadAction<number>) => {
      const next = action.payload;
      state.actualPage = state.actualPage + next;
    },
  },
});

export const { add, nextPage } = formSlice.actions;
const formReducer = formSlice.reducer;
export default formReducer;
