import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class WhosOnlineList extends Component {

    _mapThroughOnlineList = () => {
        return (
            this.props.users.map((user, index) =>
                <Text style={{ color: 'white', margin: 2 }} key={index}> {user.name} </Text>
            ))
    }

    render() {
        if (this.props.users) {
            return (
                <View style={{ backgroundColor: '#2c303b' }}>
                    {this._mapThroughOnlineList()}
                </View>
            )
        } else {
            return <Text>Loading...</Text>
        }
    }
}

export default WhosOnlineList

