import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { Keyboard } from 'react-native'


const SearchBar = ({ setPlace }) => {

    const [search, setSearch] = useState([])
    const [text, setText] = useState('')

    const searchLocation = (e) => {
        setText(e.target.value)
        const ap = 'pk.13a8503774fb2575df2c127933c04393'
        axios.get(`https://us1.locationiq.com/v1/search?key=${ap}&q=${e.target.value}&format=json`)
            .then(res => setSearch(res.data))
            .catch(err => console.log(err))
    }

    const setLocation = (place) => {
        setPlace(place);
        setText('')
        setSearch([]);
    }

    // console.log(search);

    return (
        <View>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: "#eee",
                borderRadius: 20,
                fontWeight: "700",
                marginTop: 7,
                marginHorizontal: 10,
                padding: 5,
                height: 40
            }}>
                <Ionicons name="location-sharp" size={24} color="black" />

                <TextInput
                    placeholder="Search"
                    onSubmitEditing={Keyboard.dismiss}
                    style={{ marginLeft: 5, paddingHorizontal: 5, width: '80%' }}
                    value={text}
                    onChange={(e) => searchLocation(e)}
                />
                <FontAwesome name="search" size={24} color="black" />
            </View>

            {
                search.length > 0 ?
                    <View>
                        {search.map(place => {
                            return <TouchableOpacity style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 1,
                                borderBottomColor: 'lightgrey',
                                paddingVertical: 5,
                                paddingHorizontal: 4,
                                minHeight: 15
                            }}
                                onPress={() => setLocation({ longitude: place.lon, latitude: place.lat })}
                            >
                                <Text>{place.display_name}</Text>
                            </TouchableOpacity>
                        })}
                    </View> : <Text></Text>
            }

        </View>
    )

}

export default SearchBar

