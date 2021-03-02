import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {Card, SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DataDummy} from '../../../utils/dataDummy';
import * as _ from 'lodash';
import Fuse from 'fuse.js';

const HomeScreen = ({navigation}) => {
  const [gridView, setGridView] = useState(false);
  const [data, setData] = useState(DataDummy);

  const [search, setSearch] = useState('');

  const changeViewList = () => {
    setGridView(false);
  };
  const changeViewGrid = () => {
    setGridView(true);
  };

  const getSearch = async (text) => {
    setSearch(text);
    if (text != '') {
      const fuse = new Fuse(data, {
        keys: ['NameEvents'],
      });
      const result = fuse.search(text);
      const dataFilter = result.map((items) => {
        return items.item;
      });
      if (dataFilter) {
        setData(dataFilter);
      } else {
        setData([]);
      }
    } else {
      setData(DataDummy);
    }
  };

  const renderCard = () => (
    <FlatList
      key={gridView ? 1 : 0}
      numColumns={gridView ? 2 : 1}
      data={data}
      renderItem={({item}) => (
        <View style={styles.imageHolder}>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.textViewHolder}
            onPress={() => navigation.navigate('Article_Screen', {data: item})}>
            <Text style={styles.textOnImage}>{item.NameEvents}</Text>
            {gridView ? null : (
              <>
                <Text style={styles.textOnImage}>
                  {item.Location.slice(0, 17)}
                </Text>
                <Text style={styles.textOnImage}>{item.Paid}</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      )}
    />
  );

  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 6, backgroundColor: 'white'}}>
          <SearchBar
            inputContainerStyle={{borderRadius: 10, backgroundColor: 'white'}}
            placeholder="Search Events"
            lightTheme={true}
            onChangeText={(e) => getSearch(e)}
            value={search}
            onClear={(e) => getSearch('')}
          />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: '#E1E8EE',
          }}>
          <TouchableOpacity
            style={{marginHorizontal: 1}}
            onPress={() => changeViewGrid()}>
            <Icon name="th-large" size={40} color={gridView ? 'red' : 'grey'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 5}}
            onPress={() => changeViewList()}>
            <Icon name="list" size={40} color={gridView ? 'grey' : 'red'} />
          </TouchableOpacity>
        </View>
      </View>
      {renderCard()}
    </>
  );
};

const styles = StyleSheet.create({
  imageHolder: {
    margin: 5,
    height: 200,
    flex: 1,
    position: 'relative',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  textViewHolder: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 10,
    paddingVertical: 13,
    alignItems: 'center',
  },
  textOnImage: {
    color: 'white',
  },
});

export default HomeScreen;
