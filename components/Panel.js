import { StyleSheet,Dimensions, Button, View } from 'react-native';

const Panel = () => {
  return (
    <View style={styles.panelView}>
        <Button title='Lista de Ubicaciónes'/>
        <Button title='Mostrar/Ocultar'/>
    </View>
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