import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class WhosOnlineList extends Component {
    componentDidMount = () => {
        console.log(this.props)
    }

    // _mapThroughOnlineList = () => {
    //     return (
    //         this.props.users.map((users,index) => {
    //             <Text>{users}</Text>
    //         })
    //     )
    // }

    render() {
        return (
            <View style={{ width: '15%', backgroundColor: '#2c303b' }}>
                {/* {this._mapThroughOnlineList()} */}
            </View>
        )
    }
}

export default WhosOnlineList

