import React, {Component} from 'react';

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

export default class EmailScreen extends Component {
  state = {
    username: '',
  };

  render() {
    const {email} = this.state;
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
            <Text style={styles.headerLabel}>Bem vindo ao Github App!</Text>
          </View>

          <View style={styles.containerForm}>
            <TextInput
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="off"
              keyboardType="email-address"
              placeholder="Digite seu email do github"
              onChangeText={email =>
                this.setState({
                  email,
                })
              }
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('PasswordScreen', {email})
              }>
              <Text style={styles.buttonLabel}>Login</Text>
            </TouchableOpacity>
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
  },
  buttonLabel: {
    fontSize: 16,
    color: '#FFF',
  },
  headerLabel: {
    fontSize: 18,
  },
});
