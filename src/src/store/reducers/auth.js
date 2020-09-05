import axios from "axios";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGOUT = "auth/LOGOUT";
const USER_SIGNUP = "auth/USER_SIGNUP";
const USER_CONFIG = "auth/USER_CONFIG";

const initState = {
  authenticate: false,
  signupData: {},
  initConfig: {},
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticate: true,
      };
    case LOGOUT:
      return {
        ...state,
        authenticate: false,
      };
    case USER_SIGNUP:
      return {
        ...state,
        signupData: action.payload,
      };
    case USER_CONFIG:
      return {
        ...state,
        initConfig: action.payload,
      };
    default:
      return state;
  }
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export const userSignUp = (data) => {
  return function (dispatch, getState) {
    const currentState = getState();
    const baseUrl = currentState.auth.initConfig;
    axios.post(`${baseUrl.baseUrl}/api/user/signUp`, data).then((response) => {
      dispatch({
        type: USER_SIGNUP,
        payload: response.data,
      });
    });
  };
};

export const userConfig = () => {
  return function (dispatch) {
    axios.get("http://localhost:3001/api/config").then((response) => {
      dispatch({
        type: USER_CONFIG,
        payload: response.data,
      });
    });
  };
};
