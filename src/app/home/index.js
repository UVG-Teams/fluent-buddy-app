import React, { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'
import { reduxForm, Field } from 'redux-form'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import background from '../../assets/home-background.jpg'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import twitter from '../../assets/twitter.png'

const Home = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [isModalVisible2, setModalVisible2] = useState(false);
    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
    };

    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;
 
    return (
        <ImageBackground source={background} style={styles.image}>
            <View style={styles.bottom}>
                <View>
                    <TouchableOpacity style={styles.btnSignUp} onPress={toggleModal}>
                        <Text style={styles.txtSignUp}>Registrarme</Text>
                    </TouchableOpacity>

                    <Modal 
                        isVisible={isModalVisible} 
                        style={styles.bottomModal}
                        onBackdropPress={toggleModal}
                        backdropOpacity={0} 
                        deviceWidth={deviceWidth} 
                        deviceHeight={deviceHeight}>
                        <View style={styles.signUpModal}>
                            <View style={{flexDirection:'row'}}>
                                <View style={styles.viewTxtNewAccount}>
                                    <Text style={styles.txtNewAccount}>Nueva Cuenta</Text>
                                </View>
                                <View>
                                    <View style={{backgroundColor: 'red', borderRadius: 35, width: 70, height:70}}>
                                        <FontAwesomeIcon icon={faCamera} />
                                    </View>
                                    <Text>Subir foto</Text>
                                </View>
                            </View>
                            <View style={styles.inputsView}>
                                <Text style={styles.txtInputs}>Email</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <TextInput style={styles.inputs} />
                                </View>
                            </View>
                            <View style={styles.inputsView}>
                                <Text style={styles.txtInputs}>Usuario</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                                    <FontAwesomeIcon icon={faUser} />
                                    <TextInput style={styles.inputs} />
                                </View>
                            </View>
                            <View style={styles.inputsView}>
                                <Text style={styles.txtInputs}>Contraseña</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                                    <FontAwesomeIcon icon={faLock} />
                                    <TextInput style={styles.inputs} />
                                </View>
                            </View>
                            <View style={styles.bottomSignUp}>
                                <TouchableOpacity style={styles.btnSignUp}>
                                    <Text style={styles.txtSignUp}>Registrarme</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtSignUpWith}>o regístrate con</Text>
                                <View style={{flexDirection: 'row', marginTop: 17}}>
                                    <Image source={require('../../assets/google.png')} style={{width: 27, height: 27}}/>
                                    <Image source={require('../../assets/facebook.png')} style={{width: 27, height: 27, marginLeft: 15, marginRight: 15}}/>
                                    <Image source={require('../../assets/twitter.png')} style={{width: 27, height: 27}}/>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnSignIn} onPress={toggleModal2}>
                        <Text style={styles.txtSignIn}>Iniciar sesión</Text>
                    </TouchableOpacity>

                    <Modal 
                        isVisible={isModalVisible2} 
                        style={styles.bottomModal}
                        onBackdropPress={toggleModal2}
                        backdropOpacity={0} 
                        deviceWidth={deviceWidth} 
                        deviceHeight={deviceHeight}>
                        <View style={styles.signUpModal}>
                            <View style={styles.viewTxtNewAccount}>
                                <Text style={styles.txtNewAccount}>Bienvenido de vuelta</Text>
                            </View>
                            <View style={styles.inputsView}>
                                <Text style={styles.txtInputs}>Usuario</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                                    <FontAwesomeIcon icon={faUser} />
                                    <TextInput style={styles.inputs} />
                                </View>
                            </View>
                            <View style={styles.inputsView}>
                                <Text style={styles.txtInputs}>Contraseña</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                                    <FontAwesomeIcon icon={faLock} />
                                    <TextInput style={styles.inputs} />
                                </View>
                            </View>
                            <View style={styles.bottomSignUp}>
                                <TouchableOpacity style={styles.btnSignUp}>
                                    <Text style={styles.txtSignUp}>Iniciar sesión</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtSignUpWith}>o inicia sesión con</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </ImageBackground>
    )
}

export default (Home)

const styles = StyleSheet.create({
    image: {
        flex: 1
    },

    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 57,

    },

    btnSignUp: {
        backgroundColor: '#3E885B',
        shadowColor: '#161716',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.6,
        borderRadius: 22,
        width: 250,
        padding: 12,
    },

    txtSignUp: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
    },

    btnSignIn: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: '#161716',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.6,
        borderRadius: 22,
        width: 250,
        padding: 12,
    },

    txtSignIn: {
        color: '#3E885B',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
    },

    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },

    signUpModal: {
        backgroundColor: '#FFFFFF',
        height: '65%',
        // borderRadius: 50
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 25,
        paddingLeft: 38,
        paddingRight: 38
    },

    txtNewAccount: {
        fontFamily: 'Poppins-Bold',
        fontSize: 35,
    },

    viewTxtNewAccount: {
        width: '60%',
        marginBottom: 17
    },

    txtInputs: {
        color: '#000000',
        opacity: 0.5,
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },

    inputsView: {
        borderBottomWidth: 2,
        borderBottomColor: '#3E885B',
        marginBottom: 28.5
    },

    inputs: {
        // borderWidth: 2,
        // borderColor: 'black',
        width: '95%',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        paddingLeft: 5
    },

    bottomSignUp: {
        alignItems: 'center',
        marginTop: 33
    },

    txtSignUpWith: {
        color: '#000000',
        opacity: 0.5,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginTop: 13
    }


})

