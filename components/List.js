
import { Text, FlatList, View,Button,StyleSheet, Dimensions } from 'react-native';

const List = ({puntos, closeModal}) => {
  return (
    <>
        <View style={ styles.list }>
            <FlatList
                data={ puntos.map( point => point.name )}
                renderItem={ ({item}) => 

                <View style={styles.item} >
                    <Text>{item}</Text>
                </View>
            }
                keyExtractor={ item => item }
            />
        </View>

        <View style={styles.button} >
            <Button
                onPress={ closeModal }
                title='Cerrar'
            />
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    list :{
        height : Dimensions.get('window').height - 250,

    },
    item:{
        justifyContent : 'center',
        borderBottomWidth : 3,
        borderColor : '#ccc',
        height : 50,
        padding : 15
    },
    button:{
        backgroundColor : '#fff',
        paddingBottom :15
    }
})

export default List