import React, {useState, useContext} from 'react';
import {useWindowDimensions, View, Text} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import {NewsContext} from '../API/Context';
import TopNavigation from '../TopNavigation';
import DiscoverScreen from './Screens/DiscoverScreen';
import NewsScreen from './Screens/NewsScreen';

const InshortTab = () => {
  const layout = useWindowDimensions(); //Hook used to adjust Height and width according to device screen
  const {index, setIndex} = useContext(NewsContext);

  const [routes] = useState([
    {key: 'first', title: 'Discover'},
    {key: 'second', title: 'News'},
  ]);

  const renderScene = SceneMap({
    //Tab-view
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};
export default InshortTab;
