import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export class SendMessageForm extends Component {
    render() {
        return (
            <View stle={{borderColor: 'black', borderWidth: 3, width: '80%'}}>
                <TextInput
                style={{
                    borderColor: 'gray',
                    borderWidth: 3,
                    width: '100%'
                }}
                />
            </View>
        )
    }
}

export default SendMessageForm
