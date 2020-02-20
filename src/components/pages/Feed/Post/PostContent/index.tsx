import React from 'react';


interface IProps {
  postText: string;
  postImage: string;
}
const PostContent = (props: IProps) => {
  return (
    <>
      <div className="post-content">
        {props.postText}
      </div>
      <div className="post-image">
        <div className="post-image-board">
          <img src={props.postImage} alt="Profile" />
        </div>
      </div>
    </>
  );
};

export default PostContent;
