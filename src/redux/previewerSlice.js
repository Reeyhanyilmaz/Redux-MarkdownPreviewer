import { createSlice } from "@reduxjs/toolkit";

export const previewerSlice = createSlice({
    name: "previewer",
    initialState: {
        markdownText: localStorage.getItem("markdownText") ? JSON.parse(localStorage.getItem("markdownText")) : "",
    },
    reducers: {
        setMarkdownText: (state, action) => {
            state.markdownText = action.payload;
            localStorage.setItem("markdownText", JSON.stringify(state.markdownText));
        },
    },
});

export const { setMarkdownText } = previewerSlice.actions;
console.log('createSlice.reducer ', createSlice.reducer);
export default previewerSlice.reducer;
