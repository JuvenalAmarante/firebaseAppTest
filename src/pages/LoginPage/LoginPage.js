import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import firebase from "./../../services/firebase";

export default class LoginPage extends Component {
  state = {
    email: null,
    password: null
  };

  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword()
      .then(() => {
        this.props.navigation.navigate("HomePage");
      })
      .catch(() => {
        this.setState({ visibility: true });
      });
  };

  redirect = () => {
    this.props.navigation.navigate("HomePage");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            onChange={email => this.setState({ email })}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="********"
            onChange={password => this.setState({ password })}
            keyboardType="default"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.redirect()}
          >
            <Text>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
