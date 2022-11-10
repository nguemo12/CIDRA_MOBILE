import { createContext } from 'react'

export const AppContext = createContext({
    storedToken: {},
    setStoredToken: () => {},
    authUser: {},
    setAuthUser: () => {},
})

