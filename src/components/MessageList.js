import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class MessageList extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
    }

    _mapThroughMessages = () => {
        return (
            this.props.messages.map((message, index) =>
                <View style={{ margin:2 }} key={index}>
                    <Text>{message.text}</Text>
                </View>
            )
        )
    }

    render() {
        return (
            <View style={{ width: "100%", height: "80%" }}>
                {this._mapThroughMessages()}
            </View>
        )
    }
}

export default MessageList
