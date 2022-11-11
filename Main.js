import React, { useEffect, useState } from "react";
import LoginScreen from "./src/screens/AuthScreeen/LoginScreen/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./src/stores/reducers/user.reducer";
import { RootStack, AuthStack } from "./src/routes/routes";
import { getAuthToken, getAuthUser } from "./src/services/AsyncStorageMethods";
import Loader from "./src/Components/Loader";

const Main = () => {
  const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [userVerified, setUserVerified] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getAuthUser().then((userResponse) => {
            if (userResponse != null) {
                getAuthToken().then((response) => {
                    if (response != null) {
                        dispatch(
                            login(userResponse)
                        );
                        setLoading(false)
                    } else {
                        setUserVerified(true)
                        setLoading(false)
                        dispatch(logout());
                    }
                })
            } else {
                setLoading(false)
                dispatch(logout());
            }
        })
    }, []);
    if (!loading) {
        return user ? <RootStack /> : <AuthStack userVerified={userVerified} />;
    } else {
        return <Loader loading={loading} />
    }
};

export default Main;
