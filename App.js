import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CharSelect from './Components/CharSelect';
import CharData from './Components/CharData';

const AppNavigator = createStackNavigator(
	{
		CharSelect: CharSelect,
		CharData: CharData,
	},
	{
		initialRouteName: 'CharSelect',
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
