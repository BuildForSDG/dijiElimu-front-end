import videoActionTypes from './video-action-types';

// GET ACTIONS
export const startFetchUnit = (videoCode) => ({
  type: videoActionTypes.FETCH_UVIDEOSTART,
  payload: videoCode
}
);
export const fetchVideoSuccess = (video) => ({
  type: videoActionTypes.FETCH_VIDEO_SUCCESS,
  payload: video
}
);
export const fetchVideoFailure = (error) => ({
  type: videoActionTypes.FETCH_VIDEO_FAILURE,
  payload: error
});
// CREATE ACTIONS
export const createVideoStart = (videoCode) => ({
  type: videoActionTypes.CREATE_VIDEO_START,
  payload: videoCode
}
);
export const createVideoSuccess = (video) => ({
  type: videoActionTypes.CREATE_VIDEO_SUCCESS,
  payload: video
}
);
export const createVideoFailure = (error) => ({
  type: videoActionTypes.CREATE_VIDEO_FAILURE,
  payload: error
});
// update actions
export const updateVideoStart = (unitCode) => ({
  type: videoActionTypes.UPDATE_VIDEO_START,
  payload: unitCode
}
);
export const updateVideoSuccess = (video) => ({
  type: videoActionTypes.UPDATE_VIDEO_SUCCESS,
  payload: video
}
);
export const updateVideoFailure = (error) => ({
  type: videoActionTypes.UPDATE_VIDEO_FAILURE,
  payload: error
});

// DELETE ACTIONS
export const deleteVideoStart = (videoId) => ({
  type: videoActionTypes.DELETE_VIDEO_START,
  payload: videoId
}
);
export const deleteVideoSuccess = (video) => ({
  type: videoActionTypes.DELETE_VIDEO_SUCCESS,
  payload: video
}
);
export const deleteVideoFailure = (error) => ({
  type: videoActionTypes.DELETE_VIDEO_FAILURE,
  payload: error
});
// UTILITY ACTIONS
export const toggleCreateVideoHidden = () => ({
  type: videoActionTypes.TOGGLE_CREATE_VIDEO_HIDDEN
})

export const resetCreateVideoComponent = () => ({
  type: videoActionTypes.RESET_CREATE_VIDEO_COMPONENT
})

export const toggleComponentToCreate = () => ({
  type: videoActionTypes.TOGGLE_COMPONENT_TO_CREATE
})

export const toggleComponentToUpdating = () => ({
  type: videoActionTypes.TOGGLE_COMPONENT_TO_UPDATE
})
export const hideCreateVideoComponent = () => ({
  type: videoActionTypes.HIDE_CREATE_VIDEO_COMPONENT
})


