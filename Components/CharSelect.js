import React from 'react';
import { ScrollView, View, Button } from 'react-native';
import { characters } from './../MockData/data';

class CharSelect extends React.Component {
	static navigationOptions = {
		title: 'Select a character',
    };
	render() {
		return (
			<ScrollView contentContainerStyle={{alignItems: 'stretch'}} style={{ flex: 1 }}>
				{characters && characters.map((char, index) => (
					<Button  title={char.name} key={index} onPress={() => this.props.navigation.navigate('CharData', char)} />
				))}
			</ScrollView>
		);
	}
}

export default CharSelect;
