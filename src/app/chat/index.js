import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faPhoneAlt, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { ImageBackground, StyleSheet, View, Text, TextInput, Image, ScrollView } from 'react-native'

import { layoutColors } from 'src/settings'


const Chat = ({ navigation, chatroom, sendMessage }) => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState()

    useEffect(() => {
        firebase.firestore().collection("chatrooms").doc(chatroom.id).collection("messages").orderBy("sent_at").limit(50).onSnapshot(querySnapshot => {
            const chatroomMessages = []
            querySnapshot.forEach(doc => {
                if (doc.exists) {
                    chatroomMessages.push({
                        id: doc.id,
                        ...doc.data()
                    })
                }
            })
            setMessages(chatroomMessages)
        })
    }, [])

    return (
        <ImageBackground style={ styles.background }>
            <View style={ styles.chatHeader }>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('home')}>
                            <FontAwesomeIcon icon={ faChevronLeft } size={ 20 } color={ layoutColors.white } />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 25 }}>
                        <Image source={require('assets/USA.jpg')} style={ styles.imgConversation } />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={ styles.txtChatName }>{ 'NAME' }</Text>
                    </View>
                </View>
                <View>
                    <FontAwesomeIcon icon={ faPhoneAlt } size={ 20 } color={ layoutColors.white } />
                </View>
            </View>
            <View style={ styles.body }>
                <View style={{ height: '80%', paddingBottom: 29 }}>
                    <ScrollView>
                        <View >
                            <Text style={ styles.txtDate }>Hoy, 23/03/20</Text>
                        </View>
                        {/* <View style={{marginTop: 18}}>
                            <View style={styles.botBubble}>
                            </View>
                            <View style={{marginTop: 5}}>
                                <Text style={styles.txtMessageHourBot}>13:10 PM</Text>
                            </View>
                        </View>
                        <View style={{marginTop: 18, width: '100%', alignItems: 'flex-end' }}>
                            <View style={styles.userBubble}>
                            </View>
                            <View style={{marginTop: 5}}>
                                <Text style={styles.txtMessageHourUser}>13:11 PM</Text>
                            </View>
                        </View> */}
                        {
                            messages.map(message => (
                                <View key={ message.id } style={{ marginTop: 18, width: '100%', alignItems: 'flex-end' }}>
                                    <View style={ styles.userBubble }>
                                        <Text>{ message.text }</Text>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text style={ styles.txtMessageHourUser }>{ new Date(message.sent_at.seconds * 1000).toLocaleTimeString() }</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <TextInput
                            style={ styles.iptMessage }
                            value={ newMessage }
                            onChangeText={ text => setNewMessage(text) }
                        />
                    </View>
                    <View style={ styles.btnVoiceNote }>
                        <TouchableOpacity onPress={ () => sendMessage(chatroom.id, newMessage) }>
                            <FontAwesomeIcon icon={ faMicrophone } size={ 20 }/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}


export default connect(
    (state, { route }) => ({
        chatroom: route.params.chatroom
    }),
    dispatch => ({
        sendMessage( chatroom_id, message) {
            firebase.firestore().collection("chatrooms").doc(chatroom_id).collection("messages").add({
                text: message,
                sent_at: new Date(),
                sent_by: 'uid1'
            })
        }
    })
)(Chat)


const styles = StyleSheet.create({
    background: {
        backgroundColor: layoutColors.seaGreen,
    },
    chatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center'
    },
    imgConversation: {
        width: 50,
        height: 50,
        borderRadius: 15
    },
    txtChatName: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: layoutColors.white
    },
    body: {
        backgroundColor: layoutColors.white,
        height: '90%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 20,
        paddingLeft: 27,
        paddingRight: 27,
        paddingTop: 29
    },
    txtDate: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        textAlign: 'center',
        color: layoutColors.black,
        opacity: 0.5
    },
    botBubble: {
        backgroundColor: layoutColors.lightGray,
        width: 255,
        height: 62, //Cambiar a 'Auto' a la hora de conectarlo con backend
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    userBubble: {
        backgroundColor: layoutColors.teaGreen,
        width: 255,
        height: 62, //Cambiar a 'Auto' a la hora de conectarlo con backend
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    txtMessageHourBot: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: layoutColors.black,
        opacity: 0.5
    },
    txtMessageHourUser: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: layoutColors.black,
        opacity: 0.5
    },
    iptMessage: {
        backgroundColor: layoutColors.lightGray,
        width: 320,
        height: 40,
        borderRadius: 30,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'Poppins-Regular'
    },
    btnVoiceNote: {
        backgroundColor: layoutColors.teaGreen,
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
