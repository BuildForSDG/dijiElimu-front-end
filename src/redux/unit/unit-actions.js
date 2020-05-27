import unitActionTypes from './unit-action-types';

// GET ACTIONS
export const startFetchUnit = (unitCode) => ({
  type: unitActionTypes.FETCH_UNIT_START,
  payload: unitCode
}
);
export const fetchUnitSuccess = (unit) => ({
  type: unitActionTypes.FETCH_UNIT_SUCCESS,
  payload: unit
}
);
export const fetchUnitFailure = (error) => ({
  type: unitActionTypes.FETCH_UNIT_FAILURE,
  payload: error
});
// CREATE ACTIONS
export const createUnitStart = (unitCode) => ({
  type: unitActionTypes.CREATE_UNIT_START,
  payload: unitCode
}
);
export const createUnitSuccess = (unit) => ({
  type: unitActionTypes.CREATE_UNIT_SUCCESS,
  payload: unit
}
);
export const createUnitFailure = (error) => ({
  type: unitActionTypes.CREATE_UNIT_FAILURE,
  payload: error
});
// update actions
export const updateUnitStart = (unitCode) => ({
  type: unitActionTypes.UPDATE_UNIT_START,
  payload: unitCode
}
);
export const updateUnitSuccess = (unit) => ({
  type: unitActionTypes.UPDATE_UNIT_SUCCESS,
  payload: unit
}
);
export const updateUnitFailure = (error) => ({
  type: unitActionTypes.UPDATE_UNIT_FAILURE,
  payload: error
});

// DELETE ACTIONS
export const deleteUnitStart = (unitCode) => ({
  type: unitActionTypes.DELETE_UNIT_START,
  payload: unitCode
}
);
export const deleteUnitSuccess = (unit) => ({
  type: unitActionTypes.DELETE_UNIT_SUCCESS,
  payload: unit
}
);
export const deleteUnitFailure = (error) => ({
  type: unitActionTypes.DELETE_UNIT_FAILURE,
  payload: error
});
