import React, { Component } from 'react'
import ShareExtension from 'react-native-share-extension'

import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  Image,
  ActivityIndicator
} from 'react-native'

export default class Share extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isOpen: true,
      data: [],
    }
  }

  async componentDidMount() {
    try {
      const data = await ShareExtension.data()
      console.log('DATA', data)
      this.setState({
        data: data
      })
    } catch(e) {
      console.log('errrr', e)
    }
  }

  onClose() {
    ShareExtension.close()
  }

  closing = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.isOpen}
        onRequestClose={() => {
          this.setState({ isOpen: false })
        }}>
        <View style={{ alignItems: 'center', justifyContent:'center', flex: 1 }}>
          <View style={{
            borderColor: 'green',
            borderWidth: 1,
            backgroundColor: 'white',
            height: 200,
            width: 300,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <TouchableOpacity onPress={this.closing}>
              <Text style={{fontWeight: 'bold', fontSize: 30}}>Adding Photo to LinkIt</Text>
            </TouchableOpacity>
            <ActivityIndicator size="small" color="#00ff00" />
          </View>
        </View>
      </Modal>
    )
  }
}