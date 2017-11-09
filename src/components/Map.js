import React from 'react';
import { MapView } from 'expo';
import { ActivityIndicator, ListView, Text, View, StyleSheet } from 'react-native';

/*
commit: testing mapview marker

function:
testing a mapview marker to make sure it works before
using a function to automatically put all
the volta station locations (from api) as
markers on map
*/

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
        <MapView.Marker
          coordinate={{latitude: 99, longitude: -150}}
          title={'test'}
          description={'test'}
        >
        </MapView.Marker>
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
