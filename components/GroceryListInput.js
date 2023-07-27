import { View,
         Text,
         StyleSheet,
         Modal,
         Button,
         TextInput} from "react-native";
import { useState } from "react";

 function GroceryListInput(props) {

        const [inputGroceryItem, setInputGroceryItem] = useState('');

        function groceryItemInputHandler(enteredText) {
            setInputGroceryItem(enteredText);
        };

        function addItemHandler() {
            props.onAddItem(inputGroceryItem);
            setInputGroceryItem('');
        }


    return (
    <Modal
        visible={props.showModal}
        animationType="slide">
    <View style={styles.inputContainer}>
        <TextInput
            placeholder="Add your grocery list items"
            onChangeText={groceryItemInputHandler}
            value={inputGroceryItem}
            style={styles.textInput}
            placeholderTextColor={'#14FFEC'}
        />
    <View style={styles.buttonContainer}>
            <View style={styles.button} >
            <Button
                title='Cancel'
                color={'#14FFEC'}
                onPress={props.hideModal} />
            </View>
            <View style={styles.button} >
            <Button
                    title='Add Item'
                    onPress={addItemHandler}
                    color={ '#14FFEC'}   />
            </View>
            </View>
            </View>
            </Modal>
    );
};

export default GroceryListInput;

const styles = StyleSheet.create({

inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#14FFEC',
    borderRadius: 6,
    padding: 16,
    backgroundColor: '#212121',
    color: '#14FFEC'

},
textInput: {
    borderWidth: 1,
    borderColor: '#14FFEC',
    backgroundColor: '#212121',
    width: '90%',
    padding: 16,
    borderRadius: 6,
    marginBottom: 10,
    color: '#14FFEC',
    },
buttonContainer : {
    flexDirection: 'row'

},
button: {
    width: '25%',
    marginHorizontal: 8,

}


});