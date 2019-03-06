import React, {Component} from 'react'
import AppNavigator from './Navigator'
import { createAppContainer } from "react-navigation"

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}