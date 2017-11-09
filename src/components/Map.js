/*
moved app.js renders to the map.js to test expo features are
working on mobile devices for iPhone and Android. and to make sure
the import and export modules works before devloping map component
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Map extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! Nice</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
