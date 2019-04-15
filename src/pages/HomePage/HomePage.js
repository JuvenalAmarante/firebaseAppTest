import React, { Component } from 'react';
import { View, Text, DrawerLayoutAndroid, TouchableOpacity, } from 'react-native'

import firebase from "./../../services/firebase";

import Drawer from './../../config/Drawer'
import { wp } from './styles/styles';
export default class HomePage extends Component {

    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={wp("80%")}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => Drawer()}>
                <Text>Bem vindo a HomePage</Text>
            </DrawerLayoutAndroid>
        );
    }
}