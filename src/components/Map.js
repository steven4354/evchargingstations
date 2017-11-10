import React from 'react';
import { MapView } from 'expo';
import { Text, View, StyleSheet, Listview } from 'react-native';

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
          console.log('state set for isLoading, dataSource, array');
        });
        console.log(this.state.array[0].location.coordinates[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if(this.state.array != undefined){
      return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.array[99].location.coordinates[1],
            longitude: this.state.array[99].location.coordinates[0],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {
            this.state.array.map(marker => (
              <MapView.Marker
                key={marker.name}
                coordinate={{latitude: marker.location.coordinates[1], longitude: marker.location.coordinates[0]}}
                title={marker.street_address}
                description={"current status: " + marker.status}
              >
              </MapView.Marker>
            ))
          }
        </MapView>
      )
    }
    else{
      return(
        <View style={styles.container}>
          <Text>Loading Map ... </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
