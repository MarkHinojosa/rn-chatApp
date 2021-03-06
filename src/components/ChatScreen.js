import React, { Component } from 'react'
import { Text, View, TouchableHighlight, ScrollView } from 'react-native'
import Chatkit from '@pusher/chatkit-client';
import WhosOnlineList from './WhosOnlineList';
import MessageList from './MessageList';
import TypingIndicator from './TypingIndicator';
import SendMessageForm from './SendMessageForm';

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
            currentRoom: {},
            messages: [],
            usersWhoAreTyping: [],
        }
    }


    componentDidMount() {
        this.loadChatData();
    }

    loadChatData = () => {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:a8cbb16b-0c43-46f6-851b-976d04bb843b',
            userId: this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'https://tidy-rabbit-91.localtunnel.me/authenticate'
            })
        })

        chatManager
            .connect()
            .then(currentUser => {
                this.setState({ currentUser }, () => (this.state.currentUser, "current user"))
                return currentUser.subscribeToRoom({
                    roomId: '19893490',
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message],
                            })
                        },
                        onUserStartedTyping: user => {
                            this.setState({
                                usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
                            })
                        },
                        onUserStoppedTyping: user => {
                            this.setState({
                                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                                    username => username !== user.name
                                ),
                            })
                        },
                    },
                })
            })
            .then(currentRoom => {
                this.setState({ currentRoom })
            })
            .catch(error => console.error('error', error))
    }
    sendMessage = (text) => {
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        })
    }

    sendTypingEvent = () => {
        this.state.currentUser
            .isTypingIn({ roomId: this.state.currentRoom.id })
            .catch(error => console.error('error', error))
    }

    render() {
        return (
            <View>
                <View style={{ width: "100%", height: '100%', borderWidth: 3, borderColor: "black", flexDirection: 'row' }}>
                    <WhosOnlineList
                        currentUser={this.state.currentUser}
                        users={this.state.currentRoom.users}
                    />
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <MessageList
                            messages={this.state.messages}
                            textStyle={{ color: "white" }}
                        />

                        <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
                        <View style={{
                            flex: 2,
                            justifyContent: 'center',
                            alignContent: 'center',
                            borderColor: 'silver',
                            borderWidth: 3
                        }}>
                            <SendMessageForm
                                onSubmit={this.sendMessage}
                                onChange={this.sendTypingEvent}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
