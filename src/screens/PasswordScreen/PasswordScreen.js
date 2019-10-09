import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View, Image, Text, Alert} from 'react-native';

import {createToken} from '../../utils';
import styles from './styles';
import {login} from './api.js';
import Button from '../../components/Button';
import Input from '../../components/Input';

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
            <Input
              value={password}
              secureTextEntry
              placeholder="Digite sua senha do github"
              onChangeText={password =>
                this.setState({
                  password,
                })
              }
            />
            <View style={styles.buttonsContainer}>
              <Button onPress={this.submitLogin} label="Login" />
              <Button
                onPress={() => this.props.navigation.goBack()}
                label="Voltar"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
