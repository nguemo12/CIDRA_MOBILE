import React, { useEffect } from "react";
import LoginScreen from "./src/screens/AuthScreeen/LoginScreen/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./src/stores/reducers/user.reducer";
import { RootStack } from "./src/routes/routes";
import { getAuthToken, getAuthUser } from "./src/services/AsyncStorageMethods";

const Main = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
    useEffect(() => {
        getAuthUser().then((userResponse) => {
            if (userResponse != null) {
                getAuthToken().then((response) => {
                    if (response != null) {
                        dispatch(
                            login(userResponse)
                        );
                    } else {
                        dispatch(logout());
                    }
                })
            } else {
                dispatch(logout());
            }
        })
  }, []);
  return user ? <RootStack /> : <LoginScreen />;
};

export default Main;
