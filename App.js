import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default class App extends React.Component {
  state={
    myState: 'This is my state '
  }
 
  render(){
    return (
      <View style={styles.container}>
          <View style={styles.redbox}/>
          <View style={styles.bluebox}/>
          <View style={styles.blackbox}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height:600
  },
  redbox:{
    width:100,
    height:100,
    backgroundColor:'red'
  },
  bluebox:{
    width:100,
    height:100,
    backgroundColor:'blue'
  },
  blackbox:{
    width:100,
    height:100,
    backgroundColor:'black'
  },
});
