import { createSelector } from 'reselect';
import { select } from 'redux-saga/effects';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser],
  ({ currentUser }) => (currentUser || null));

export const selectProfileHidden = createSelector([selectUser],
  (user) => user.profileHidden);

export const selectUserLoading = createSelector([selectCurrentUser],
  (user) => !!user);

export const selectUserIsTutor = createSelector([selectCurrentUser],

   (user) => (user ? user.isAdmin : false));

export const selectUserIsAdmin = createSelector([selectCurrentUser],
  (user) => (user ? user.isAdmin : false));

export const userIsStudent = createSelector([selectUserIsAdmin], 
  (user) => user.isStudent
)
export const selectToken = createSelector([selectUser],
   (user) => (user ? user.token : ''));

export const selectMyCourses = createSelector([selectUser],
   (user) => (user ? user.myCourses : null));

export const selectCredentialsModalHidden = createSelector([selectUser], (userState) => {
  return userState.credentialsModalHidden
}
)

