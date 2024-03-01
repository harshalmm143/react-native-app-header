import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons, Entypo } from "react-native-vector-icons";

const { width, height } = Dimensions.get("screen");

const AppHeader = ({
  headerType,
  headerColor,
  headerStyle,
  title,
  titleColor,
  firstIcon,
  firstonClick,
  secondIcon,
  secondonClick,
  opensideMenu,
  onBack,
  iconColor,
  logo,
}) => {
  let headerContent;

  switch (headerType) {
    case "MainHeader":
      headerContent = (
        <View style={styles.headerView}>
          <Text style={[styles.title, { color: titleColor, fontWeight: 600 }]}>
            {title}
          </Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={firstonClick}
              style={styles.icon}
              activeOpacity={0.6}
            >
              {firstIcon}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={secondonClick}
              style={styles.icon}
              activeOpacity={0.6}
            >
              {secondIcon}
            </TouchableOpacity>
          </View>
        </View>
      );
      break;
    case "SubHeader":
      headerContent = (
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={onBack}
            style={styles.backButton}
            activeOpacity={0.6}
          >
            <Ionicons name="arrow-back-sharp" size={23} color={iconColor} />
            <Text
              style={[styles.title, { color: titleColor, fontWeight: 600 }]}
            >
              {title}
            </Text>
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={firstonClick}
              style={styles.icon}
              activeOpacity={0.6}
            >
              {firstIcon}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={secondonClick}
              style={styles.icon}
              activeOpacity={0.6}
            >
              {secondIcon}
            </TouchableOpacity>
          </View>
        </View>
      );
      break;
    case "LogoHeader":
      headerContent = (
        <View style={styles.headerView}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={opensideMenu}
              style={styles.menuButton}
              activeOpacity={0.6}
            >
              <Entypo name="menu" size={32} color={iconColor} />
            </TouchableOpacity>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={firstonClick}
              style={styles.icon}
              activeOpacity={0.6}
            >
              {firstIcon}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={secondonClick}
              style={styles.icon}
              activeOpacity={0.6}
            >
              {secondIcon}
            </TouchableOpacity>
          </View>
        </View>
      );
      break;
    default:
      headerContent = null;
  }

  return (
    <SafeAreaView
      style={[styles.header, headerStyle, { backgroundColor: headerColor }]}
    >
      {headerContent}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width,
    height: height * 0.07,
    borderBottomColor: "gray",
    borderBottomWidth: 0.4,
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 19,
    paddingHorizontal: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    paddingHorizontal: 9,
  },
  menuButton: {
    marginRight: 10,
  },
  logo: {
    width: 145,
    height: 35,
  },
});

export default AppHeader;
