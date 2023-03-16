'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type IPost = {
  id: string;
  content: string;
  isForceUpdate?: boolean;
};

export type IPostPage = {
  posts: IPost[];
};

const initialState: IPostPage = {
  posts: [],
};

export const postPage = createSlice({
  name: 'postPage',
  initialState,
  reducers: {
    fetchNewPost: (state, action: PayloadAction<IPost>) => {
      if (action.payload.isForceUpdate) {
        state.posts = <IPost[]>(
          state.posts.filter((v) => v.id !== action.payload.id)
        );
      }
      state.posts = [...state.posts, action.payload] as IPost[];
    },
  },
});

export const { fetchNewPost } = postPage.actions;

export default postPage.reducer;
