import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducer } from './user.reducers';
import { configReducers } from './config.reducers';


export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducer,
    config: configReducers
};