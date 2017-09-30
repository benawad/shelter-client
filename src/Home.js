import React, {Component} from 'react';
import {Alert, Image, Text, Platform, TouchableHighlight, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements'

export default class StartScreen extends Component{
	_onPressDonorButton(){
		Alert.alert('replace button')
	}
	_onPressUserButton(){
		Alert.alert('move')
	}

	render(){
		let pic = {
			uri: 'file:///Users/lpak/Desktop/shelter.png'
		};

		return(
		<View style = {{flex:1, justifyContent: 'space-around'}}>
			<View style = {styles.lolpadding} />
			
			<Image source = {pic} style = {styles.image} />	
			
			<View style = {styles.buttons}>
			<View style = {styles.donorButton}>	
				<Button
					onPress = {this._onPressDonorButton}
					large
					backgroundColor ="#79BD9A"
					fontWeight='bold'
					iconLeft={{name:'home'}}
					title="HOSTS" >	
						<Text style = {styles.buttonText}>placement</Text>
				</Button>
			</View>
			<View style = {styles.userButton}>	
				<Button
					onPress = {this._onPressUserButton}
					large
					backgroundColor="#79BD9A"
					fontWeight='bold'
					iconLeft={{name:'user'}}
					title="GUESTS" >		
						<Text style = {styles.buttonText}>placement2</Text>
				</Button>
			</View>
			</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	lolpadding:{
		flex:1
	},
	
	image:{
		paddingTop: 50,
		justifyContent: 'flex-end',
		alignItems: 'center',
		flex:3
	},

	buttons:{
		flex: 5,
		justifyContent: 'center',
		alignItems: 'stretch'
	},
	
	donorButton:{
		flex:1,
		paddingBottom: 50,
		justifyContent: 'flex-end'
	},
	userButton:{
		flex:1,
		justifyContent: 'flex-start'
	},

	buttonText:{
		padding:20,
		color:'white'
	}
})

