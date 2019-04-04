import React from 'react';
import { View, Text, Button } from 'react-native';

class CharData extends React.Component {
    
	static navigationOptions = ({navigation}) => {
		return{title: navigation.getParam('char', 'Error').name,};
    };

	render() {
		const { navigation } = this.props;
		const char = navigation.getParam('char', 'NULL');
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflowY: 'scroll' }}>
				<Text>Data goes here</Text>
			</View>
		);
	}
}

export default CharData;
