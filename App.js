import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screen/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

const App = () => {
  // console.log(store.getState());
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <HomeScreen />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
