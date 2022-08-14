import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const BottomTabs = () => {
    return (
        <View style={styles.bottomTabs}>
            <Tabs icon="home" text="Home" />
            <Tabs icon="search" text="Browse" />
            <Tabs icon="shopping-cart" text="Basket" />
            <Tabs icon="user" text="Account" />
        </View>
    )
}

const styles = StyleSheet.create({
    bottomTabs: {
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 5,
    },

})

const Tabs = (props) => {
    return (
        <TouchableOpacity>
            <View>
            <FontAwesome5
                name={props.icon}
                size={25}
                style={{
                    marginBottom: 3,
                    alignSelf: "center",
                }}
            />
            <Text>{props.text}</Text>
            </View>
            
        </TouchableOpacity>

    )
}

export default BottomTabs