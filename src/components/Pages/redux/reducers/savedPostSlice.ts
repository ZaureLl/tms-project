import { CardType } from './../../../Card/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type savedPostState = {
    selectedPost: null | CardType,
    isVisibleSelectedModal: boolean,
}

const initialState: savedPostState = {
    selectedPost: null,
    isVisibleSelectedModal: false,
}

const savedPostSlice = createSlice({
    name: "savedPost",
    initialState,
    reducers: {
        savePost: (state, action: PayloadAction<CardType | null>) => {
            state.selectedPost = action.payload;
            state.isVisibleSelectedModal = !state.isVisibleSelectedModal;
        }
    },
})

export default savedPostSlice.reducer;

export const { savePost } = savedPostSlice.actions;

export const SavedPostSelectors = {
    getSelectedPost: (state: RootState) => state.savedPost.selectedPost,
    getVisibleSelectedModal: (state: RootState) => state.savedPost.isVisibleSelectedModal,
}