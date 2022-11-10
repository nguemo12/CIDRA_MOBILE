import * as React from "react"

import { Provider as PaperProvider } from 'react-native-paper';

import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native"
import {
  AppContext
} from './src/context/AppContext';
import {getAuthUser, getAuthToken} from './src/services/AsyncStorageMethods'
import Loader from "./src/Components/Loader";


import {AuthStack, RootStack} from "./src/routes/routes"
import { useState } from "react";

export default function App() {
  const [authReady, setAuthReady] = useState(false);
  const [storedToken, setStoredToken] = useState("")
  const [authUser, setAuthUser] = useState("")
  const [loading, setLoading] = useState(true);

  const checkAuthenticationStatus = async () => {

    const userToken = await getAuthToken()
    const userInfo = await getAuthUser()
    if (userToken !== null && userInfo !== null) {
      setStoredToken(userToken)
      setAuthUser(userInfo)
    } else {
      setStoredToken(null)
    }
  }
  checkAuthenticationStatus().then(() => {
    setAuthReady(true)
    setLoading(false)
  })



  if (authReady) {
    return (
        <AppContext.Provider value={{ storedToken, setStoredToken, authUser, setAuthUser }}>
          <NavigationContainer>
            <PaperProvider>
                {storedToken == null ? (
                  <AuthStack />
                ) : (
                  <RootStack />
                  )
                }
            </PaperProvider>
          </NavigationContainer>
        </AppContext.Provider>
      )
    
  } else {
    return (
      <Loader loading={loading} />
    )
    
  }
}