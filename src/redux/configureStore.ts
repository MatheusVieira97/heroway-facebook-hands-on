import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import githubReducer from './reducers/github';
import postsReducer from './reducers/posts';
import profileReducer from './reducers/profile';
import { postSendCommentUser } from './reducers/sendComent';

const state = {
  profile: (state: any, action: any) => profileReducer(state, action),
  posts: (state: any, action: any) => postsReducer(state, action),
  github: (state: any, action: any) => githubReducer(state, action),
  postSendCommentUser: (state: any, action: any) => postSendCommentUser(state, action)
};
const rootReducer = Redux.combineReducers(state);

export type IAppState = ReturnType<typeof rootReducer>;

const store = Redux.createStore(
  rootReducer,
  ReduxDevTools.composeWithDevTools(Redux.applyMiddleware(ReduxThunk))
);
export default store;
