import React, { useState } from 'react'
import { connect } from 'react-redux'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image } from 'react-native'
import { layoutColors } from 'src/settings'


const Chat = ({navigation}) => {
    return (
        <ImageBackground style={styles.background}>
            <View style={styles.chatHeader}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                        <FontAwesomeIcon icon={faChevronLeft} size={20} color={layoutColors.white}/>  
                    </View>
                    <View style={{marginLeft: 25}}>
                        <Image source={require('assets/USA.jpg')} style={styles.imgConversation}/>
                    </View>
                    <View style={{marginLeft: 20}}>
                        <Text style={styles.txtChatName}>Harry</Text>
                    </View>
                </View>
                <View>
                    <FontAwesomeIcon icon={faPhoneAlt} size={20} color={layoutColors.white}/>  
                </View>
            </View>
            <View style={styles.body}>
            </View>
        </ImageBackground>
    )
}


export default (Chat)


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
    bodyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtAllChats: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium'
    },
    conversation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 45,
        alignItems: 'center'
    },
    imgConversation: {
        width: 50,
        height: 50,
        borderRadius: 15
    },
    previewConversation: {
        marginLeft: 19
    },
    txtConversationName: {
        fontWeight: 'bold',
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    },
    txtConversationPreview: {
        fontSize: 14,
        color: layoutColors.black,
        opacity: 0.5,
        marginTop: 3,
        fontFamily: 'Poppins-Medium'
    },
    hourConversation: {
        flexDirection: 'column-reverse',
        height: '100%',
        paddingBottom: 5,
        alignItems: 'center'
    },
    txtHourConversation: {
        color: layoutColors.black,
        opacity: 0.5,
        fontFamily: 'Poppins-Medium'
    },
    unopenMessage: {
        backgroundColor: layoutColors.black,
        borderRadius: 40,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2
    },
    txtUnopenMessage: {
        color: layoutColors.white,
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    }

})
