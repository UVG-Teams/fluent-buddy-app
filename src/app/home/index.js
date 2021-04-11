import React, { useState } from 'react'
import { connect } from 'react-redux'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image } from 'react-native'
import { layoutColors } from 'src/settings'


const Home = () => {
    return (
        <ImageBackground style={styles.background}>
            <View style={styles.tags}>
                <TouchableOpacity style={styles.btnTagSelected}>
                    <Text style={styles.txtTagSelected}>Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTag}>
                    <Text style={styles.txtTag}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTag}>
                    <Text style={styles.txtTag}>Ajustes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyHeader}>
                    <Text style={styles.txtAllChats}>Todos los chats</Text>
                    <FontAwesomeIcon icon={faSearch} size={18}/>                
                </View>
                <View style={styles.conversation}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View>
                            <Image source={require('assets/USA.jpg')} style={styles.imgConversation}/>
                        </View>
                        <View style={styles.previewConversation}>
                            <Text style={styles.txtConversationName}>Harry</Text>
                            <Text style={styles.txtConversationPreview}>Don't forget to use your ...</Text>
                        </View>
                    </View>
                    <View style={styles.hourConversation}>
                        <Text style={styles.txtHourConversation}>13:30</Text>
                    </View>
                </View>
                <View style={styles.conversation}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View>
                            <Image source={require('assets/ITA.jpg')} style={styles.imgConversation}/>
                        </View>
                        <View style={styles.previewConversation}>
                            <Text style={styles.txtConversationName}>Chiara</Text>
                            <Text style={styles.txtConversationPreview}>Ehi là! Come va?</Text>
                        </View>
                    </View>
                    <View style={styles.hourConversation}>
                        <Text style={styles.txtHourConversation}>13:10</Text>
                    </View>
                </View>
                <View style={styles.conversation}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View>
                            <Image source={require('assets/FRA.png')} style={styles.imgConversation}/>
                        </View>
                        <View style={styles.previewConversation}>
                            <Text style={styles.txtConversationName}>Antoine</Text>
                            <Text style={styles.txtConversationPreview}>Quoi de neuf?</Text>
                        </View>
                    </View>
                    <View style={styles.hourConversation}>
                        <Text style={styles.txtHourConversation}>12:45</Text>
                        <View style={styles.unopenMessage}>
                            <Text style={styles.txtUnopenMessage}>1</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}


export default (Home)


const styles = StyleSheet.create({
    background: {
        backgroundColor: layoutColors.seaGreen,
    },
    tags: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 130,
        paddingLeft: 30,
        paddingRight: 30,
    },
    btnTagSelected: {
        backgroundColor: layoutColors.teaGreen,
        padding: 10,
        borderRadius: 10,
        width: 107
    },
    btnTag: {
        padding: 10,
        borderRadius: 10,
        width: 107,
        height: 47
    },
    txtTagSelected: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium'
    },
    txtTag: {
        fontSize: 18,
        textAlign: 'center',
        color: layoutColors.white,
        fontFamily: 'Poppins-Medium'
    },
    body: {
        backgroundColor: layoutColors.white,
        height: '80%',
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
