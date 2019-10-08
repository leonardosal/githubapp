import React, {Component} from 'react';
import base64 from 'base-64';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class PasswordScreen extends Component {
  state = {
    password: '',
  };

  submitLogin = async () => {
    const {state, navigate} = this.props.navigation;
    const {password} = this.state;
    const token = base64.encode(`${state.params.email}:${password}`);
    navigate('ReposList', {token});
  };

  render() {
    const {password} = this.state;
    const {state} = this.props.navigation;
    return (
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          automaticallyAdjustContentInsets="automatic">
          <View style={styles.containerLogo}>
            <Image
              style={styles.logo}
              source={require('../../assets/icons/github-logo.png')}
            />
            <Text style={styles.headerLabel}>{state.params.email}</Text>
          </View>

          <View style={styles.containerForm}>
            <TextInput
              value={password}
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="off"
              secureTextEntry={true}
              placeholder="Digite sua senha do github"
              onChangeText={password =>
                this.setState({
                  password,
                })
              }
              style={styles.input}
            />
            <View style={{width: '100%'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.submitLogin}>
                <Text style={styles.buttonLabel}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.goBack()}>
                <Text style={styles.buttonLabel}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  containerForm: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 128,
    height: 128,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 50,
    width: '100%',
    fontSize: 18,
    paddingLeft: 8,
  },
  button: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7159c1',
    borderRadius: 2,
    marginBottom: 8,
  },
  buttonLabel: {
    fontSize: 16,
    color: '#FFF',
  },
  headerLabel: {
    fontSize: 18,
  },
});
