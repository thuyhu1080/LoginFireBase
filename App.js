import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default class App extends React.Component {
  render() {
    return (
      <View>
          <ScrollView style={{ paddingLeft: 16, paddingRight: 16}} contentContainerStyle={{backgroundColor: '#F00'}}>
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  }
});
     