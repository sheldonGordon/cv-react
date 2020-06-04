import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
} from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";

import { Spin, Layout, ConfigProvider } from "antd";
import frFR from "antd/es/locale/fr_FR";

import moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
);

const rrfConfig = {
  ...fbConfig,
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: "presence",
  sessions: "sessions",
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) {
    return (
      <div className="center">
        <Spin
          size="large"
          tip="Chargement..."
          style={{ textAlign: "center", marginTop: 200 }}
        />
      </div>
    );
  }
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Layout>
        <Layout.Content style={{ minHeight: "100vh" }}>
          <AuthIsLoaded>
            <ConfigProvider locale={frFR}>
              <App />
            </ConfigProvider>
          </AuthIsLoaded>
        </Layout.Content>
      </Layout>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
