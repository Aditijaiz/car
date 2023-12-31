import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import {thunk} from 'redux-thunk'
//import * as ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { oemsReducer } from './oems/oems.reducer';
import { authReducer } from './auth/auth.reducer';
import { carsReducer } from './cars/cars.reducer';

const composeEnhancer = composeWithDevTools({
     // Specify here name, actionsDenylist, actionsCreators and other options
   });


const rootReducer = combineReducers({
     authManager: authReducer,
     carsManager: carsReducer,
     oemsManager: oemsReducer
})

//const customThunk = ReduxThunk.default || ReduxThunk;

//const middleware = applyMiddleware(thunk);

//const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
