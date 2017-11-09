import React from 'react';
import { MapView } from 'expo';
import { ActivityIndicator, ListView, Text, View, StyleSheet } from 'react-native';

/*
commit: testing fetch calls to volta's api

function: grabbing the response from volta's
api and to see where the coordinates,
station name/address are located inside the 
response
*/

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentWillMount() {
    return fetch('https://api.voltaapi.com/v1/stations')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
          array: responseJson
        }, function() {
          // do something with new state
        });
        console.log(this.state.array[0].location.coordinates[0]);
      })
      .catch((error) => {
        console.error(error);
      });
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
