const GET_POSTS_PENDING = "@posts/HTTP_GET_POSTS_PENDING";
const GET_POSTS_SUCCESS = "@posts/HTTP_GET_POSTS_SUCCESS";
const GET_POSTS_FAIL = "@posts/HTTP_GET_POSTS_FAIL";
const SEND_POST = "@posts/HTTP_SEND_POST";

export interface IPost {
  id: string;
  likes: number;
  image: string;
  name: string;
  date: string;
  content: string;
  postImage: string;
  comments: Array<{
    comment: string;
    image: string;
    name: string;
  }>;
}

interface IState {
  isFetching: boolean;
  hasErrors: boolean;
  posts: IPost[];
}

const INITIAL_STATE: IState = {
  isFetching: false,
  hasErrors: false,
  posts: []
};

export default function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case GET_POSTS_PENDING: {
      return {
        ...state,
        isFetching: true
      };
    }

    case GET_POSTS_SUCCESS: {
      return {
        isFetching: false,
        hasErrors: false,
        posts: action.payload.posts
      };
    }

    case GET_POSTS_FAIL: {
      return {
        isFetching: false,
        hasErrors: true,
        posts: INITIAL_STATE.posts
      };
    }

    case SEND_POST: {
      const newPosts = state.posts.map(post => {
        if (post.id === action.payload.postID) {
          const comment = {
            comment: action.payload.user.comment,
            image: action.payload.user.avatar_url,
            name: action.payload.user.login
          };
          post.comments.push(comment);
        }

        return post;
      });
      return {
        ...state,
        posts: newPosts
      };
    }

    default:
      return state;
  }
}

export function getPostsAction() {
  return async function(dispatch: any) {
    const getPostsPendingAction = {
      type: GET_POSTS_PENDING,
      payload: null
    };
    dispatch(getPostsPendingAction);

    try {
      const url = "https://us-central1-heroway-react-facebook.cloudfunctions.net/app/posts";
      const response = await fetch(url);
      const posts = await response.json();

      const getPostsSuccessAction = {
        type: GET_POSTS_SUCCESS,
        payload: posts
      };
      dispatch(getPostsSuccessAction);
    } catch (error) {
      console.log("error", error);
      const getPostsFailAction = {
        type: GET_POSTS_FAIL,
        payload: null
      };
      dispatch(getPostsFailAction);
    }
  };
}

export function sendPost(postID, comment, user) {
  return {
    type: SEND_POST,
    payload: {
      postID: postID,
      user: {
        comment: comment,
        login: user.login,
        avatar_url: user.avatar_url
      }
    }
  };
}
