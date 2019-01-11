import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native'

export default () => {
  <View>
    <View>
      <TouchableOpacity onPress={this.props.navigation.navigate("HomePage")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity onPress={this.props.navigation.navigate("ListPage")}>
        <Text>Lista</Text>
      </TouchableOpacity>
    </View>
  </View>
};
