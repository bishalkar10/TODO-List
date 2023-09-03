import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    photo: '',
    email: '',
  },
  reducers: {
    updateUser: (state, action) => {
      const { name, photo, email } = action.payload;
      state.name = name;
      state.photo = photo;
      state.email = email;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
