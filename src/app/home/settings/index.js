import React, { useState } from 'react'
import { connect } from 'react-redux'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope, faUser, faLock, faCamera } from '@fortawesome/free-solid-svg-icons'
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image } from 'react-native'
import { logout } from 'state/actions/auth'
import { layoutColors } from 'src/settings'


const Settings = (props, navigation) => {
    const { clearToken } = props;
    return (
        <ImageBackground style={styles.background}>
            <View style={styles.tags}>
                <TouchableOpacity style={styles.btnTag} onPress={ () => navigation.navigate('home')}>
                    <Text style={styles.txtTag}>Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTag}>
                    <Text style={styles.txtTag}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTagSelected}>
                    <Text style={styles.txtTagSelected}>Ajustes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                 
            </View>

            <TouchableOpacity style={styles.buttonSignOut} onPress={() => clearToken()}>
                <Text style={styles.txtSignOut}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}


export default connect(
    state => ({}),
    dispatch => ({
        clearToken() {
            dispatch(logout());
        }
    })
)(Settings)


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
    buttonSignOut: {
        alignItems: 'center',
        marginTop: 33
    },
    txtSignOut: {
        marginTop: 50,
        shadowColor: layoutColors.shadow,
        shadowOffset: { width: 5, height: 6 },
        shadowOpacity: 0.6,
        elevation: 5,
        zIndex: 5,
        borderRadius: 22,
        width: 250,
        padding: 12,
        backgroundColor: layoutColors.teaGreen,
        color: layoutColors.white,
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
    },
})
