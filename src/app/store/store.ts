import { configureStore } from "@reduxjs/toolkit";
import showButtonsReducer from "./toggleShow";
export default configureStore({
  reducer: {
    showButtons: showButtonsReducer,
  },
});
