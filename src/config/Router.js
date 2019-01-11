import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import ListPage from '../pages/ListPage/ListPage';

const routes = createStackNavigator({
    LoginPage,
    SignupPage,
    HomePage,
    ListPage
},{
    headerMode: 'none'
})

export default createAppContainer(routes);

