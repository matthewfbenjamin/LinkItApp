import React, {Component} from 'react'
import {Platform, StyleSheet, TouchableHighlight, Text, View, FlatList, Image} from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { ListItem } from 'react-native-elements'

class ListScreen extends Component {
  renderListItem = ({item}) => {
    return (
      <TouchableHighlight
        onPress={() => this._onPress(item)}
      >
        <ListItem
          containerStyle={{
            height: 100,
            borderBottomColor: '#d3d3d3',
            borderBottomWidth: 1,

          }}
          title={`${item.company}: ${item.title}`}
          subtitle={`$${item.price}`}
          leftAvatar={{ source: { uri: item.image } }}
          rightElement={<Text>></Text>}
        />
      </TouchableHighlight>
    )
  }

  _onPress = (item) => {
    this.props.navigation.navigate('Product', {item})
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={[
            {
              key: '0',
              company: 'Z by Zella',
              title: 'Adrenaline Racerback Tank Top',
              price: '12.97',
              image: 'https://www.hautelookcdn.com/resizer/396x594/products/RK406765MI/large/10323595.jpg'
            },
            {
              key: '1',
              company: 'Love Stitch',
              title: 'Gauze Maxi Dress',
              price: '32.23',
              image: 'https://www.hautelookcdn.com/resizer/434x650/products/IMP-7965MPJ/large/5179440.jpg',
              lowPrice: [
                {
                  key: '0',
                  company: 'Seranoma',
                  title: 'Turquoise Geometric Maxi Dress',
                  price: '19.79',
                  image: 'https://cfcdn.zulily.com/images/cache/product/420x504/300247/zu57447035_main_tm1526056783.jpg',    
                },
                {
                  key: '1',
                  company: 'jon & anna',
                  title: 'Turquoise Geometric Surplice Maxi Dress',
                  price: '14.79',
                  image: 'https://cfcdn.zulily.com/images/cache/product/420x504/281164/zu55368977_main_tm1519429140.jpg',
                }
              ],
              highPrice: [
                {
                  key: '0',
                  company: 'bebe',
                  title: 'LOGO BRAID STRAP MAXI DRESS',
                  price: '53.40',
                  image: 'https://cdn.shopify.com/s/files/1/0033/7939/6672/products/rbb-845922-tur-i1_1440x.jpg?v=1547077557',
                },
                {
                  key: '1',
                  company: 'Dioni',
                  title: 'Light Turquoise Linen Blend Maxi Dress',
                  price: '59.99',
                  image: 'https://cfcdn.zulily.com/images/cache/product/420x504/309079/zu58472701_main_tm1530811367.jpg',
                }
              ]
            }
          ]}
          renderItem={this.renderListItem}
        />
      </View>
    );
  }
}

export default ListScreen