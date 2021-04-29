import React, { useContext } from "react";
import MainNavigation from "./main";
import OnboardingNavigation from "./onboarding";
import { AppContext } from "../context/index";

function index() {
  const { appState: state } = useContext(AppContext);
  let isLoggedIn = false;

  return (
    <>
      {state.isLoggedIn && <MainNavigation />}
      {!state.isLoggedIn && <OnboardingNavigation />}
    </>
  );
}

export default index;
