import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import authReducer from '../src/reducers/authReducer';
import loaderReducer from '../src/reducers/loaderReducer';
import propertiesReducer from '../src/reducers/propertiesReducer';
export default configureStore({
  reducer: {
    loader: loaderReducer,
    auth: authReducer,
    properties: propertiesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
