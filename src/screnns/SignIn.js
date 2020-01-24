import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    Button, TextInput, StyleSheet
} from 'react-native';
import { localStrings } from '../helpers/strings';
import { isEmail } from '../helpers/Validations';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }

    componentDidMount() {

    }

    onClick() {
        const { email, password } = this.state;
        if (!isEmail(email)) {
            this.setState({
                error: localStrings.email,
            });
        } else {
            if (password == '') {
                this.setState({
                    error: localStrings.password,
                });
            }

        }
    }

    render() {

        return (

            <View style={styles.container}>

                <View style={styles.inputlableContainer}>

                    <View style={styles.detailContainer}>
                        <Text>Email</Text>
                    </View>

                    <TextInput
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        placeholder={'Email'}
                        style={styles.input}
                    />
                </View>

                <View style={styles.passwordContainer}>

                    <View style={styles.detailContainer}>
                        <Text>Password</Text>
                    </View>


                    <TextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>

                <View style={styles.buttionContainer}>


                    <Button
                        title={'Sign-in'}
                        style={styles.input}
                        onPress={this.onClick.bind(this)}
                    />
                    {/* <View>
                        <Text>{this.state.error}</Text>
                    </View> */}

                </View>

                <View style={styles.errorContainer}>
                    <View>
                        <Text style={styles.text} >{this.state.error}</Text>
                    </View>

                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        //   padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        alignItems: 'flex-end',
        marginRight: 15,
    },
    inputlableContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        // marginLeft: 15,
        // alignItems: 'flex-start',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        //   marginLeft: 15,
    },
    buttionContainer: {
        alignSelf: 'flex-end',
        marginRight: 30,
        // backgroundColor: 'red',
    },
    errorContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailContainer: {
        flex: 1,
        marginLeft: 15,
    },
    text: {
        fontSize: 12,
        color: 'red',
        marginLeft: 0,
        //  fontWeight: '600'
    },
});

export default SignIn