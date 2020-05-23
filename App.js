import {createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from "./src/screens/searchScreen";
import ResultShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultShow: ResultShowScreen,
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Search for food in Leicester city"
  }
});

export default createAppContainer(navigator);

