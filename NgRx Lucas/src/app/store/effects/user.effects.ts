import { Injectable } from "@angular/core";
import {Effect, Actions, ofType} from '@ngrx/effects'
import { UserService } from 'src/app/services/user.service';
import { IAppState } from '../states/app.state';
import { Store, select } from '@ngrx/store';
import { GetUser, EUserActions, GetUserSuccess, GetUsersSuccess } from '../actions/user.actions';
import {map, withLatestFrom, switchMap} from 'rxjs/operators'
import { selectedUserList } from '../selectors/user.selectors';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectedUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser));
        })
    );

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUsers),
        switchMap(() => this._userService.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
    )
    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ){}
}