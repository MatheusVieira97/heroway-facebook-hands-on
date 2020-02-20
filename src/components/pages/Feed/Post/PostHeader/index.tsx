import React from 'react';

interface IProps {
  imagem: string;
  nome: string;
  data: string;
}

const PostHeader = (props: IProps) => {
  return (
    <div className="post-header">
      <div className="post-header-profile-image">
        <div className="post-header-image-board">
          <img src={props.imagem} alt="Profile" />
        </div>
      </div>
      <div className="post-header-profile-name">
        <div className="profile-name">{props.nome}</div>
        <div className="post-date">{props.data}</div>
      </div>
    </div>
  );
};

export default PostHeader;
