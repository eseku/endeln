import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

const AppContext = createContext({});

function Provider(props) {
  const [appState, appDispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, Provider };
