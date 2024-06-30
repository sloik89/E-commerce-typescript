import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Theme = "dark" | "light" | "system";
import { applyTheme } from "@/utilis/applyThemes";
type ThemeState = {
  theme: Theme;
};
const initializeTheme = (): Theme => {
  const theme = (localStorage.getItem("theme") as Theme) || "system";

  applyTheme(theme);
  return theme;
};
const initialState = {
  theme: initializeTheme(),
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      applyTheme(action.payload);
      localStorage.setItem("theme", action.payload);
    },
  },
});
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
