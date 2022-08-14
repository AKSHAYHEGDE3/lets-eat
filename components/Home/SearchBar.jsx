import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { Keyboard } from 'react-native'


const SearchBar = ({ setPlace }) => {

    const [text, setText] = useState('');
    const [search, setSearch] = useState(null);

    const searchLocation = () => {
        const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
            params: { query: text, lang: 'en_US', units: 'km' },
            headers: {
                'X-RapidAPI-Key': '00534f03e2msh699ff151af7e151p19cf61jsn09e94e390681',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };
        //   axios.get(options.url,options.params,options.headers)
        //   .then(response=>console.log(response.data.data.Typeahead_autocomplete.results[0].detailsV2))
        //   .catch(err=>console.log(err))
        axios.request(options).then(function (response) {
            // console.log(response.data.data?.Typeahead_autocomplete.results[0].detailsV2);
            if (response.data.data?.Typeahead_autocomplete.results[0].detailsV2) {
                setSearch(response.data.data?.Typeahead_autocomplete.results[0].detailsV2)
            }
        }).catch(function (error) {
            console.error(error);
        });
    }

    const setLocation = (place) => {
        setPlace(place);
        setText('')
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
                    defaultValue={text}
                    onChangeText={(txt) => { setText(txt); searchLocation() }}
                />

                <FontAwesome name="search" size={24} color="black" />


            </View>

            {
                (search && text.length > 0) &&
                <TouchableOpacity
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: 'lightgrey',
                        paddingVertical: 5,
                        paddingHorizontal: 4,
                        minHeight: 15
                    }}
                    onPress={() => setLocation({ longitude: search.geocode.longitude, latitude: search.geocode.latitude })}
                >
                    <Text
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >{search.names.name + ', ' + search.names.longOnlyHierarchyTypeaheadV2}</Text>
                </TouchableOpacity>
            }


        </View>
    )

}

export default SearchBar