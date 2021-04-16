import React, { useState } from 'react'
import { connect } from 'react-redux'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPalette, faChevronRight, faBell, faLanguage, faKey, faUserFriends, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image } from 'react-native'
import { logout } from 'state/actions/auth'
import { layoutColors } from 'src/settings'


const Settings = (props) => {
    const { clearToken } = props;
    return (
        <ImageBackground style={styles.background}>
            <View style={styles.tags}>
                <TouchableOpacity style={styles.btnTag} onPress={ () => props.navigation.navigate('home')}>
                    <Text style={styles.txtTag}>Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTag} onPress={ () => props.navigation.navigate('profile') }>
                    <Text style={styles.txtTag}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTagSelected}>
                    <Text style={styles.txtTagSelected}>Ajustes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.functionIcon}>
                            <FontAwesomeIcon icon={faPalette} size={18}/>
                        </View>
                        <Text style={styles.txtFunction}>Tema</Text>
                    </View>
                    <FontAwesomeIcon icon={faChevronRight} size={18}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.functionIcon}>
                            <FontAwesomeIcon icon={faBell} size={18}/>
                        </View>
                        <Text style={styles.txtFunction}>Notificaciones</Text>
                    </View>
                    <FontAwesomeIcon icon={faChevronRight} size={18}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.functionIcon}>
                            <FontAwesomeIcon icon={faLanguage} size={18}/>
                        </View>
                        <Text style={styles.txtFunction}>Lenguaje</Text>
                    </View>
                    <FontAwesomeIcon icon={faChevronRight} size={18}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.functionIcon}>
                            <FontAwesomeIcon icon={faKey} size={18}/>
                        </View>
                        <Text style={styles.txtFunction}>Cuenta</Text>
                    </View>
                    <FontAwesomeIcon icon={faChevronRight} size={18}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.functionIcon}>
                            <FontAwesomeIcon icon={faUserFriends} size={18}/>
                        </View>
                        <Text style={styles.txtFunction}>Contáctanos</Text>
                    </View>
                    <FontAwesomeIcon icon={faChevronRight} size={18}/>
                </View>
                <TouchableOpacity onPress={() => clearToken()}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={styles.functionIcon}>
                                <FontAwesomeIcon icon={faSignOutAlt} size={18}/>
                            </View>
                            <Text style={styles.txtFunction}>Cerrar sesión</Text>
                        </View>
                        <FontAwesomeIcon icon={faChevronRight} size={18}/>
                    </View>
                </TouchableOpacity>
            </View>
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
    functionIcon: {
        backgroundColor: layoutColors.teaGreen,
        alignItems: 'center',
        padding: 13,
        borderRadius: 10,
    },
    txtFunction: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        marginLeft: 15
    },
})
