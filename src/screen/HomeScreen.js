import {Button, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/reducers/CounterReducer';
import {ApiCall} from '../redux/reducers/ApiReducer';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const data = useSelector(state => state.apireducer.data);
  const loader = useSelector(state => state.apireducer.loader);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <Button
        onPress={() => dispatch(increment())}
        title="Increment"
        color="#841584"
      />
      <Button
        onPress={() => dispatch(decrement())}
        title="Decrement"
        color="#841584"
      />
      <View style={{height: 50}} />
      {loader ? (
        <ActivityIndicator size="large" color="white" />
      ) : Object.keys(data).length > 0 ? (
        <Text style={styles.text}>{data.toString()}</Text>
      ) : (
        <Button onPress={() => dispatch(ApiCall())} title="API call" />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },
});
