import { StyleSheet,Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps'

const Map = ({handleLongPress, puntos,points}) => {
  return (
    <MapView
      style={ styles.map }
      onLongPress={handleLongPress}
    >
      { points && puntos.map( point =>
          <Marker
            key={ point.name}
            title={point.name}
            coordinate={point.coordinate}
          />
        )}
    </MapView>
  )
}


const styles = StyleSheet.create({
    map:{
      height: Dimensions.get('window').height - 150,
      width: Dimensions.get('window').width
    },
  });

export default Map