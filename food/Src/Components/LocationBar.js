import React from 'react';
import { StyleSheet , TextInput , View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function LocationBar({ term,onTermChange,onTermSubmit }) {
	return (
	     <View style={ styles.backgroundStyle } >

	     	<View style={ styles.innerbackgroundStyle1 }>
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

	     </View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		flexDirection:'column',
		flex:1,
	},
	innerbackgroundStyle1: {
		backgroundColor: 'grey',
		height: 20,
		borderRadius: 5,
		flexDirection:'row',
		flex:1,
		marginVertical:20,
		marginBottom:330,
		marginHorizontal:10,
		borderColor:'black',
	},
	inputStyle: {
		flex:1,
		fontSize:18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});

