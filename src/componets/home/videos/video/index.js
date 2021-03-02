import React from 'react';
import {View, Text, ScrollView, Image, ActivityIndicator} from 'react-native';

const TrackerDetailScreen = ({route}) => {
  return (
    <ScrollView>
      <View>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={{width: '100%', height: 200}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={{padding: 10}}>
          <View style={{marginTop: 10, alignSelf: 'center'}}>
            <Text style={{fontSize: 30, fontWeight: '300'}}>
              {route.params.data.NameEvents}
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 18}}>
              Venue : {route.params.data.Location}
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 18}}>Paid : {route.params.data.Paid}</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TrackerDetailScreen;
