import { StyleSheet, Text, View, Modal } from 'react-native';

const ModalMap = () => {
  return (
    <Modal
        animationType='fade'
        transparent={true}
        visible={ true }
   >
     <View style={ styles.center } >
       <View style={styles.modalView}>
         <Text>Welcome Koop</Text>
       </View>
     </View>
   </Modal>
  )
}

const styles = StyleSheet.create({
    center : {
      flex : 1,
      justifyContent :'center',
      alignItems : 'center'
    },  
    modalView :{
      backgroundColor : '#fff',
      borderRadius : 4,
      padding : 20,
      shadowColor : '#000',
      shadowOffset :{
        width : 0,
        height : 3
      }
    },
  });

export default ModalMap