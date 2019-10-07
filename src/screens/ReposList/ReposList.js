import React, {Component} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

export default class ReposList extends Component {
  componentDidMount() {
    this.loadReposList();
  }

  loadReposList = () => {
      const {username} = this.props.navigation.state.params;
      try {
        const resp = await fetch(`https://api.github.com/users/${username}`);
        const respJson = await resp.json();
      } catch (err) {
        alert(
          'Erro ao executar a requisição, por favor tente novamente mais tarde',
        );
      }
  };

  render() {
    return <SafeAreaView style={styles.safeContainer}></SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
});
