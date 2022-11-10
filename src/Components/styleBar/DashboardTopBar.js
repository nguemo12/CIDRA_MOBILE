/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../services/methods/authentication";
import {
    selectUser,
    logout
} from "../../stores/reducers/user.reducer";
import Icons from '../icons'
import Loader from "../Loader";

const { width } = Dimensions.get("screen");

const NORMAL_TAB_ITEM_WIDTH = width * 0.25;


const TabBarIndicator = ({ state }) => {
  const [translateValue, setTranslateValue] = useState(new Animated.Value(NORMAL_TAB_ITEM_WIDTH));

  const [itemWidth, setItemWidth] = useState(NORMAL_TAB_ITEM_WIDTH);

  useEffect(() => {
    slide();
  }, [state]);

  const slide = () => {
    setItemWidth(NORMAL_TAB_ITEM_WIDTH);
    const toValue = NORMAL_TAB_ITEM_WIDTH + ((state.index - 1) * NORMAL_TAB_ITEM_WIDTH);
    Animated.timing(translateValue, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: itemWidth,
        borderBottomColor: "white",
        borderBottomWidth: 3,
        bottom: 0,
        transform: [{ translateX: translateValue }]
      }}
    />
  )
}

const DashboardTopBar = ({
        state,
        descriptors,
        navigation,
        position
    }) => {
    const authUser = useSelector(selectUser);
    const dispatch = useDispatch();
    const [page, setPage] = useState("Dashboard");
    const [loading, setLoading] = useState(false)

    const onLogout = () => {
        setLoading(true)

        logoutAction().then(() => {
            dispatch(logout());
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <View style={styles.container}>
            <Loader loading={loading} />
            
            <View style={styles.header}>
                <Image source={Icons.category} style={{ width: 30, height: 30 }} />
                <View style={styles.text}>
                    <Text style={styles.name}>Hello, { authUser.name }</Text>
                    <Text style={styles.page}>{page}</Text>
                </View>                
                <TouchableOpacity onPress={() => onLogout()}>
                    <Image source={Icons.logout}  style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />            
                </TouchableOpacity>
            </View>
        
        <View style={{ flexDirection: "row" }}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            
            const icon = options.icon
            const name = options.name

            const isFocused = state.index === index;
            const tabBarItemWidth = NORMAL_TAB_ITEM_WIDTH;

            const onPress = () => {
                setPage(name)

                const event = navigation.emit({
                    type: "tabPress",
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                    // The `merge: true` option makes sure that the params inside the tab screen are preserved
                    navigation.navigate({ name: route.name, merge: true });
                }
            };

            const onLongPress = () => {
                setPage(name)

                navigation.emit({
                    type: "tabLongPress",
                    target: route.key,
                });
            };

            return (
            <TouchableOpacity
                key={route.name}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                width: tabBarItemWidth,
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 5,
                height: 40,
                }}
            >
                <Animated.View>
                    <Image source={icon} style={{width : 20, height: 20}} />
                </Animated.View>
            </TouchableOpacity>
            );
        })}
        <TabBarIndicator state={state} />
        </View>
      </View>
  );
};
export default DashboardTopBar;

const styles = StyleSheet.create({
    container: {
            width: "100%",
            height: 150,
            backgroundColor: "#003D79"

    },
    header: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center", 
        width: "100%",
        paddingHorizontal: 10
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
    }, 
    name: {
        color: "#379AE1",
        fontSize: 18
    },
    page: {
        fontSize: 22,
        color: "white",
        fontWeight: "bold"
    }
})
