import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import {Button, Badge} from 'react-native-elements';
import {Colors} from './tools';
import LogoText from './logoText';
import {useDispatch} from 'react-redux';
import {changeAuth} from '../store/actions/action';
const customDrawer = (props) => {
  const optionPage = [
    {title: 'Events', location: 'Home'},
    {title: 'Tracking', location: 'Videos'},
  ];
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <LogoText />
      {optionPage.map((e, index) => (
        <Button
          key={index}
          title={e.title}
          onPress={() => props.navigation.navigate(e.location)}
          buttonStyle={{
            backgroundColor: Colors.black,
            borderBottomWidth: 1,
            borderBottomColor: Colors.black2,
          }}
          titleStyle={{width: '100%'}}
        />
      ))}
      <Button
        title="Logout"
        onPress={() => dispatch(changeAuth(false))}
        buttonStyle={{
          backgroundColor: Colors.black,
          borderBottomWidth: 1,
          borderBottomColor: Colors.black2,
        }}
        titleStyle={{width: '100%'}}
      />
    </DrawerContentScrollView>
  );
};

export default customDrawer;
