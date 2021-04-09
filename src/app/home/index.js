import React, { useState } from 'react'
import { connect } from 'react-redux'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image } from 'react-native'
import { logout } from 'state/actions/auth'
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
                <View>
                    <Text style={styles.txtAllChats}>Todos los chats</Text>
                    <FontAwesomeIcon icon={faSearch} />
                </View>
            </View>
            
        </ImageBackground>
    )
}


export default (Home)


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: layoutColors.seaGreen,
    },
    tags: {
        flex: 1,
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
        textAlign: 'center'
    },
    txtTag: {
        fontSize: 18,
        textAlign: 'center',
        color: layoutColors.white
    },
    body: {
        backgroundColor: layoutColors.white,
        height: '78%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    txtAllChats: {
        fontSize: 18,
        marginLeft: 27,
        marginTop: 29
    }
})
