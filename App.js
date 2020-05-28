import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  const [outputText, setOutputText]= useState('Hello Cha, welcom to my first web reactnative application using expo cli !');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Say hi !" onPress={()=>setOutputText('The text is just changed!, this one is a simple')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
