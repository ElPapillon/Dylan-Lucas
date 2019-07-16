import { IAppState } from "../states/app.state";
import { createSelector } from '@ngrx/store';
import { IUserState } from '../states/user.state';

const selectUsers = (state: IAppState) => state.users;

export const selectedUserList = createSelector(
    selectUsers,
    (state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
    selectUsers, 
    (state: IUserState) => state.selectedUser
);