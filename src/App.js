import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store/store";

import { BrowserRouter } from "react-router-dom";
import Routes from "./app/router/Routes";
import { PersistGate } from "redux-persist/integration/react";
import SplashLoading from "./app/component/SplashLoading";
function App() {
  return (
    <Provider store={store} loading={<SplashLoading />}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
