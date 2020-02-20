import React from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { getPostsAction } from '../../../redux/reducers/posts';
import Post from './Post';
import ProfileSidebar from './ProfileSidebar';

const Feed = () => {
  const dispatch = ReactRedux.useDispatch();
  const postsState = ReactRedux.useSelector((state: IAppState) => {
    return state.posts;
  })

  React.useEffect(() => {
    const getPosts = getPostsAction();
    dispatch(getPosts);
  }, []);


  return (
    <>
      <div className="feed">
        <div className="container">
          {postsState.posts.map((post) => {
            return (
              <Post post={post} key={post.id} />
            )
          })}
        </div>
      </div>
      <ProfileSidebar />
    </>
  );
};

export default Feed;
