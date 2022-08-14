import { View, Text, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const RestaurantDetails = ({ name, img, rating, review_count, phone, address }) => {
    return (
        <View>
            <Image
                source={{ uri: img }}
                style={{ width: '100%', height: 180 }}
            />
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                padding: 10,
                alignItems: 'center'
            }}>
                <View style={{ width: '82%' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{name}</Text>
                    <Text style={{ marginTop: 5, opacity: 0.7, fontSize: 16 }}>{address}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                        <Entypo name="phone" size={22} color="blue" />
                        <Text style={{ marginLeft: 5, fontSize: 18 }}>{phone}</Text>
                    </View>
                </View>
                <View>
                    <View style={{
                        height: 40,
                        width: 60,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'green',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 2,
                            height: 2,
                        },
                        shadowOpacity: 0.7,
                        shadowRadius: 10,
                        elevation: 5,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{rating}</Text>
                        <AntDesign style={{ marginLeft: 3 }} name="star" size={16} color="white" />
                    </View>
                    <View style={{
                        width: 60,
                        height: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.8,
                        
                        elevation: 1,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }}>
                        <Text>{review_count}</Text>
                        <Text>Reviews</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RestaurantDetails