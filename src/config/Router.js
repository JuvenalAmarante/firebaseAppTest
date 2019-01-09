import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ListPage from '../pages/ListPage/ListPage';

const routes = createStackNavigator({
    LoginPage,
    HomePage,
    ListPage
},{
    headerMode: 'none'
})

export default createAppContainer(routes);

