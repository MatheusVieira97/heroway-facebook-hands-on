const HTTP_SEND_COMMENT_PENDING = "@github/HTTP_SEND_COMMENT_PENDING";
const HTTP_SEND_COMMENT_SUCCESS = "@github/HTTP_SEND_COMMENT_SUCCESS";
const HTTP_SEND_COMMENT_FAIL = "@github/HTTP_SEND_COMMENT_FAIL";

const INITIAL_STATE = {
  isFetching: false,
  hasErrors: false,
  user: null
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HTTP_SEND_COMMENT_PENDING:
      return {
        ...state,
        isFetching: true
      };

    case HTTP_SEND_COMMENT_SUCCESS:
      return {
        ...state,
        isFetching: false
      };

    case HTTP_SEND_COMMENT_FAIL:
      return {
        ...state,
        hasErrors: true
      };

    default:
      return state;
  }
}

export function postSendCommentUser(postID: string, comment) {
  return async function(dispatch) {
    dispatch(postSendCommentUserPending());
    try {
      const url = `https://us-central1-heroway-react-facebook.cloudfunctions.net/app/posts/${postID}/comment`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          comment: comment,
          login: "",
          avatar_url: ""
        })
      });
      const users = await response.json();
      console.log(users);

      // const selectedUser = users[0];
      dispatch(postSendCommentUserSuccess());
    } catch (e) {
      dispatch(postSendCommentUserFail());
    }
  };
}

function postSendCommentUserPending() {
  return {
    type: HTTP_SEND_COMMENT_PENDING,
    payload: ""
  };
}

function postSendCommentUserSuccess() {
  return {
    type: HTTP_SEND_COMMENT_SUCCESS,
    payload: ""
  };
}

function postSendCommentUserFail() {
  return {
    type: HTTP_SEND_COMMENT_FAIL,
    payload: ""
  };
}
