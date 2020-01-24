import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native';

class SignIn extends Component {

    componentDidMount() {

    }

    render() {

        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Text>SignIn</Text>
            </View>
        )
    }
}


export default SignIn