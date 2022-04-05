import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const NewsScreen = () => {
  return (
    <View>
      <TouchableOpacity >
      <Icon name="theme-light-dark" size={24} color="#007FFF" />

      </TouchableOpacity>
      <Text>News  Screen</Text>
    </View>
  )
}

export default NewsScreen;