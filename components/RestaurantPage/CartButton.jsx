import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const CartButton = ({qty,price,navigation,name}) => {
    
    return (
        <View style={styles.cartBar}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Checkout',{name:name})} >
                <Text style={{ color: 'white' }}>{`${qty} Item | $${price}`}</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>View Cart</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cartBar: {
        width: '100%',
        backgroundColor: 'white',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: 0,
    },
    button: {
        width: '80%',
        height: 35,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 6
    }
})

export default CartButton