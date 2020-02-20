import React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';

import { IAppState } from '../../../../../redux/configureStore';
import Typing from '../Typing';

const ProfileInfo: React.FC = () => {
  const isTyping = ReactRedux.useSelector((state: IAppState) => {
    return state.profile.typing;
  });

  const user = ReactRedux.useSelector((state: IAppState) => {
    return state.github.user ? state.github.user : {};
  });

  const history = ReactRouter.useHistory();
  React.useEffect(() => {
    if (user.login === undefined) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <>
      <div className="profile-image">
        {isTyping === true ? <Typing /> : undefined}

        <div className="image-board">
          <img src={user.avatar_url} alt="Profile" />
        </div>
      </div>
      <div className="profile-name">
        <span>{user.login}</span>
      </div>
      <div className="profile-info">
        <div>
          <span>347</span>
          <span>Followers</span>
        </div>
        <div>
          <span>94</span>
          <span>Following</span>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
