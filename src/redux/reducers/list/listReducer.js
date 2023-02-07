import { createSlice } from "@reduxjs/toolkit";
import { delItem, toggleIsDone } from "./asyncThunks";




export const listSlice = createSlice({
    name: "list",
    initialState: {
        data: {}

    },
    reducers: {

        setList: (state, action) => {
            state.data = action.payload;
        }

    },
    extraReducers(builder) {
        builder.addCase(toggleIsDone.fulfilled, (state, action) => {
            state.data.items.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.isDone = !item.isDone;
                }
            });
        });
    }
})
export const { setList } = listSlice.actions;
export default listSlice.reducer;