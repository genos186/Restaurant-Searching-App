import React from 'react';
import { StyleSheet , TextInput , View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function LocationBar({ term,onTermChange,onTermSubmit }) {
	return (
	     <View style={ styles.backgroundStyle } >

	 		<Entypo 
	 			name="location-pin" 
	 			//size={24} 
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
		backgroundColor: 'grey',
		height: 50,
		borderRadius: 5,
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

