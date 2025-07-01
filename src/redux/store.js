import { persistStore, persistReducer } from "redux-persist";
import { contactReducer, filterReducer } from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage"; // localStorage?

const persistConfig = {
  key: "root", // кореневий ключ для збереження даних
  storage,
};
// const persistedContactReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    // cont: persistedContactReducer,
    cont: contactReducer,
    fil: filterReducer,
  },
  middleware: (getDefMW) => getDefMW({ // currently does nothing
    serializableCheck: {
      ignoredActions: [
        "persist/FLUSH", "persist/REHYDRATE",
        "persist/PAUSE", "persist/PERSIST",
        "persist/PURGE", "persist/REGISTER" // maybe you dont need all of these?
      ],
    },
  }),
});

// export const persistor = persistStore(store);