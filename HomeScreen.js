import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
    
    render() {

        this.props.navigation.setOptions({ 
            headerBackTitle: '',
            headerShown: false ,
        })

        return (
            <View style={styles.container}>
              <Image
                style={{width:"100%", height:300}}
                source={require('./assets/images/login-logo.png')}
                resizeMode="contain"/>
        
                <Text style={{ fontSize: 40, fontWeight: 'bold'}}>Hello UBX!</Text>
                <Text style={{ fontSize: 16, color: 'gray', textAlign: 'center', marginHorizontal: 20}}>Welcome to UBX Philippines Corporation</Text>
        
                <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>
                  <TouchableOpacity
                  onPress={ () => this.props.navigation.navigate('Login') }
                    style={{ backgroundColor: '#f57c00', padding: 10, width: 150, borderRadius: 30, marginHorizontal: 2 }}>
                      <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18}}>Login</Text>
                  </TouchableOpacity> 
        
                  <TouchableOpacity
                    style={{ backgroundColor: '#000', padding: 10, width: 150, borderRadius: 30, marginHorizontal: 2, borderWidth: 1, borderColor: '#f57c00'}}>
                      <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18}}>Sign Up</Text>
                  </TouchableOpacity>
        
                </View>
        
                <Text style= {{ fontSize: 16 }}>Or sign in via</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
        
                  <View style={{ height: 50, width: 50, borderRadius: 50/2, backgroundColor: '#1565c0', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>f</Text>
                  </View>
        
                  <View style={{ height: 50, width: 50, borderRadius: 50/2, backgroundColor: '#304ffe', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>in</Text>
                  </View>
        
                  <View style={{ height: 50, width: 50, borderRadius: 50/2, backgroundColor: '#f4511e', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>G</Text>
                  </View>
        
                </View>
        
            </View>
         );
     }

 }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});