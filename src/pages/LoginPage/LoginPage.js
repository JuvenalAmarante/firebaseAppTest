import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
  Image,
  Modal
} from "react-native";

import { Icon } from 'react-native-elements';
import firebase from "./../../services/firebase";
import styles from "./styles/styles";

import firebaseLogo from "./../../images/firebase.png";

export default class LoginPage extends Component {
  state = {
    icon: 'check-circle',
    color: '#FFC312',
    text: 'Usuário cadastrado com sucesso!',
    visibility: false,
    email: null,
    password: null
  };

  componentDidMount = () => {
    if (
      firebase.auth().currentUser != null ||
      firebase.auth().currentUser != undefined
    ) {
      alert("logado");
    } else {
      // alert("deslogado");
    }
  };

  login = () => {
    const { email } = this.state;
    const { password } = this.state;

    if (email == null || password == null) {
      ToastAndroid.showWithGravity(
        "Há espaços em branco nos campos acima",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.props.navigation.navigate("HomePage");
        })
        .catch((a) => {
          if(a.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
          this.setState({visibility: true, text: 'O seu usuário não está cadastrado no nosso sistema.', icon: 'warning'})
          } else if(a.message == 'The email address is badly formatted.') {
            this.setState({visibility: true, text: 'O endereço de email não é válido.', icon: 'warning'})
          } else {
            this.setState({visibility: true, text: a.message, icon: 'warning'})
          }
        });
    }
  };

  redirect = () => {
    this.props.navigation.navigate('SignupPage');
  };

  render() {
    return (
      // <View style={styles.container}>
      <ImageBackground
        source={require("./../../images/back1.jpg")}
        style={styles.background}
      >
        <Image source={firebaseLogo} style={styles.logo} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            onChangeText={email => this.setState({ email })}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="········"
            onChangeText={password => this.setState({ password })}
            keyboardType="default"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.redirect()}
          >
            <Text style={styles.textButton}>Registrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.backForm} />
        <Modal
          visible={this.state.visibility}
          onRequestClose={() => this.setState({visibility: false})}
          transparent
          style={styles.alert}
          animationType={'slide'}
        >
          <View style={styles.modal}>
            <View style={styles.titleModal}>
              <Icon name={this.state.icon} color={this.state.color} size={80}/>
            </View>
            <View style={styles.bodyModal}>
              <Text style={styles.bodyTextModal}>{this.state.text}</Text>
            </View>
            <TouchableOpacity
            style={styles.buttonModal}
            onPress={() => this.setState({visibility: false})}
          >
            <Text style={styles.textButtonModal}>OK</Text>
          </TouchableOpacity>
          </View>
        </Modal>
      </ImageBackground>
      // </View>
    );
  }
}
