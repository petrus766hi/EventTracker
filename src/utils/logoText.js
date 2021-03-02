import React from 'react';
import {View, Text} from 'react-native';

const LogoText = (props) => {
  return (
    <Text
      style={{
        fontFamily: 'Monoton-Regular',
        color: '#ffffff',
        fontSize: 50,
        alignSelf: 'center',
        ...props.style,
      }}>
      EVENTS
    </Text>
  );
};

export default LogoText;
