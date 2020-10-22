import React, { useState, useEffect } from 'react';
import { StyleSheet , Text , View , FlatList , Image } from 'react-native';
import yelp from '../API/Yelp';

export default function ResultsSHowScreen ({ navigation }) {
	const [result,setResult]= useState(null);
	const id=navigation.getParam('id');

	const getResult = async (id) => {
		const response= await yelp.get(`/${id}`);
		response.data;
		setResult(response.data);
	};
	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
	     <View>
	 		<Text style={styles.name} > {result.name} </Text>
	 		<FlatList 
	 			data={result.photos}
	 			keyExtractor={(photo) => photo}
	 			renderItem={({ item }) => {
	 				return <Image style={styles.image} source={{ uri:item }} />
	 			}}
	 		/>
	     </View>
	);
};

const styles = StyleSheet.create({
	image: {
		height:200 ,
		width:300 ,
		marginLeft:30,
		marginBottom:2,
	},
	name: {
		textAlign:'center'
	},
});

