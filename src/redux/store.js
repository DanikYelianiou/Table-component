import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './reducers';
import storageSession from 'redux-persist/lib/storage/session';

const reducer = persistReducer(
    {
        key: 'rrsb',
        storage: storageSession,
    },
    rootReducer,
  );

const store = createStore(reducer);
const persistor = persistStore(store);

export { store, persistor };
