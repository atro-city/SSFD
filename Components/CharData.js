import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

class CharData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tableHead: [
				'Move',
				'Dmg',
				'Startup',
				'Active',
				'Total',
				'Hit',
				'Backhit',
				'Block',
				'Cancel',
				'Clash',
				'Guard',
				'Notes',
			],
			widthArr: [50, 40, 40, 40, 40, 40, 40, 40, 90, 90, 50, 160],
		};
	}

	static navigationOptions = ({ navigation }) => {
		return { title: navigation.getParam('name', 'Error') };
	};

	render() {
		const state = this.state;
		const tableData = [];
		const { navigation } = this.props;
		const data = navigation.getParam('data', 'NULL');
		data.map(move => {
			tableData.push(move.item.split('#'));
		});

		return (
			<View style={styles.container}>
				<ScrollView horizontal={true}>
					<View>
						<Table borderStyle={{ borderColor: '#C1C0B9' }}>
							<Row
								data={state.tableHead}
								widthArr={state.widthArr}
								style={styles.header}
								textStyle={styles.text}
							/>
						</Table>
						<ScrollView style={styles.dataWrapper}>
							<Table borderStyle={{ borderColor: '#C1C0B9' }}>
								{tableData.map((rowData, index) => (
									<Row
										key={index}
										data={rowData}
										widthArr={state.widthArr}
										style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
										textStyle={styles.text}
									/>
								))}
							</Table>
						</ScrollView>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
	header: { height: 50, backgroundColor: '#537791' },
	text: { textAlign: 'center', fontWeight: '100' },
	dataWrapper: { marginTop: -1 },
	row: { height: 40, backgroundColor: '#E7E6E1' }
  });

export default CharData;
