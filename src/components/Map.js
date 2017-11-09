import React from 'react';
import { MapView } from 'expo';
import { ActivityIndicator, ListView, Text, View, StyleSheet } from 'react-native';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  render() {
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 99,
            longitude: -150,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        </MapView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
