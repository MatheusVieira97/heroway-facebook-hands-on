const USER_TYPYING_ACTION_TYPE = "@profile/USER_TYPING";

interface IState {
  typing: boolean;
}

interface IAction {
  type: string;
  payload: any;
}

const INITIAL_STATE: IState = {
  typing: false
};

export default function reducer(state = INITIAL_STATE, action: IAction): IState {
  switch (action.type) {
    case USER_TYPYING_ACTION_TYPE:
      return {
        typing: action.payload.isTyping
      };

    default:
      return state;
  }
}

// ACTION
export function setUserTyping(isTyping: boolean): IAction {
  return {
    type: USER_TYPYING_ACTION_TYPE,
    payload: {
      isTyping: isTyping
    }
  };
}
