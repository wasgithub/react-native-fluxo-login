import React, { Component } from 'react';
import {
    Button,
    View,
    AsyncStorage,
    StyleSheet,
    Text
  } from 'react-native';

class HomeScreen extends React.Component {
  state = {currentUser: null};
    static navigationOptions = {
      title: 'Welcome to the app!',
    };
  
    render() {
      const {currentUser} = this.state;
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 25}}>Hi </Text>
          <Text style={{color: 'blue', fontSize: 25}}>
            {currentUser && currentUser.email}
          </Text>

          <View style={{marginVertical: 20}}>
            <Button
              title="Mostrar mais"
              color="blue"
              onPress={() => this._showMoreApp()}
            />
          </View> 
        </View>        
      );
    }
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Other');
    };
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });  

  export default HomeScreen;