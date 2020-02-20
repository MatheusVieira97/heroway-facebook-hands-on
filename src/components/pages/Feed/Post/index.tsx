import React from 'react';

import { IPost } from '../../../../redux/reducers/posts';
import PostAction from './PostAction';
import PostComments from './PostComments';
import PostContent from './PostContent';
import PostHeader from './PostHeader';
import PostSendCommentForm from './PostSendCommentForm';

interface IProps {
  post: IPost;
}

const Post = (props: IProps) => {
  return (
    <div className="post">
      <PostHeader imagem={props.post.image} nome={props.post.name} data={props.post.date} />
      <PostContent postText={props.post.content} postImage={props.post.postImage} />
      <PostAction likes={props.post.likes} comment={props.post.comments.length} />
      <PostComments comments={props.post.comments} />
      <PostSendCommentForm postID={props.post.id} />
    </div>
  );
};

export default Post;
