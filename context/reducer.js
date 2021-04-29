import colors from "../constants/colors";

export const initialState = {
  ...colors,
  isLoggedIn: false,
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "sw-color":
      return {
        ...state,
      };

    case "login":
      return {
        ...state,
        isLoggedIn: true,
      };

    case "logout":
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
