import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Header = ({activeTab,setActiveTab}) => {
    return (
        <View style={styles.header}>
            <HeaderItems text={"Delivery"} activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderItems text={"Pickup"} activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        padding: '2%',
    }
})

export default Header

const HeaderItems = ({ text, activeTab, setActiveTab }) => {

    return (
        <TouchableOpacity style={activeTab === text ? {
            marginLeft: '2%',
            marginRight: '2%',
            paddingVertical: 5,
            paddingHorizontal: 15,
            backgroundColor: 'black',
            borderRadius: 30
        } : {
            marginLeft: '2%',
            marginRight: '2%',
            padding: '3%',
            backgroundColor: 'white',
        }}
            onPress={() => setActiveTab(text)}
        >
            <Text style={activeTab === text ? {
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                marginBottom:4
            } : {
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black'
            }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}