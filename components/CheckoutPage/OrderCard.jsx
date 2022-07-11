import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../../redux/reducers/cartReducer'
import { Entypo } from '@expo/vector-icons';

const OrderCard = ({food}) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItem({ title:food.title, description:food.description, price:food.price, image:food.image, id:food.id }))
      }
    
      const removeFromCart = ()=>{
        dispatch(deleteItem({  title:food.title, description:food.description, price:food.price, image:food.image, id:food.id}))
      }

    return (
        <View style={styles.orderCard}>
            <View style={{maxWidth:'40%',width:'40%' }}>
            <Text style={{ fontWeight: 'bold'}}>{food.title}</Text>
            <Text>{`($${food.price})`}</Text>
            </View> 
            <View style={styles.countButton}>
                <Entypo onPress={removeFromCart} name="minus" size={19} color="white" />
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>{food.quantity}</Text>
                <Entypo onPress={addToCart} name="plus" size={19} color="white" />
            </View>
            <Text style={{ fontWeight: 'bold' }}>{food.total_cost.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    orderCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
        paddingHorizontal: 10,
        backgroundColor:'white'
    },
    countButton: {
        width: 100,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#EF4F47'
      }
})

export default OrderCard