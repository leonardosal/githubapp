import React, {Component} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

export default class RepoDetails extends Component {
  render() {
    return <SafeAreaView style={styles.safeContainer}></SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
});
