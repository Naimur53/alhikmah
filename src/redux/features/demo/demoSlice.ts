import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  name: string;
}

// Define the initial state using that type
const initialState: IInitialState = {
  name: ""
};

export const demoSlice = createSlice({
  name: "demo",
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    setDemo: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  }
});

export const { setDemo } = demoSlice.actions;

export default demoSlice.reducer;
