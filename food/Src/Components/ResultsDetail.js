//helper function to ResultsList.js for prioritizing restaraunts based on quality
import React from 'react'; 
import { StyleSheet , Text , View , Image } from 'react-native';

export default function ResultsDetail ({ result }) {
	return (
	     <View style={styles.container}>
	     	<Image style={styles.image} source={{ uri: result.image_url }} />
	 		<Text style={styles.name}> {result.name} </Text>
	 		<Text> {result.rating} Stars, {result.review_count} Reviews </Text>
	     </View>
	);
};

const styles = StyleSheet.create({
	image: {
		width:250,
		height:130,
		borderRadius:4,
		marginBottom:5,
	},
	name: {
		fontWeight: 'bold',
	},
	container:{
		marginLeft:15,
	}
});

