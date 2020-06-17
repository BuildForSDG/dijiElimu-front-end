import { createSelector } from 'reselect';

const selectVideoState = (state) => state.video;

export const selectCurrentVideo = createSelector([selectVideoState], ({ video }) => video);
export const selectVideoComponentIsCreating = createSelector([selectVideoState], (videoState) => {
    return videoState.isCreating
}
)

export const selectVideoComponentIsUpdating = createSelector([selectVideoState], (videoState) => {
    return videoState.isUpdating
}
)
export const selectCreateVideotHidden = createSelector([selectVideoState], (videoState) => {
    return videoState.createVideoHidden
}
)
