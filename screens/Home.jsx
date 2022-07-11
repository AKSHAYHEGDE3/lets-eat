import { View, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBar from '../components/HomePage/SearchBar'
import Category from '../components/HomePage/Category'
import RestaurantCard from '../components/HomePage/RestaurantCard'
import { Divider } from "react-native-elements";
import BottomTabs from '../components/HomePage/BottomTabs'
import axios from 'axios'


const Home = ({ navigation }) => {

  const [restaurants, setRestaurants] = useState(null)
  const [place, setPlace] = useState({ latitude: '12.91285', longitude: '100.87808', })
  const restImg = require("../assets/images/bg1.jpg")

  useEffect(() => {
    const getRestaurantsFromYelp = () => {
      // const YELP_API_KEY = 'wLl-8iEGzhjM-fBxOb4ODyiK3a78pCbkV6RKg2Z9pY4ylO63pulVpC6qg5FN7SrnxRhk9e5VJSH0uJ8TS3dbdUvpE6IwYGbzN7QYMHb83Iy9xwHqcfkeBV6zDDi_YnYx';
      // const yelpUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
      // const apiOptions = {
      //   headers: {
      //     Authorization: `Bearer ${YELP_API_KEY}`,
      //   },
      // };

      // return fetch(yelpUrl, apiOptions)
      //   .then((res) => res.json())
      //   .then((json) => {
      //     console.log(json.businesses)
      //     setRestaurants(
      //       json.businesses.filter(business => 
      //         business.transactions.includes(activeTab.toLowerCase())
      //       )
      //     )
      //   })
      //   .catch(err => console.log(err));

      const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
        params: {
          latitude: place.latitude,
          longitude: place.longitude,
          limit: '30',
        },
        headers: {
          'X-RapidAPI-Key': '00534f03e2msh699ff151af7e151p19cf61jsn09e94e390681',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        // console.log(response.data);
        setRestaurants(response.data.data)
      }).catch(function (error) {
        console.error(error);
      });

    };
    getRestaurantsFromYelp()
  }, [place])




  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>

      <SearchBar setPlace={setPlace} />
     
      <Category />
      <View style={{ backgroundColor: '#eee', padding: '2%', }}>
        <FlatList
          style={{height:'80vh'}}
          data={restaurants}
          scrollEnabled={true}
          renderItem={({ item }) => <RestaurantCard
            navigation={navigation}
            name={item.name ? item.name : 'Delicious'}
            img={item.photo ? item.photo.images.original.url : 'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}
            rating={item.rating ? item.rating : 0}
            review_count={item.num_reviews ? item.num_reviews : 0}
            phone={item.phone ? item.phone : '76548876234'}
            address={item.address ? item.address : 'opp redline,East sea,vegas'}
          />}
        />
      </View>
      <Divider width={1} />
      <BottomTabs />

    </SafeAreaView>
  )
}

export default Home