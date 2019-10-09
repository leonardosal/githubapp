import React, {Component} from 'react';

import {SafeAreaView, Text, View, FlatList, Image, Alert} from 'react-native';

import styles from './styles';
import {loadCommitsList} from './api';

export default class RepoDetails extends Component {
  state = {
    commitsList: [],
  };

  async componentDidMount() {
    try {
      const {url, token} = this.props.navigation.state.params;
      const commitsList = await loadCommitsList(url, token);
      this.setState({
        commitsList,
      });
    } catch (err) {
      Alert.alert(
        'Erro',
        'Erro ao executar a requisição, por favor tente novamente mais tarde',
      );
    }
  }

  _keyExtractor = item => String(item.sha);

  renderItem = ({item}) => {
    const avatarUrl = item && item.author && item.author.avatar_url;
    const source = avatarUrl
      ? {uri: avatarUrl}
      : require('../../assets/icons/NotFoundAvatar.png');
    return (
      <View style={styles.itemContainer}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={source} />
        </View>
        <View key={item.id} style={styles.listItem}>
          <Text style={styles.itemTitle}>{item.commit.message}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <FlatList
            data={this.state.commitsList}
            keyExtractor={this._keyExtractor}
            style={styles.list}
            renderItem={this.renderItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}
