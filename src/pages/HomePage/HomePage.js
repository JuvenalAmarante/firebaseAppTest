import React, { Component } from 'react';
import { View, Text, DrawerLayoutAndroid, } from 'react-native'

import Drawer from './../../config/Drawer'
export default class HomePage extends Component {

    render() {
        return (
            <DrawerLayoutAndroid
              drawerWidth={styles.drawerWidth}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={Drawer}>
                <Text>Bem vindo a HomePage</Text>
            </DrawerLayoutAndroid>
        );
    }
}