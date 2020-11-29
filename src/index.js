import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import theme from "./theme/theme";
import { persistor, store } from "./redux/store";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </ThemeProvider>
  </Provider>,
  rootElement
);
