import { persistStore, persistReducer, FLUSH,
  REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { contactReducer, filterReducer } from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage"; // localStorage?

const persistConfig = {
  key: "root", // кореневий ключ для збереження даних
  storage,
};
const persistedContactReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    cont: persistedContactReducer,
    fil: filterReducer,
  },
  middleware: (getDefMW) => getDefMW({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);