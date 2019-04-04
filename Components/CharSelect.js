import React from 'react';
import { View, Text, Button } from 'react-native';
import { characters } from '../MockData/data';

class CharSelect extends React.Component {
	static navigationOptions = {
		title: 'Select a character',
	};
	render() {
        const {characters} = characters;
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflowY: 'scroll' }}>
				{characters.map((char, index) => {
					<Button title={char.name} onPress={() => this.props.navigation.navigate('CharData', char)} />;
				})}
			</View>
		);
	}
}

export default CharSelect;
