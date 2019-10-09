import React, {Component} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SearchBar} from 'react-native-elements';

import {loadReposList} from './api';
import styles from './styles';

export default class ReposList extends Component {
  state = {
    reposList: [],
    reposListOriginal: [],
    search: '',
  };

  updateSearch = search => {
    const {reposList, reposListOriginal} = this.state;

    if (search) {
      const newRepoList = this.filterList(reposList, search);
      this.setState({
        search,
        reposList: newRepoList,
      });
      return;
    }

    this.setState({
      search,
      reposList: reposListOriginal,
    });
  };

  filterList = (reposList, search) => {
    return reposList.filter(item => {
      const itemData = item.name ? item.name.toUpperCase() : '';
      const textData = search.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
  };

  clearSearch = () => {
    this.setState({
      search: '',
    });
  };

  async componentDidMount() {
    try {
      const {token} = this.props.navigation.state.params;
      const reposList = await loadReposList(token);
      this.setState({
        reposList,
        reposListOriginal: reposList,
      });
    } catch (err) {
      Alert.alert(
        'Erro',
        'Erro ao executar a requisição, por favor tente novamente mais tarde',
      );
    }
  }

  _keyExtractor = item => String(item.id);

  renderItem = ({item}) => {
    const {navigate, state} = this.props.navigation;
    const props = {
      url: item.url,
      name: item.name,
      token: state.params.token,
    };
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.listItem}
        onPress={() => navigate('RepoDetails', props)}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemDescription}>
          {item.description ? item.description : 'Sem descrição'}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <SearchBar
            placeholder="Buscar..."
            inputContainerStyle={styles.searchInput}
            lightTheme
            containerStyle={styles.searchContainer}
            onChangeText={this.updateSearch}
            onClear={this.clearSearch}
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
