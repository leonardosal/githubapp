import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class ReposList extends Component {
  state = {
    reposList: [],
    search: '',
  };

  updateSearch = search => {
    const {reposList} = this.state;
    if (!search) this.loadReposList();

    const newRepoList = reposList.filter(item => {
      const itemData = item.name ? item.name.toUpperCase() : '';
      const textData = search.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      search,
      reposList: newRepoList,
    });
  };

  componentDidMount() {
    this.loadReposList();
  }

  loadReposList = async () => {
    const {token} = this.props.navigation.state.params;
    try {
      const resp = await fetch('https://api.github.com/user/repos', {
        method: 'GET',
        headers: {
          Authorization: `basic ${token}`,
        },
      });
      const respJson = await resp.json();
      this.setState({
        reposList: respJson,
      });
    } catch (err) {
      alert(
        'Erro ao executar a requisição, por favor tente novamente mais tarde',
      );
    }
  };

  _keyExtractor = item => String(item.id);

  renderItem = ({item}) => (
    <TouchableOpacity
      key={item.id}
      style={styles.listItem}
      onPress={() =>
        this.props.navigation.navigate('RepoDetails', {
          url: item.url,
          name: item.name,
          token: this.props.navigation.state.params.token,
        })
      }>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemDescription}>
        {item.description ? item.description : 'Sem descrição'}
      </Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <SearchBar
            placeholder="Buscar..."
            inputContainerStyle={{
              backgroundColor: '#eee',
            }}
            lightTheme
            containerStyle={{
              backgroundColor: '#FFF',
              borderBottomWidth: 0,
              borderTopWidth: 0,
            }}
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
          <FlatList
            data={this.state.reposList}
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
    paddingHorizontal: 16,
  },
  listItem: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  itemDescription: {
    paddingVertical: 32,
  },
});
