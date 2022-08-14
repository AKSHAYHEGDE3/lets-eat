import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../../redux/reducers/cartReducer'
import { Entypo } from '@expo/vector-icons';


const Menu = ({ title, description, price, image, id }) => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const [quantity,setQuantity] = useState(0)


  const addToCart = () => {
    setQuantity(quantity+1)
    dispatch(addItem({ title, description, price, image, id }))
  }

  const removeFromCart = ()=>{
    setQuantity(quantity-1)
    dispatch(deleteItem({ title, description, price, image, id }))
  }

  return (
    <View style={styles.menuCard}>
      <View style={styles.menuDetails}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ opacity: 0.7, marginTop: 4 }}>{description}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>$ {price}</Text>
      </View>
      <View style={styles.menuRight}>
        <Image style={{ height: 80, width: '90%', borderRadius: 10 }}
          source={{ uri: image }}
        />
        {
          cart.foods.filter(food=>food.id === id).length < 1 ?
            <TouchableOpacity style={styles.addButton} onPress={addToCart}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#EF4F47' }}>
                ADD
              </Text>
            </TouchableOpacity> :
            <View style={styles.countButton}>
              <Entypo onPress={removeFromCart} name="minus" size={19} color="white" />
              <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>{quantity}</Text>
              <Entypo onPress={addToCart} name="plus" size={19} color="white" />
            </View>
        }

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menuCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    height: 160,
  },
  menuDetails: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    width: '70%',
  },
  menuRight: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: '90%',
    height: 40,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor:"#EF4F47",
    borderRadius: 10,
    backgroundColor: '#FFEDEF'
  },
  countButton: {
    width: '90%',
    height: 40,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#EF4F47'
  }
})

export default Menu