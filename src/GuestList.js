import React,{Component} from 'react';
import {ListView,Alert,View} from 'react-native';
import {Button, Icon, List, ListItem, Text} from 'native-base';
import {colors} from './constants';

const people=[
	'placeholder1',
	'placeholder2',
];

export default class GuestList extends Component{
	constructor(props){
		super(props);
		this.ppl = new ListView.DataSource({ rowHasChanged:(r1,r2) =>r1 !== r2});
		this.state={
			basic: true,
			listViewData: people,
		};
	}
	
	deleteRow(secId, rowId, rowMap){
		rowMap[`${secId}${rowId}`].props.closeRow();
		const newData = [...this.state.listViewData];
		newData.splice(rowId,1);
		this.setState({listViewData: newData});
	}

	render(){
		const ppl = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});
		return(
		<View>
			<List
				dataSource={this.ppl.cloneWithRows(this.state.listViewData)}
				renderRow={people =>
					<ListItem>
						<Text> {people} </Text>
					</ListItem>
				}
				renderLeftHiddenRow={(people,secId,rowId,rowMap) =>
					<Button full danger onPress ={_ => this.deleteRow(secId,rowId,rowMap)}>
						<Icon active name ="close-circle" />
					</Button>
				}
				renderRightHiddenRow={people =>
					<Button full style={{backgroundColor:colors.primary}} onPress={() => Alert.alert('people')}>
						<Icon active name="checkmark-circle" />
					</Button>
				}
				leftOpenValue={75}
				rightOpenValue={-75}
			/>
		</View>
		);
	}
}




