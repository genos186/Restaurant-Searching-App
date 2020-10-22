import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './Src/Screens/SearchScreen';
import ResultsShowScreen from './Src/Screens/ResultsShowScreen';

const navigator = createStackNavigator (
  {
    Search: SearchScreen,
    ResultsShow:ResultsShowScreen,
  }, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: 
    {
      title: 'Restaurant Search'
    }
  }
);

export default createAppContainer(navigator);