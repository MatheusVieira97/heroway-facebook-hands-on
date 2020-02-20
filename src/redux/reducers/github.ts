const HTTP_GET_GITHUB_USER_PENDING = "@github/HTTP_GET_GITHUB_USER_PENDING";
const HTTP_GET_GITHUB_USER_SUCCESS = "@github/HTTP_GET_GITHUB_USER_SUCCESS";
const HTTP_GET_GITHUB_USER_FAIL = "@github/HTTP_GET_GITHUB_USER_FAIL";

const INITIAL_STATE = {
  isFetching: false,
  hasErrors: false,
  isEmpty: false,
  user: null
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HTTP_GET_GITHUB_USER_PENDING:
      return {
        ...state,
        isFetching: true
      };

    case HTTP_GET_GITHUB_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isEmpty: action.payload.isEmpty,
        user: action.payload.user
      };

    case HTTP_GET_GITHUB_USER_FAIL:
      return {
        ...state,
        hasErrors: true,
        user: INITIAL_STATE.user
      };

    default:
      return state;
  }
}

export function getGithubUser(query: string) {
  return async function(dispatch) {
    dispatch(getGithubUserPending());

    try {
      const url = `https://api.github.com/search/users?q=${query}`;
      const response = await fetch(url);
      const users = await response.json();

      const selectedUser = users.items[0];
      const isEmpty = users.total_count === 0 ? true : false;

      dispatch(getGithubUserSuccess(selectedUser, isEmpty));
    } catch (e) {
      dispatch(getGithubUserFail());
    }
  };
}

function getGithubUserPending() {
  return {
    type: HTTP_GET_GITHUB_USER_PENDING,
    payload: ""
  };
}

function getGithubUserSuccess(user, isEmpty) {
  return {
    type: HTTP_GET_GITHUB_USER_SUCCESS,
    payload: {
      user: user,
      isEmpty: isEmpty
    }
  };
}

function getGithubUserFail() {
  return {
    type: HTTP_GET_GITHUB_USER_FAIL,
    payload: ""
  };
}
