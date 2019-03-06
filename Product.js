import React, {Component} from 'react'
import {Platform, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

class ProductScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lowPriceIdx: 0,
      highPriceIdx: 0,
    }
  }

  _renderItem ({item, index}) {
    return (
        <View>
            <Text>{ item.title }</Text>
        </View>
    )
  }
  render() {
    const item = this.props.navigation.state.params.item
    console.log(item, this.state.lowPriceIdx)
    return (
      <SafeAreaView style={{ width: '100%', flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ flex: 1, width: '100%' }}>
          <Text style={{ marginTop: 15, textAlign: 'center' }}>{item.company} - {item.title}</Text>
          <Text style={{ marginBottom: 15, textAlign: 'center' }}>${item.price}</Text>
          <Image resizeMode="contain" style={{flex: 3, height: undefined, width: undefined}} source={{uri: item.image}}/>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Button
              title="Like"
            />
            <Button
              title="Copy Link"
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button
              containerStyle={{width: 150}}
              title="+ Add to Widget"
            />
          </View>
        </View>
        <View style={{ width: '90%', height: 10, borderBottomWidth: 1, borderBottomColor: '#d3d3d3'}} />
        {item.lowPrice ? <View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
            <Text style={{ flex: 1, textAlign: 'center' }} onPress={() => {
              if (this.state.lowPriceIdx !== 0) this.setState({ lowPriceIdx: this.state.lowPriceIdx - 1 })
              else this.setState({ lowPriceIdx: 1 })
            }}>
              -
            </Text>
            <View style={{ flex: 2, alignItems: 'center' }}>
              <Text>$</Text>
              <TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.navigate('SingleProduct', {item: item.lowPrice[this.state.lowPriceIdx]})}>
                <Image resizeMode="contain" style={{flex: 1, height: 150, width: 100}} source={{ uri: item.lowPrice[this.state.lowPriceIdx].image }} />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center' }}>{item.lowPrice[this.state.lowPriceIdx].title}</Text>
              <Text style={{ textAlign: 'center' }}>${item.lowPrice[this.state.lowPriceIdx].price}</Text>
            </View>
            <Text style={{ flex: 1, textAlign: 'center' }} onPress={() => {
              if (this.state.lowPriceIdx !== 1) this.setState({ lowPriceIdx: this.state.lowPriceIdx + 1 })
              else this.setState({ lowPriceIdx: 0 })
            }}>
              +
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ flex: 1, textAlign: 'center' }} onPress={() => {
              if (this.state.highPriceIdx !== 0) this.setState({ highPriceIdx: this.state.highPriceIdx - 1 })
              else this.setState({ highPriceIdx: 1 })
            }}>
              -
            </Text>
            <View style={{ flex: 2, alignItems: 'center' }}>
              <Text>$$$</Text>
              <TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.navigate('SingleProduct', {item: item.highPrice[this.state.highPriceIdx]})}>
                <Image resizeMode="contain" style={{flex: 1, height: 150, width: 100}} source={{ uri: item.highPrice[this.state.highPriceIdx].image }} />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center' }}>{item.highPrice[this.state.highPriceIdx].title}</Text>
              <Text style={{ textAlign: 'center' }}>${item.highPrice[this.state.highPriceIdx].price}</Text>
            </View>
            <Text style={{ flex: 1, textAlign: 'center' }} onPress={() => {
              if (this.state.highPriceIdx !== 1) this.setState({ highPriceIdx: this.state.highPriceIdx + 1 })
              else this.setState({ highPriceIdx: 0 })
            }}>
              +
            </Text>
          </View>
        </View> : null}
      </SafeAreaView>
    )
  }
}

export default ProductScreen