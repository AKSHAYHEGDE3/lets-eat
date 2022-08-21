import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import OrderCard from '../components/Checkout/OrderCard'
import { Divider } from 'react-native-elements'
import { useSelector } from 'react-redux'
// LiPbVD5g4YiHevVhPqkQM7kP
const Checkout = ({ navigation,route }) => {

    const cart = useSelector(state => state.cart)
    const price = cart.price

    return (
        <SafeAreaView style={{ padding: 10 }}>
            {
                !(cart.foods.length < 1) ?
                    <>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 5 }}>Your Order</Text>
                        <Divider />
                        {
                            cart.foods.map((food) => {
                                return <View key={food.id}>
                                    <OrderCard food={food} />
                                    <Divider />
                                </View>
                            })
                        }
                        <View style={{
                            width: '80%',
                            padding: 10,
                            borderWidth: 1,
                            borderColor:'black',
                            borderRadius: 15,
                            marginHorizontal: '10%',
                            marginTop: 25,
                            
                        }}>
                            <View style={styles.billBar}>
                                <Text style={styles.billText}>Subtotal</Text>
                                <Text style={styles.billText}>{price.toFixed(2)}</Text>
                            </View>
                            <View style={styles.billBar}>
                                <Text style={styles.billText}>Discount</Text>
                                <Text style={styles.billText}>$10</Text>
                            </View>
                            <View style={styles.billBar}>
                                <Text style={styles.billText}>Tax</Text>
                                <Text style={styles.billText}>$2</Text>
                            </View>
                            <View style={styles.billBar}>
                                <Text style={styles.billText}>Delivery</Text>
                                <Text style={styles.billText}>$5</Text>
                            </View>
                            <Divider style={{ width: '90%' }} />
                            <View>
                                <TouchableOpacity style={styles.billBar}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total</Text>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>${(price - 10 + 2 + 5).toFixed(2)}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={{
                            marginTop: 20,
                            width: '80%',
                            marginHorizontal: '10%',
                            height: 40,
                            backgroundColor: 'black',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={()=>navigation.navigate('OrderCompleted',{total:(price - 10 + 2 + 5).toFixed(2),name:route.params.name})}
                        >
                            <Text style={{ color: 'white', fontSize: 22 }}>{`Place Order . $${(price - 10 + 2 + 5).toFixed(2)}`}</Text>
                        </TouchableOpacity>
                    </> :
                    <View style={styles.empty}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart is empty</Text>
                        <TouchableOpacity style={styles.homeBtn} onPress={() => navigation.navigate('Home')}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                Home
                            </Text>
                        </TouchableOpacity>
                    </View>
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    billBar: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },
    billText: {
        fontSize: 20,
        opacity: 0.7
    },
    empty: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeBtn: {
        backgroundColor: 'black',
        width: 80,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15
    }

})

export default Checkout