import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

import {createToken} from '../../utils';

import styles from './styles';

import {login} from './api.js';

export default class PasswordScreen extends Component {
  state = {
    password: '',
  };

  submitLogin = async () => {
    try {
      const {state, navigate} = this.props.navigation;
      const {password} = this.state;

      if (!password) {
        Alert.alert(
          'Erro de validação',
          'O campo de senha deve ser preenchido!',
        );
        return;
      }

      const token = createToken(state.params.email, password);
      const resp = await login(token);

      if (resp) {
        navigate('ReposList', {token});
      }
    } catch (err) {
      Alert.alert('Erro', 'Email/Senha inválido');
    }
  };

  render() {
    const {password} = this.state;
    const {state} = this.props.navigation;
    return (
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
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
            <View style={styles.buttonsContainer}>
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
