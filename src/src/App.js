import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Auth from "./Auth";
import Header from "./Header";
import { userConfig } from "./store/reducers/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userConfig());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Auth />
    </div>
  );
}

export default App;
