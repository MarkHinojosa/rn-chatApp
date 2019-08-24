import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class WhosOnlineList extends Component {

    _mapThroughOnlineList = () => {
        return (
            this.props.users.map((user, index) => {
                console.log(user.presence.state, "user presence state")
                if (user.name === this.props.currentUser.name) {
                    return (
                        <Text style={{ color: 'white', margin: 2 }} key={index}> {user.name} (You)</Text>
                    )
                } else if (user.presence.state === 'online') {
                    return (
                        <Text style={{ color: 'white', margin: 2 }} key={index}> {user.name} (on) </Text>
                    )
                } else {
                    return (
                        <Text style={{ color: 'white', margin: 2 }} key={index}> {user.name} (off) </Text>
                    )
                }
            }))
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

