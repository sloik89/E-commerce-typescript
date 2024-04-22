import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type TestTheme = "dark" | "light" | "system";
type ThemState = {
  testTheme: TestTheme;
};
const initialState: ThemState = {
  testTheme: "dark",
};
const ThemeTestSlice = createSlice({
  name: "test theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<TestTheme>) => {
      console.log("jestem");
    },
  },
});
export default ThemeTestSlice.reducer;
export const { setTheme } = ThemeTestSlice.actions;
