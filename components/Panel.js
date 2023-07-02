import { StyleSheet,Dimensions, Button, View,Text } from 'react-native';

const Panel = ({handleLista, title,togglePoints}) => {
  return (
    <>
    <Text>Manten Pulsado Cualquier Punto del Mapa</Text>
    <View style={styles.panelView}>
        
        <Button title={title} onPress={handleLista} />
        <Button title='Mostrar/Ocultar' onPress={togglePoints}/>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
    panelView : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        gap : 25
    }
  });

export default Panel