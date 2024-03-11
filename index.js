import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Logger middleware
const logger = createLogger({
  // Customize options as needed
});

// Simple thunk middleware
// This is a simplified version of the redux-thunk middleware
const simpleThunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};

// Root reducer placeholder
// This should be replaced with the actual root reducer of your application
const rootReducer = (state = {}, action) => {
  // Handle actions
  return state;
};

// Store configuration with middlewares
const configureStore = () => {
  const middlewares = [simpleThunk, logger]; // Add other middlewares here
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middlewareEnhancer);
  return store;
};

// Export the store configuration
export default configureStore;
