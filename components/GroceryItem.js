import {
        StyleSheet,
        Button,
        View,
        Text,
        Pressable,
         } from "react-native";




export default function ShoppingListInput(props) {;

    return (
        <Pressable
            android_ripple={{color: '#0D7377'}}
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}>
        <View style={styles.items}>
            <Text style={styles.itemText}>
                {props.text}
            </Text>
        </View>
            </Pressable>
    );
 }


const styles = StyleSheet.create({

    items: {
        margin: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#14FFEC',
        backgroundColor: '#323232',
        borderRadius: 6,
        justifyContent: 'center',

    },
    itemText: {
        color: '#14FFEC',
    },
    pressedItem: {
        opacity: 0.5,
      }
});