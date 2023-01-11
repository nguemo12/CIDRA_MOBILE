import * as React from "react"

import { Provider as PaperProvider } from 'react-native-paper';
//import Main from "./Main";
import {
  Provider
} from "react-redux";
import {
  store
} from "./src/stores/storeConfig";


import { NavigationContainer } from "@react-navigation/native"
import { RootStack } from "./src/routes/routes";



export default function App() {
  return (
     <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
   
      )
   
}