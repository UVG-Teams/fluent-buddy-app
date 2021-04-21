import React, { useState, setState } from 'react'
import { connect } from 'react-redux'

import Modal from 'react-native-modal'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPalette, faChevronRight, faBell, faLanguage, faKey, faUserFriends, faSignOutAlt, faRobot } from '@fortawesome/free-solid-svg-icons'
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image } from 'react-native'
import RadioButtonRN from 'radio-buttons-react-native'


import { logout } from 'state/actions/auth'
import { layoutColors } from 'src/settings'



const Settings = (props) => {
    const { clearToken } = props;

    const [isModalVisible, setModalVisible] = useState(false)
    const toggleModal = () => setModalVisible(!isModalVisible)

    const [isModalVisible2, setModalVisible2] = useState(false)
    const toggleModal2 = () => setModalVisible2(!isModalVisible2)

    const deviceWidth = Dimensions.get("window").width
    const deviceHeight = Dimensions.get("window").height

    const data = [
        {
            label: 'Verdes'
        },
        {
            label: 'Azules'
        },
        {
            label: 'Oscuro'
        }
    ];

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
                <TouchableOpacity onPress={toggleModal}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={styles.functionIcon}>
                                <FontAwesomeIcon icon={faPalette} size={18}/>
                            </View>
                            <Text style={styles.txtFunction}>Tema</Text>
                        </View>
                        <FontAwesomeIcon icon={faChevronRight} size={18}/>
                    </View>
                </TouchableOpacity>
                <Modal isVisible={isModalVisible}
                    style={styles.bottomModal}
                    onBackdropPress={toggleModal}
                    backdropOpacity={0.7}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}>
                    <View style={styles.confModal}>
                        <View style={{marginBottom: 20}}>
                            <Text style={styles.txtTheme}>Seleccione un tema:</Text>
                        </View>
                        <View>
                            <RadioButtonRN
                                data={data}
                                icon = {<FontAwesomeIcon icon={faRobot} size={18} color={layoutColors.seaGreen}/>}
                                activeColor = {layoutColors.seaGreen}
                                textStyle = {{fontFamily: 'Poppins-Medium', fontSize: 15}}
                                animationTypes = {['rotate']}
                                selectedBtn={(e) => console.log('Hola presionaste: ',e)}
                            />
                        </View>
                    </View>


                </Modal>


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
        paddingTop: 29,
        marginBottom: 60
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
    confModal: {
        backgroundColor: layoutColors.white,
        height: 'auto',
        borderRadius: 50,
        paddingTop: 25,
        paddingLeft: 38,
        paddingRight: 38,
        paddingBottom: 25
    },
    txtTheme: {
        color: layoutColors.black,
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
    },
})
