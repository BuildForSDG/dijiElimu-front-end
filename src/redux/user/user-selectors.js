import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser],
  ({ currentUser }) => (currentUser || null));

export const selectProfileHidden = createSelector([selectUser],
  (user) => user.profileHidden);

export const selectUserLoading = createSelector([selectCurrentUser],
  (user) => !!user);

export const selectUserIsTutor = createSelector([selectCurrentUser], (user) => (user ? user.role === 'tutor' : false));
export const selectUserIsAdmin = createSelector([selectCurrentUser],
  (user) => (user ? user.isAdmin : false));

export const userIsStudent = createSelector([selectUserIsAdmin], (user) => user.role.toLowerCase() === 'student');
