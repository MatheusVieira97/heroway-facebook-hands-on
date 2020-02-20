import React from 'react';

import { IPost } from '../../../../../redux/reducers/posts';

interface IProps {
  comments: IPost['comments']
}

const PostComments = (props: IProps) => {
  return (
    <div className="post-comments">
      {props.comments.map((coment, index) => {
        return (
          <div className="comment" key={index}>
            <div className="comment-profile-image">
              <div className="comment-image-board">
                <img src={coment.image} alt="Profile" />
              </div>
            </div>
            <div className="comment-content">
              <div className="comment-profile-name">{coment.name}</div>
              <div className="comment-text">
                {coment.comment}
              </div>
            </div>
          </div>
        )
      })}

    </div>
  );
};

export default PostComments;
