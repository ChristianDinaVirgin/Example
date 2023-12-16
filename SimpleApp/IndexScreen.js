import React from 'react';
import { View, Text, Button } from 'react-native';

function IndexScreen({ navigation }) {
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home Page')} />
      <Button title="Go to About" onPress={() => navigation.navigate('About Page')} />
    </View>
  );
}

export default IndexScreen;
