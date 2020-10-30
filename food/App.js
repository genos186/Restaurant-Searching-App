import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './Src/Screens/SearchScreen';
import ResultsShowScreen from './Src/Screens/ResultsShowScreen';
import CitySearch from './Src/Screens/CitySearch';

const Navigator = createStackNavigator (
  {
    Search: SearchScreen,
    ResultsShow:ResultsShowScreen,
    City:CitySearch,
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
