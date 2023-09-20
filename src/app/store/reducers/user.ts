import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    signedIn: false,
    name: "",
    photo: "",
    email: "",
  },
  reducers: {
    updateStatus: (state, action) => {
      state.signedIn = action.payload;
    },
    updateUser: (state, action) => {
      const { name, photo, email } = action.payload;
      state.name = name;
      state.photo = photo;
      state.email = email;
    },
  },
});

export const { updateStatus, updateUser } = userSlice.actions;
export default userSlice.reducer;
