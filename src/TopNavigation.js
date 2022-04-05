import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  AntDesignIcons from 'react-native-vector-icons/AntDesign';

const TopNavigation = ({index, setIndex}) => {
  return (
    <View style={{...styles.container, backgroundColor: '282c35'}}>
      {index === 0 ? (
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Text style={{...styles.text, color: 'lightgrey'}}>
            <Icon name="theme-light-dark" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          {/* <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" /> */}
          <Icon name="arrow-left" size={15} color="#007FFF" />
          <Text style={{...styles.text, color: 'orange'}}> Discover</Text>
        </TouchableOpacity>
      )}
      <Text style={{...styles.center, color: 'white'}}>
        {index ? 'All News' : 'Discover'}
      </Text>
      {index ? (
        <TouchableOpacity style={styles.right}>
          <Text style={styles.text}>
            <AntDesignIcons name="reload1" size={24} color="white" />
            {/* <Icon name="reload1" size={24} color="#007FFF" /> */}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <Text style={{...styles.text, color: 'white'}}>All News</Text>
          <Icon name="arrow-right" size={15} color="#007FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: 'row',
    width: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  right: {
    width: 80,
    alignItems: 'flex-end',
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "teal" ,
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default TopNavigation;
