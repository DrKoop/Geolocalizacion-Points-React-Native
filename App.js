
import { StyleSheet, Text, View} from 'react-native';
import Map from './components/Map';
import ModalMap from './components/ModalMap';
import Panel from './components/Panel';

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
      <ModalMap/>
      <Panel/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
