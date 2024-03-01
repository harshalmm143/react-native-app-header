# react-native-app-header

React Native App Header is a customizable component for React Native applications that allows you to easily implement a header bar at the top of your app screens. This header can contain titles, icons, or any other elements.

## Installation

You can install react-native-app-header via npm by running the following command in your React Native project directory:

```bash
  npm install react-native-app-header
```

## MainHeader Usage

```javascript
import AppHeader from 'react-native-app-header'
import { FontAwesome } from "react-native-vector-icons";


function App({navigation}) {
  return <AppHeader
          headerType="MainHeader"
          title="Home"
          headerColor="red"
          iconColor="white"
          titleColor="white"
           firstIcon={
            <FontAwesome name="plus-square-o" size={24} color="white" />
          }
          firstonClick={() => navigation.navigate("Help")}
          secondIcon={
            <FontAwesome name="question-circle-o" size={24} color="white" />
          }
          secondonClick={()=>navigation.navigate("AddUser")}
          />}
        />
}
```

## SubHeader Usage

```javascript
import AppHeader from 'react-native-app-header'
import { FontAwesome } from "react-native-vector-icons";


function App({navigation}) {
  return <AppHeader
          headerType="SubHeader"
          onBack={()=>navigation.goBack()}
          title="About"
          headerColor="red"
          iconColor="white"
          titleColor="white"
           firstIcon={
            <FontAwesome name="plus-square-o" size={24} color="white" />
          }
          firstonClick={() => navigation.navigate("Help")}
          secondIcon={
            <FontAwesome name="question-circle-o" size={24} color="white" />
          }
          secondonClick={()=>navigation.navigate("AddUser")}
          />}
        />
}
```

## LogoHeader Usage

```javascript
import AppHeader from 'react-native-app-header'
import { FontAwesome } from "react-native-vector-icons";
import LOGO from '../assets/logo.png'


function App({navigation}) {
  return <AppHeader
          headerType="LogoHeader"
          logo={LOGO}
          headerColor="red"
          iconColor="white"
           firstIcon={
            <FontAwesome name="plus-square-o" size={24} color="white" />
          }
          firstonClick={() => navigation.navigate("Help")}
          secondIcon={
            <FontAwesome name="question-circle-o" size={24} color="white" />
          }
          secondonClick={()=>navigation.navigate("AddUser")}
          />}
        />
}
```

## Props

- **headerType** : Type of header to render (MainHeader, SubHeader, or LogoHeader).
- **headerColor** : Background color of the header.
- **headerStyle** : Additional styles to apply to the header.
- **title** : Text to display as the header title.
- **titleColor** : Color of the header title.
- **firstIcon** : Icon component for the first action.
- **firstonClick** : Callback function for the first action.
- **secondIcon** : Icon component for the second action.
- **secondonClick** : Callback function for the second action.
- **opensideMenu** : Callback function to open the side menu (applicable only for LogoHeader).
- **onBack** : Callback function to handle the back action (applicable only for SubHeader).
- **iconColor**: Color of the icons.
- **logo** : Image source for the logo (applicable only for LogoHeader).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository: react-native-app-header.

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Contact

For any inquiries or support, you can reach out to the project maintainers via harshalmm143@gmail.com.

## Authors

- [@harshalmm143](https://www.github.com/harshalmm143)
