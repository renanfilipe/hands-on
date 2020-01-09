import MainContainer from "./containers/MainContainer";
import React from "react";
import { UserProvider } from "./store";

const App: React.FC = () => {
  return (
    <UserProvider>
      <MainContainer />;
    </UserProvider>
  );
};

export default App;
