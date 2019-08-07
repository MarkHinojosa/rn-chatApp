import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class WhosOnlineList extends Component {
    componentDidMount = () => {
        console.log(this.props, "this is the props")
    }

    _mapThroughOnlineList = () => {
        if (this.props.users > 0) {
            return (
                this.props.users.map((users, index) => {
                    <Text style={{color: "white"}}>{users}</Text>
                })
            )
        } else {
            return (
                <Text style={{color: "white"}}>blah </Text>
            )
        }
    }

    render() {
        return (
            <View style={{ width: '15%', backgroundColor: '#2c303b' }}>
                {this._mapThroughOnlineList()}
            </View>
        )
    }
}

export default WhosOnlineList

