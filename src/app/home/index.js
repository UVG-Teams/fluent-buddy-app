import React, { useState } from 'react'
import { connect } from 'react-redux'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope, faUser, faLock, faCamera } from '@fortawesome/free-solid-svg-icons'
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image } from 'react-native'
import { logout } from 'state/actions/auth'
import { layoutColors } from 'src/settings'


const Home = (props) => {
    const { clearToken } = props;
    return (
        <ImageBackground style={styles.image}>
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
)(Home)


const styles = StyleSheet.create({
    image: {
        flex: 1,
        backgroundColor: layoutColors.gray
    },

    buttonSignOut: {
        alignItems: 'center',
        marginTop: 33
    },
    txtSignOut: {
        shadowColor: layoutColors.shadow,
        shadowOffset: { width: 5, height: 6 },
        shadowOpacity: 0.6,
        elevation: 5,
        zIndex: 5,
        borderRadius: 22,
        width: 250,
        padding: 12,
        backgroundColor: layoutColors.color1,

        color: layoutColors.white,
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
    },
})
