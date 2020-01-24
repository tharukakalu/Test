import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from "react-native";

const TextInputwithLable = ({ title, }) => {

    const {
        container,
        lableContainer,
        input,
        textContainer
    } = styles;

    return (
        <View style={container}>

            <View style={lableContainer}>
                <Text>Email</Text>
            </View>

            <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                placeholder={'Email'}
                style={styles.input}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    lableContainer: {
        flex: 1,

        alignItems: "right",
        // justifyContent: 'center',
        height: 100,
        width: 100,

    },
    textContainer: {
        flex: 5,
        justifyContent: "center",
        flexDirection: "column",
        //  backgroundColor: '#e74c3c',
        // padding: 8,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },

});

export default TextInputwithLable;
