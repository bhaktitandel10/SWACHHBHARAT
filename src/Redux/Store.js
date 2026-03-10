// A store is an immutable object tree in Redux. A store is a state container which holds the application's state.
// Redux can have only a single store in your application.
// Whenever a store is created in Redux, you need to specify the reducer.

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "./rootReducer";
import middleware from "./middleware";
import { applyMiddleware } from "redux";

const persistConfig = {
  key: "reducer",
  // storage: The storage engine to use.
  storage: storage,
  // whitelist: An array of reducer names to include in persistence.
  whitelist: ["login", "state"],
};
// persistReducer returns an enhanced reducer that wraps the rootReducer you pass in
const persistedReducer = persistReducer(persistConfig, reducer);

const configStore = (initialState = {}) => {
  // composeWithDevTools to set up the Redux DevTools Extension
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  return {
    // When creating your redux store, pass your createStore function a persistReducer that
    // wraps your app's root reducer. Once your store is created, pass it to the persistStore function,
    // which ensures your redux state is saved to persisted storage whenever it changes.
    persistor: persistStore(store),
    store,
  };
};

const { store, persistor } = configStore();
global.store = store;

export { store, persistor };
