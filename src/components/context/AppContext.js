/* eslint-disable prettier/prettier */
import { createContext } from 'react'
import React from 'react'

export const AppContext = createContext({
    storedToken: {},
    setStoredToken: () => {},
})