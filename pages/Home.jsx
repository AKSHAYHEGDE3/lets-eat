import { View, Text } from 'react-native'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar'
import SearchBar from '../components/Home/SearchBar';
import axios from 'axios';
import Category from '../components/Home/Category';
import BottomTabs from '../components/Home/BottomTabs';
import { Divider } from "react-native-elements";
import { Dimensions } from 'react-native';
import RestaurantCard from '../components/Home/RestaurantCard'
import { LottieLoader } from "lottie-loader-react-native";

const Home = ({ navigation }) => {

  // <LottieLoader
  //   visible={true}
  //   source={require("../assets/animations/scanner.json")}
  //   animationStyle={styles.lottie}
  //   speed={1}
  // />

  const [restaurants, setRestaurants] = useState(null)
  const [place, setPlace] = useState({ latitude: '12.91285', longitude: '100.87808', })
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    const getRestaurantsFromYelp = () => {
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
        setLoad(false)
      }).catch(function (error) {
        console.error(error);
      });
    };
    getRestaurantsFromYelp()
  }, [place])

  // console.log(restaurants)

  return (
    <SafeAreaView>
      <FocusedStatusBar backgroundColor={'black'} />
      <SearchBar setPlace={setPlace} />
      <Category />
      <View
        style={{
          height: Dimensions.get('window').height - 200,
          backgroundColor: '#eee',
          paddingTop: 10,
        }}
      >
        {
          load ?
            <View style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <LottieLoader
                visible={true}
                source={require("../assets/animations/scanner.json")}
                animationStyle={{ width: 100, height: 100 }}
                speed={1}
              />
            </View> :
            <FlatList
              data={restaurants}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => <RestaurantCard
                navigation={navigation}
                name={item.name ? item.name : 'Delicious'}
                img={item.photo ? item.photo.images.original.url : 'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}
                rating={item.rating ? item.rating : 0}
                review_count={item.num_reviews ? item.num_reviews : 0}
                phone={item.phone ? item.phone : '76548876234'}
                address={item.address ? item.address : 'opp redline,East sea,vegas'}
              />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}
            />
        }
      </View>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView >
  )
}

export default Home