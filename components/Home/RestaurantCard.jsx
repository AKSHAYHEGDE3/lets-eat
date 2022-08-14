import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const RestaurantCard = ({ navigation, name, img, rating, review_count, phone, address }) => {

    return (
        <TouchableOpacity style={styles.RestaurantCard}
        onPress={()=>{
            navigation.navigate('RestaurantPage',{name,img,rating,review_count,phone,address})
        }}
        >
            <Image style={styles.RestaurantCardImg} source={{ uri: img }} />
            <View style={styles.RestaurantInfo}>
                <View style={{ width: '85%' }}>
                    <Text style={styles.RestaurantName}>
                        {name}
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
                        <Fontisto name="stopwatch" size={18} color="black" />
                        <Text style={{ opacity: 0.7, marginLeft: '3%' }}>45 mins</Text>
                    </View>
                </View>
                <View style={styles.RestaurantRatings}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{rating}</Text>
                    <AntDesign style={{ marginLeft: 3 }} name="star" size={16} color="white" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    RestaurantCard: {
        width: '90%',
        height: 200,
        marginHorizontal: '5%',
        borderRadius: 10,
        // boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.8)',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 5,
        marginVertical: 10,
        backgroundColor: 'white'
    },
    RestaurantCardImg: {
        height: '70%',
        width: '100%',
        borderRadius: 10,
    },
    RestaurantInfo: {
        paddingVertical: 5,
        paddingHorizontal: 8,
        display: 'flex',
        flexDirection: 'row'
    },
    RestaurantName: {
        fontSize: 22,
        fontWeight: '700'
    },
    RestaurantRatings: {
        height: 30,
        width: 53,
        backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: '2%'
    }
})

export default RestaurantCard