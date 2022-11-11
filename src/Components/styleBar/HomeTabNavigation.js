/* eslint-disable prettier/prettier */
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import AppRoutes from "../../routes/routeNames";
import Icons from "../icons";

function HomeTabNavigation({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const ImageIcon = (route) => {
          switch (route.name) {
            case AppRoutes.DashboardTopTab:
              return !isFocused ? <Image style={styles.image} source={Icons.homeWhite} /> : <Image style={styles.image} source={Icons.homeDark} />;
            case AppRoutes.AppointmentStack:
              return !isFocused ? <Image style={styles.image} source={Icons.appointmentWhite} /> : <Image style={styles.image} source={Icons.appointmentDark} />;
            case AppRoutes.VideoConferenceScreen:
              return !isFocused ? <Image style={styles.image} source={Icons.videoWhite} /> : <Image style={styles.image} source={Icons.videoDark} />;
            case AppRoutes.SettingStack:
              return !isFocused ? <Image style={styles.image} source={Icons.settingWhite} /> : <Image style={styles.image} source={Icons.settingDark} />;
            default:
              break;
          }
        };

        return (
          <TouchableOpacity
            key={`navbaricon-${index}`}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            {ImageIcon(route)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default HomeTabNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#003D79",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
  }
});
