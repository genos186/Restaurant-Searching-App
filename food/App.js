import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import SearchScreen from './Src/Screens/SearchScreen';
import ResultsShowScreen from './Src/Screens/ResultsShowScreen';
import CitySearch from './Src/Screens/CitySearch';
import useResults from './Src/Hooks/useResults';

const Navigator = createStackNavigator (
  {
    Search: SearchScreen,
    ResultsShow:ResultsShowScreen,
    City:CitySearch,
    Api:useResults,
  }, 
  {
    initialRouteName: 'City',
    defaultNavigationOptions: 
    {
      title: 'Restaurant Search'
    }
  }
);

export default createAppContainer(navigator);
