import React from 'react';
import { StyleSheet , Text , View , Image } from 'react-native';
import LocationBar from '../Components/LocationBar';

export default function CitySearch({ navigation }) {
	const [term, setTerm] = useState('');
  	const [searchApi, results, errorMessage] = useResults();
	return (
	     <View>
	 		
	 		<Image source={require('./dine.jpg')} style={{ marginHorizontal:70, marginTop:10 }} />
	     	<LocationBar
        		term={term}
        		onTermChange={setTerm}
        		onTermSubmit={() => navigation.navigate('Api',{ paramKey:term }) } />
      	  	{errorMessage ? <Text>{errorMessage}</Text> : null}

	     </View>
	);
};

const styles = StyleSheet.create({});

