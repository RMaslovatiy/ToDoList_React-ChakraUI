import { configureStore } from "@reduxjs/toolkit";
import lists from "./reducers/lists/listsReducer";
import list from "./reducers/list/listReducer";

export default configureStore({
  reducer: {
    lists,
    list,
  },
});
