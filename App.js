import { Text } from 'react-native';
import { Provider } from 'react-redux';
import store, { persistor } from "./src/Store/Store";
import RoutesPage from './src/Routes/RoutesPage';
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor} loading={<Text>Loading</Text>} >
        <RoutesPage />
      </PersistGate>
    </Provider>
  );
}
