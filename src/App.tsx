import { ConfigProvider } from "antd";
import fa_IR from "antd/es/locale/fa_IR";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./redux/store";
import Router from "./utils/router/router";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConfigProvider locale={fa_IR}>
          <Router />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
