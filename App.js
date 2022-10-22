import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Input, Button } from 'react-native-elements';
import { ListItem } from 'react-native-elements';

import React, { useState } from 'react';
import ListItemSwipeable from 'react-native-elements/dist/list/ListItemSwipeable';

export default function App() {


  const [shopingitem, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [shopingitems, setItems] = useState('');

  const renderItem = ({ item }) => (
    <ListItem.Swipeable
      rightContent={
        <Button
          title="Delete"
          icon={{ name: 'delete', color: 'white' }}
          buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
          onPress={() => deleteItem(item)}
        />
      }>
      <ListItem.Content>
        <ListItem.Title>{item.shopingitem}</ListItem.Title>
        <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem.Swipeable>
);

  const addItem = () => {

      setItems([...shopingitems, { shopingitem: shopingitem, amount: amount }]);

  }

  const deleteItem = (item) => {
    setItems(shopingitems.filter((i) => i !== item));
  }

  return (
    <View style={styles.container}>
      <Header

        centerComponent={{ text: 'SHOPPING LIST', style: { color: '#fff' } }}

      />

      <View style={styles.textFields}>
        <Input placeholder='Type Product' label='Product'
          onChangeText={shopingitem => setItem(shopingitem)} value={shopingitem} />
        <Input placeholder='Type Amount' label='Amount'
          onChangeText={amount => setAmount(amount)} value={amount} />
      </View>

      <View style={styles.buttons}>
        <Button raised icon={{ name: 'save' }} onPress={addItem} title="SAVE" />
      </View>

      <View style={styles.list}>
        <FlatList
          data={shopingitems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

    </View>
  );
}

//Instead of a CSS File use StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },

  textFields: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 180
  },

  buttons: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 150,
    paddingTop: 80
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  ShoppingFields: {
    flex: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },

  ShoppingListTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue"
  },
  list: {
    width: '90%',
    backgroundColor: 'white',
    marginTop: 20,
  },

});
