import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeToTracker} from '../../../store/actions/action';
import {View, Text, ScrollView, ActivityIndicator, Image} from 'react-native';
import {Card, Button} from 'react-native-elements';

const TrackerScreen = ({navigation}) => {
  const tracker = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View style={{padding: 20}}>
        {tracker.map((e) => {
          return (
            <Card>
              <Card.Title>
                <Text> {e.NameEvents} </Text>
              </Card.Title>
              <Card.Image>
                <Image
                  source={{uri: 'https://picsum.photos/200/300'}}
                  style={{width: '100%', height: 200}}
                />
              </Card.Image>
              <Card.Divider />
              <Text>Venue : {e.Location} </Text>
              <Card.Divider />
              <Text>Paid : {e.Paid}</Text>
              <Card.Divider />
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five
              </Text>
              <Button
                title="Go To Detail"
                buttonStyle={{
                  padding: 10,
                  borderRadius: 20,
                  backgroundColor: 'black',
                }}
                containerStyle={{padding: 10}}
                onPress={() => navigation.navigate('Videos_Screen', {data: e})}
              />
              <Button
                title="Remove"
                buttonStyle={{
                  padding: 10,
                  borderRadius: 20,
                  backgroundColor: 'red',
                }}
                containerStyle={{padding: 10}}
                onPress={() => dispatch(removeToTracker(e))}
              />
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TrackerScreen;
