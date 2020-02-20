import React from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../../../redux/configureStore';
import { sendPost } from '../../../../../redux/reducers/posts';
import { setUserTyping } from '../../../../../redux/reducers/profile';
import { postSendCommentUser } from '../../../../../redux/reducers/sendComent';

interface IProps {
  postID: string;
}

let timeoutId: any = undefined;
const PostSendCommentForm = (props: IProps) => {
  const dispatch = ReactRedux.useDispatch();
  const github = ReactRedux.useSelector((state: IAppState) => state.github);

  function saveComment(event) {
    if (event.key === "Enter") {
      const postID = postSendCommentUser(props.postID, event.target.value);
      dispatch(postID);

      const actionSend = sendPost(props.postID, event.target.value, github.user);
      dispatch(actionSend);
    }
  }

  function handleTyping() {
    const isTypingAction = setUserTyping(true);
    dispatch(isTypingAction);

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dispatch(setUserTyping(false));
    }, 1000);
  }

  return (
    <div className="post-send-comment">
      <div className="post-send-form">
        <input
          type="text"
          placeholder="Write your comment"
          onChange={handleTyping}
          onKeyPress={saveComment}
        />
      </div>
    </div>
  );
};

export default PostSendCommentForm;
