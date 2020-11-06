import React from 'react';
import { StyleSheet , Text , View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import LocationBar from '../Components/LocationBar';

export default function CitySearch({ navigation }) {
	const [term, setTerm] = useState('');
  	const [searchApi, results, errorMessage] = useResults();
	return (
	     <View>
	 		
	     	<MaterialIcons 
	     		name="restaurant-menu" 
	     		size={28} 
	     		color="black"
	     		style={alignItems= 'center', justifyContent= 'flex-start', flex=1} />
	     	<LocationBar
        		term={term}
        		onTermChange={setTerm}
        		onTermSubmit={() => navigation.navigate('Api',{ paramKey:term }) } />
      	  	{errorMessage ? <Text>{errorMessage}</Text> : null}

	     </View>
	);
};

const styles = StyleSheet.create({});

