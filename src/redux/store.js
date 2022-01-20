import { configureStore } from '@reduxjs/toolkit';
import newCommentReducer from './newCommentReducer';

export default configureStore({
    reducer: {
        newComment: newCommentReducer,
    },
})