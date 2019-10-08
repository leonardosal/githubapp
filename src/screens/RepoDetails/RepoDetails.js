import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';

export default class RepoDetails extends Component {
  state = {
    commitsList: [],
  };

  componentDidMount() {
    this.loadReposList();
  }

  loadReposList = async () => {
    const {url, token} = this.props.navigation.state.params;
    try {
      const resp = await fetch(`${url}/commits`, {
        method: 'GET',
        headers: {
          Authorization: `basic ${token}`,
        },
      });
      const respJson = await resp.json();
      this.setState({
        commitsList: respJson,
      });
    } catch (err) {
      alert(
        'Erro ao executar a requisição, por favor tente novamente mais tarde',
      );
    }
  };

  _keyExtractor = item => String(item.sha);

  renderItem = ({item}) => {
    const avatar = item && item.author && item.author.avatar_url;
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{paddingRight: 16}}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 32,
            }}
            source={{
              uri: avatar
                ? avatar
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtGNsPFQjrulPWM3CsyM8XAIE-zTdOAX3CxtW8LpYYzfBdcKBB',
            }}
          />
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

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  list: {
    padding: 16,
  },
  listItem: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    width: '80%',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
