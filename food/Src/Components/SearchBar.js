import React from 'react';
import { StyleSheet , TextInput , View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar({ term,onTermChange,onTermSubmit }) {
	return (
	     <View style={ styles.backgroundStyle } >

	     	<Feather 
	     		name='search' 
	     		style={ styles.iconStyle } />
	 		<TextInput 
	 			placeHolder="Search" 
	 			style={ styles.inputStyle }
	 			value={ term }
	 			onChangeText={ onTermChange } 
	 			onEndEditing={ onTermSubmit } />

	     </View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop:10,
		backgroundColor: 'grey',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection:'row',
	},
	inputStyle: {
		flex:1,
		fontSize:18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15,
	}
});

