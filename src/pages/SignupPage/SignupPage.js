import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
  Image,
  Modal,
  StatusBar
} from "react-native";

import { Icon } from "react-native-elements";
import firebase from "./../../services/firebase";
import styles from "./styles/styles";

import firebaseLogo from "./../../images/firebase.png";

export default class SignupPage extends Component {
  

  state = {
    icon: "check-circle",
    color: "#FFC312",
    text: "Usuário cadastrado com sucesso!",
    visibility: false,
    name: null,
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

  signup = async () => {
    const { name } = this.state;
    const { email } = this.state;
    const { password } = this.state;

    if (name == null || email == null || password == null) {
      ToastAndroid.showWithGravity(
        "Há espaços em branco nos campos acima",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    } else {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        await firebase
          .database()
          .ref("users/")
          .push({
            name,
            email
          });
        await this.setState({
          visibility: true,
          text: "Usuário cadastrado com sucesso!",
          icon: "check-circle"
        });
      } catch (a) {
        if (a.message == "The email address is badly formatted.") {
          this.setState({
            visibility: true,
            text: "O endereço de email não é válido.",
            icon: "warning"
          });
        } else if (a.message == "Password should be at least 6 characters") {
          this.setState({
            visibility: true,
            text: "A senha deve ter no mínimo 6 caracteres.",
            icon: "warning"
          });
        } else if (
          a.message == "The email address is already in use by another account."
        ) {
          this.setState({
            visibility: true,
            text:
              "O endereço de email inserido está sendo utilizado por outra conta dentro do nosso servidor.",
            icon: "warning"
          });
        } else if (
          a.message ==
          "A networ error (such as timeouted, interrupted connection or unreachable host) has ocorred."
        ) {
          this.setState({
            visibility: true,
            text: "Verifique sua conexão com a Internet.",
            icon: "warning"
          });
        } else {
          this.setState({
            visibility: true,
            text: a.message,
            icon: "check-circle"
          });
        }
      }
    }
  };

  redirect = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      // <View style={styles.container}>
      <ImageBackground
        source={require("./../../images/back1.jpg")}
        style={styles.background}
        >
        <StatusBar hidden/>
        <Image source={firebaseLogo} style={styles.logo} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Irineu Campos"
            onChangeText={name => this.setState({ name })}
            keyboardType="email-address"
          />

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

          <TouchableOpacity style={styles.button} onPress={() => this.signup()}>
            <Text style={styles.textButton}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.redirect()}
          >
            <Text style={styles.textButton}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.backForm} />
        <Modal
          visible={this.state.visibility}
          onRequestClose={() => this.setState({ visibility: false })}
          transparent
          style={styles.alert}
          animationType={"slide"}
        >
          <View style={styles.modal}>
            <View style={styles.titleModal}>
              <Icon name={this.state.icon} color={this.state.color} size={80} />
            </View>
            <View style={styles.bodyModal}>
              <Text style={styles.bodyTextModal}>{this.state.text}</Text>
            </View>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => this.setState({ visibility: false })}
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
