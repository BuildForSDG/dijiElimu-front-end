import { createSelector } from 'reselect';

const selectVideo = (state) => state.video;

export const selectCurrentVideo = createSelector([selectVideo], ({ video }) => video);
