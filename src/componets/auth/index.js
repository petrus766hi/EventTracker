import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {changeAuth} from '../../store/actions/action';
import {showMessage} from 'react-native-flash-message';
import {Input, Button} from 'react-native-elements';
import LogoText from '../../utils/logoText';
import {Colors} from '../../utils/tools';

const AuthScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => console.log('xxx', state));

  const goToNextPage = (value) => {
    if (value.username) {
      showMessage({
        message: `Selemat Datang ${value.username}`,
        description: `Ini Hanya Notif Saja Ya ${value.username}`,
        type: 'success',
      });
      dispatch(changeAuth(false));
    }
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: Colors.red}}>
      <View style={{padding: 40, alignItems: 'center'}}>
        <LogoText />
        <Formik
          initialValues={{
            username: '',
          }}
          validationSchema={Yup.object({
            username: Yup.string().required('The username is required'),
          })}
          onSubmit={(values) => goToNextPage(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => {
            return (
              <>
                <Input
                  placeholder="Username"
                  leftIcon={{
                    type: 'antdesign',
                    name: 'user',
                    color: Colors.white,
                  }}
                  inputStyle={{fontSize: 15, color: Colors.white}}
                  placeholderTextColor={Colors.grey}
                  inputContainerStyle={{
                    borderBottomWidth: 3,
                    borderBottomColor: Colors.black,
                  }}
                  renderErrorMessage={errors.username && touched.username}
                  errorMessage={errors.username}
                  errorStyle={{color: Colors.black}}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                <Button
                  title={'Login'}
                  buttonStyle={{
                    backgroundColor: Colors.black,
                    marginTop: 20,
                  }}
                  titleStyle={{width: '100%'}}
                  onPress={() => handleSubmit()}
                />
              </>
            );
          }}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default AuthScreen;
