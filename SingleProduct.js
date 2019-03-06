import React, {Component} from 'react'
import {Platform, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

class SingleProductScreen extends Component {
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
      </SafeAreaView>
    )
  }
}

export default SingleProductScreen