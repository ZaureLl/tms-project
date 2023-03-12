import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import savedPostReducer from "./reducers/savedPostSlice";

const store = configureStore(
    {
        reducer: {
            theme: themeReducer,
            savedPost: savedPostReducer,
        },
    }
)

export type RootState = ReturnType<typeof store.getState>
export default store;