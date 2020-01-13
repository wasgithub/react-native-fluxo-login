import React, { Component } from 'react';
import {
    Button,
    View,
    AsyncStorage,
    StyleSheet,
    ActivityIndicator,
    StatusBar
  } from 'react-native';
  import firebase from 'react-native-firebase';

class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
      // this._bootstrapAsync();
    }

    componentDidMount() {
      setTimeout(() => {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'App' : 'Auth');
        });
      }, 1800);
    }    
  
    // Fetch the token from storage then navigate to our appropriate place
    // _bootstrapAsync = async () => {
    //   const userToken = await AsyncStorage.getItem('userToken');
  
    //   // This will switch to the App screen or Auth screen and this loading
    //   // screen will be unmounted and thrown away.
    //   this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    // };
  
    // Render any loading content that you like here
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

  export default AuthLoadingScreen;
  