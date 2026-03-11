import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import invariant from "redux-immutable-state-invariant";

const middleware = [thunk];

if (import.meta.env.DEV) {
  middleware.push(invariant());
  middleware.push(createLogger({ collapsed: true }));
}

export default middleware;