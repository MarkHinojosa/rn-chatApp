import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'

export class SendMessageForm extends Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }

    _onChange = (t) => {
        this.props.onChange()
        this.setState({ message: t }, console.log(this.state));
    }

    _onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.message);
    }

    render() {
        return (
            <View style={{
                width: '100%',
                justifyContent: 'space-around',
                alignContent: 'center',
                flexDirection: 'row',
                // borderColor: 'silver',
                // borderWidth: 3,
            }}>
                <TextInput
                    onChangeText={(t) => this._onChange(t)}
                    onSubmitEditing={this._onSubmit}
                    style={{
                        // height: '80%',
                        borderRadius: 10,
                        width: '80%',
                        borderColor: 'silver',
                        borderWidth: 3,
                    }}
                />

                <TouchableHighlight style={{
                    alignContent: 'center',
                    justifyContent: 'center',

                }}>
                    <Text style={{
                        backgroundColor: "green",
                        color:'white',
                        borderRadius: 2,
                    }}>
                        Send
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default SendMessageForm
