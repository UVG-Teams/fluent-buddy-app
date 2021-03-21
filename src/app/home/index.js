import React, { useState } from 'react'
import { connect } from 'react-redux'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope, faUser, faLock, faCamera } from '@fortawesome/free-solid-svg-icons'
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image } from 'react-native'

import { layoutColors } from 'src/settings'


const Home = () => {
    return (
        <ImageBackground style={styles.image}>
        </ImageBackground>
    )
}


export default connect(
    state => ({}),
    dispatch => ({})
)(Home)


const styles = StyleSheet.create({
    image: {
        flex: 1,
        backgroundColor: layoutColors.gray
    }
})
