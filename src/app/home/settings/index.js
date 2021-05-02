import React, { useState, setState } from 'react'
import { connect } from 'react-redux'

import Modal from 'react-native-modal'
import auth from '@react-native-firebase/auth'
import RadioButtonRN from 'radio-buttons-react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ImageBackground, StyleSheet, Dimensions, View, Text, Switch } from 'react-native'
import { faPalette, faChevronRight, faBell, faLanguage, faKey, faUserFriends, faSignOutAlt, faRobot } from '@fortawesome/free-solid-svg-icons'


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

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);


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

                <TouchableOpacity onPress={toggleModal2}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={styles.functionIcon}>
                                <FontAwesomeIcon icon={faBell} size={18}/>
                            </View>
                            <Text style={styles.txtFunction}>Notificaciones</Text>
                        </View>
                        <FontAwesomeIcon icon={faChevronRight} size={18}/>
                    </View>
                </TouchableOpacity>
                <Modal isVisible={isModalVisible2}
                    style={styles.bottomModal}
                    onBackdropPress={toggleModal2}
                    backdropOpacity={0.7}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}>
                    <View style={styles.confModal}>
                        <View style={{marginBottom: 20}}>
                            <Text style={styles.txtTheme}>Notificaciones</Text>
                        </View>
                        <View>
                            <View style={{marginBottom: 20}}>
                                <Text style={styles.txtSubNotificactions}>Recordatorios</Text>
                                <Text>Recibe recordatorios de conversaciones pendientes para que no olvides conversar</Text>
                            </View>
                            <View>
                                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Text style={{fontFamily: 'Poppins-Medium'}}>Correo electrónico</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true:  layoutColors.seaGreen}}
                                        thumbColor={isEnabled ?  layoutColors.teaGreen : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
                                    <Text style={{fontFamily: 'Poppins-Medium'}}>Móviles</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true:  layoutColors.seaGreen}}
                                        thumbColor={isEnabled2 ?  layoutColors.teaGreen : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch2}
                                        value={isEnabled2}
                                    />
                                </View>
                                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
                                    <Text style={{fontFamily: 'Poppins-Medium'}}>SMS</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true:  layoutColors.seaGreen}}
                                        thumbColor={isEnabled2 ?  layoutColors.teaGreen : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch2}
                                        value={isEnabled2}
                                    />
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{marginBottom: 20}}>
                                <Text style={styles.txtSubNotificactions2}>Promociones y Consejos</Text>
                                <Text>Recibe cupones, promociones, encuestas, novedades y noticias</Text>
                            </View>
                            <View>
                                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Text style={{fontFamily: 'Poppins-Medium'}}>Correo electrónico</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true:  layoutColors.seaGreen}}
                                        thumbColor={isEnabled ?  layoutColors.teaGreen : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
                                    <Text style={{fontFamily: 'Poppins-Medium'}}>Móviles</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true:  layoutColors.seaGreen}}
                                        thumbColor={isEnabled2 ?  layoutColors.teaGreen : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch2}
                                        value={isEnabled2}
                                    />
                                </View>
                                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
                                    <Text style={{fontFamily: 'Poppins-Medium'}}>SMS</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true:  layoutColors.seaGreen}}
                                        thumbColor={isEnabled2 ?  layoutColors.teaGreen : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch2}
                                        value={isEnabled2}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

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
            if (auth().currentUser) {
                auth().signOut().then(() => {
                    dispatch(logout())
                })
            } else {
                dispatch(logout())
            }
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
        paddingBottom: 35
    },
    txtTheme: {
        color: layoutColors.black,
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
    },
    txtSubNotificactions: {
        color: layoutColors.black,
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        marginBottom: 3
    },
    txtSubNotificactions2: {
        color: layoutColors.black,
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        marginBottom: 3,
        marginTop: 30
    }
})
