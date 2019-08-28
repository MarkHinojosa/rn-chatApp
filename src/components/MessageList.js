import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

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
                <View style={{ margin: 2, backgroundColor: '#4169e1' }} key={index}>
                    <Text style={this.props.textStyle}>{message.text}</Text>
                </View>
            )
        )
    }

    render() {
        return (
            <View style={{ width: "100%", height: '85%'}}>
                <ScrollView>
                    {this._mapThroughMessages()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    messageListText: {
        color: 'purple'
    }
})

export default MessageList
