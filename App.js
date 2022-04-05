import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Context from './src/API/Context';

import InshortTab from './src/Components/InshortTab';

function App() {
  return (
    <View style={{...styles.container, backgroundColor: '#282C35 '}}>
      <InshortTab />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
    return(
<Context>
    <App/>
</Context>

    );
    };