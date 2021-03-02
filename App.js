import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect} from 'react-redux';
import CustomDrawer from './src/utils/customDrawer';
import {Colors} from './src/utils/tools';
import {Stack, HomeStack, VideoStack, screenOptions} from './src/routes/stacks';

const Drawer = createDrawerNavigator();

import AuthScreen from './src/componets/auth';
import VideosScreen from './src/componets/home/videos';

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerStyle={{backgroundColor: Colors.black}}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Videos" component={VideoStack} />
    </Drawer.Navigator>
  );
};

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.user.isAuth ? (
            <>
              <Stack.Screen
                name="Test"
                component={DrawerNav}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="VideosScreen"
                component={VideosScreen}
                options={{
                  ...screenOptions,
                  headerBackTitleVisible: false,
                }}
              />
            </>
          ) : (
            <Stack.Screen
              name="AuthScreen"
              component={AuthScreen}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const mapStateToProps = (state) => ({user: state.user});
export default connect(mapStateToProps)(App);
