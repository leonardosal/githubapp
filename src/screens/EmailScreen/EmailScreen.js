import React, {Component} from 'react';

import {SafeAreaView, ScrollView, View, Image, Alert} from 'react-native';

import styles from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default class EmailScreen extends Component {
  state = {
    email: '',
  };

  submit = () => {
    const {email} = this.state;
    const {navigate} = this.props.navigation;

    if (!email) {
      Alert.alert('Erro de validação', 'O campo de email deve ser preenchido!');
      return;
    }

    navigate('PasswordScreen', {email});
  };

  render() {
    const {email} = this.state;
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
          </View>

          <View style={styles.containerForm}>
            <Input
              value={email}
              placeholder="Digite seu email do github"
              keyboardType="email-address"
              onChangeText={email =>
                this.setState({
                  email,
                })
              }
            />
            <Button onPress={this.submit} label="Próximo" />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
