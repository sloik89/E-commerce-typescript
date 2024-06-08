import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/components/ui/use-toast";
export type User = {
  username: string;
};
type UserState = {
  user: User | null;
};
const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user");
  if (!user) return null;
  return JSON.parse(user);
};
const initialState: UserState = {
  user: getUserFromLocalStorage(),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      localStorage.setItem("user", JSON.stringify("user"));
      toast({ description: "Login successful" });
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});
export default userSlice.reducer;
export const { loginUser, logoutUser } = userSlice.actions;
