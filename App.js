import { StatusBar } from 'expo-status-bar';
import {
          StyleSheet,
          Text,
          View,
          Button,
          FlatList,
          Image,
} from 'react-native';
import { useState } from 'react';
import GroceryListInput from './components/GroceryListInput';
import GroceryItem from './components/GroceryItem';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [groceryItems, setGroceryItems] = useState([]);


  function startAddGroceryItemHandler() {
    setModalIsVisible(true);
  }

  function endAddGroceryItemHandler() {
    setModalIsVisible(false);
  }

  function addGroceryItemHandler(enteredGroceryItem) {
    setGroceryItems((currentGroceryItems) => [
      ...currentGroceryItems,
      {text: enteredGroceryItem,
      key: Math.random().toString()},
    ]);
    endAddGroceryItemHandler();
  }

    function deleteItemHandler(key) {
      setGroceryItems( (groceryItems) => {
        return groceryItems.filter((item) => item.key !== key);
      })
    }


  return (
    <>
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <View style={styles.imageContainer} >
      <Image
        source={require('./assets/cart.png')}
        resizeMethod='resize'
        resizeMode='cover'
        tintColor={'#14FFEC'}
        />
      </View>

      <Button
          title='Add Grocery Item'
          color="#14FFEC"
          onPress={startAddGroceryItemHandler} />
      <GroceryListInput
        showModal={modalIsVisible}
        onAddItem={addGroceryItemHandler}
        hideModal={endAddGroceryItemHandler}
      />
      <View style={styles.itemsContainer}>
        <FlatList
          data={groceryItems}
          renderItem={(itemData) => {
            return (
              <GroceryItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={deleteItemHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
         />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: '#212121',
    paddingHorizontal: 16,
    color: "#14FFEC"

  },
  itemsContainer :{
    flex: 6,
    color: '#14FFEC'
  },
  imageContainer: {
   justifyContent: 'center',
   alignItems: 'center',
   margin: 20,


  }

});
