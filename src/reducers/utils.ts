import { types } from "../components/topbar/actions";
const INIT_STATE = {
  darkMode: false,
};

const utils = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case types.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default utils;
