import { createAsyncThunk } from "@reduxjs/toolkit";
import { changeIsDoneRequest } from "../../../requests";

export const toggleIsDone = createAsyncThunk("lists/changeIsDoneRequest", async (data) => {

    const response = await changeIsDoneRequest(data.item, data.list);
    return response;

});