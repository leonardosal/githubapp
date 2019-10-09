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

import styles from './styles';

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
            <TouchableOpacity style={styles.button} onPress={this.submit}>
              <Text style={styles.buttonLabel}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
