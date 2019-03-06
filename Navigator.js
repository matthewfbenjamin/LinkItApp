import { createStackNavigator, createAppContainer } from "react-navigation"
import ListScreen from './List'
import ProductScreen from './Product'
import SingleProductScreen from './SingleProduct'

const AppNavigator = createStackNavigator({
  List: {
    screen: ListScreen
  },
  Product: {
    screen: ProductScreen
  },
  SingleProduct: {
    screen: SingleProductScreen
  }
});

export default AppNavigator