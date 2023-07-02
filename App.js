
import { StyleSheet, Button, View, Alert, Text} from 'react-native';
import Map from './components/Map';
import ModalMap from './components/ModalMap';
import Panel from './components/Panel';
import InputMap from './components/InputMap';
import { useState } from 'react';
import List from './components/List';

export default function App() {

  const [ puntos, setPuntos ] = useState([])
  const [nombreInput, setNombreInput ] = useState('')
  const [ puntoTemporal, setPuntoTemporal ] = useState({})
  const [modal,  setModal ] = useState(false)
  const [ visibility, setVisibility ] = useState('new_punto')
  const [ points ,setPoints ] = useState(true)

  const togglePoints = () => setPoints(!points)

  const handleLongPress = ({nativeEvent}) => {
    setVisibility('new_punto')
    setPuntoTemporal(nativeEvent.coordinate)
    setModal(true)
  }

  const handleChangeText = e => {
    setNombreInput(e)
  }


  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemporal, name: nombreInput }
    setPuntos(puntos.concat(newPunto))
    setModal(false)
    setNombreInput('')
  }

  if( puntos.length == 0  ){
    //Alert.alert('test', 'ok')
  }


  const handleLista = () => {
    setVisibility('all_puntos')
    setModal(true)
  }


  return (
    <View style={styles.container}>
      <Map
        handleLongPress={ handleLongPress }
        puntos={puntos}
        points={points}
      />
      <ModalMap
        visibility={modal}
      >
        { visibility === 'new_punto' 
          ?
          <>
          <View style={styles.form}>
            <InputMap
                title='Nombre'
                placeholder = 'Introduce Coordenada Inicial/Final' 
                onChangeText={ handleChangeText }
            />
          </View>
          <View style={styles.formButton}> 
              <Button
                style={ styles.map_button }
                title='Aceptar'
                onPress={ handleSubmit }
              />
          </View>
          </>
          :
            <List
              puntos={puntos}
              closeModal={ () => setModal(false) }
            />
        }
      </ModalMap>
      <Panel
        handleLista={handleLista}
        title='Lista de Ubicaciónes'
        togglePoints={togglePoints}
      />
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
   map_button : {
    marginTop: 10,
    color: 'red',
    borderRadius : 10
  },
  formButton : {
    padding : 15,
    marginTop : 30
  },
  form: {
    padding :10
  }
});
