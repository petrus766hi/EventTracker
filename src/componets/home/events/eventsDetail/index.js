import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Image, Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {addToTracker} from '../../../../store/actions/action';

const EventDetailScreen = ({route}) => {
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={{width: '100%', height: 200}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 30, fontWeight: '300'}}>
              {route.params.data.NameEvents}
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 18}}>
              Venue : {route.params.data.Location}
            </Text>
            <Text style={{fontSize: 18}}>{route.params.data.Paid}</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Button
              title="Add To Tracker"
              buttonStyle={{
                padding: 10,
                borderRadius: 20,
                backgroundColor: 'black',
              }}
              containerStyle={{padding: 50}}
              onPress={() => dispatch(addToTracker(route.params.data))}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EventDetailScreen;
