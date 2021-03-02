import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../utils/tools';
import LogoText from '../utils/logoText';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import TrackerScreen from '../componets/home/tracker';
import TrackerDetailScreen from '../componets/home/tracker/trackerDetail';
import HomeScreen from '../componets/home/events';
import EventDetailScreen from '../componets/home/events/eventsDetail';

export const Stack = createStackNavigator();
export const screenOptions = {
  headerTitleAlign: 'center',
  headerTintColor: Colors.red,
  headerTitle: () => <LogoText style={{fontSize: 25}} />,
  headerStyle: {
    backgroundColor: Colors.black,
    borderBottomColor: 'red',
    borderBottomWidth: 6,
    height: 50,
  },
};
const IconLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginLeft: 10}}>
      <Icon
        name="menufold"
        type="antdesign"
        color={Colors.white}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};
export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home_Screen"
      screenOptions={{
        ...screenOptions,
      }}>
      <Stack.Screen
        name="Home_Screen"
        component={HomeScreen}
        options={{headerLeft: () => <IconLeft />}}
      />
      <Stack.Screen name="Article_Screen" component={EventDetailScreen} />
    </Stack.Navigator>
  );
};

export const VideoStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Video_Screen"
      screenOptions={{
        ...screenOptions,
      }}>
      <Stack.Screen
        name="Video_Screen"
        component={TrackerScreen}
        options={{headerLeft: () => <IconLeft />}}
      />
      <Stack.Screen name="Videos_Screen" component={TrackerDetailScreen} />
    </Stack.Navigator>
  );
};
