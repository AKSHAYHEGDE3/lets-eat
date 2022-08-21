import { View, Text, FlatList,ScrollView } from 'react-native'
import React from 'react'
import RestaurantDetails from '../components/RestaurantPage/RestaurantDetails'
import { Divider } from 'react-native-elements'
import { useSelector } from 'react-redux';
import Menu from '../components/RestaurantPage/Menu';
import CartButton from '../components/RestaurantPage/CartButton';
import { Dimensions } from 'react-native';

const foods = [
  {
    id: 1,
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 13.50,
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    id: 2,
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: 19.20,
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: 14.50,
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    id: 4,
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: 21.50,
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    id: 5,
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 13.50,
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
];


const RestaurantPage = ({ route, navigation }) => {

  const cart = useSelector(state => state.cart)

  return (
    <View>
      <RestaurantDetails
        name={route.params.name}
        img={route.params.img}
        rating={route.params.rating}
        review_count={route.params.review_count}
        phone={route.params.phone}
        address={route.params.address}
      />
      <Divider style={{ marginVertical: 10 }} />

      <ScrollView style={{
        height:(cart.foods.length > 0)?Dimensions.get('window').height - 384:Dimensions.get('window').height - 334,
      }}>
      {
        foods.map((item)=>{
            return <Menu key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} image={item.image} />
        })
      }
      </ScrollView>
      
      
      
      {
        (cart.foods.length > 0) && <CartButton price={cart.price} name={route.params.name} qty={cart.foods.length} navigation={navigation} />
      }
    </View>
  )
}

export default RestaurantPage