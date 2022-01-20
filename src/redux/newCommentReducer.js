import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const commentSlice = createSlice({
    name: 'newComment',
    initialState,
    reducers: {
        setCreatorName: (state, action) => {
            state.creatorName = action.payload;
        },
        setComment: (state, action) => {
            state.comment = action.payload;
        },
        setLoading: (state) => {
            state.loading = !state.loading;
        },
        // resetForm: () => initialState
    }
})

export const { setCreatorName, setComment, setLoading, resetForm } = commentSlice.actions;

export default commentSlice.reducer;