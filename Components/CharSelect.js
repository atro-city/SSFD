import React from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { characters } from './../MockData/data';

class CharSelect extends React.Component {
	static navigationOptions = {
		title: 'Select a character',
	};
	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				{characters &&
					characters.map((char, index) => (
							<Button
								key={index}
								title={char.name}
								onPress={() => this.props.navigation.navigate('CharData', char)}
							/>
					))}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: { alignItems: 'stretch'}
});

export default CharSelect;

//на телефоне при загрузке чардаты можно нажимать кнопки и всё портить, надо починить
//слишком долго грузит таблички
