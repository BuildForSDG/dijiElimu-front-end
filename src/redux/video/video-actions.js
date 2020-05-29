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
export const deleteVideoStart = (videoCode) => ({
  type: videoActionTypes.DELETE_VIDEO_START,
  payload: videoCode
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
