import * as React from 'react' 
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export default class LoginScreen extends React.Component {

    render() {
        
        return(
            <View style= { styles.container}>
                <Text style={{ fontSize: 22, marginTop: 20 }}>Welcome to UBX!</Text>
                <Text style={{ fontSize: 16, color: 'gray', marginTop: 20 }}>Sign in to continue</Text>

                <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20
                    }}
                    placeholder="Username"
                />

                <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20
                    }}
                    placeholder="Password"
                />

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    <TouchableOpacity style={{ width: 200, backgroundColor: '#f57c00', paddingBottom: 10, justifyContent: 'center', borderRadius: 40, marginTop: 30 }}>
                        <Text style= {{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>

                    <Text style= {{ marginTop: 20 }}>Forgot Password ?</Text>

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

                <View style= {{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style= {{ color: 'gray' }}>Don't have an account?</Text>
                    <Text style= {{ fontWeight: 'bold' }}>Sign Up</Text>
                </View>

            </View>
         </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20
    }
})