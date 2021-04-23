import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faFemale, faMale } from '@fortawesome/free-solid-svg-icons'
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image } from 'react-native'
import Modal from 'react-native-modal'
import DropDownPicker from 'react-native-dropdown-picker'
import Flag from 'react-native-flags'
import RadioGroup from 'react-native-custom-radio-group'
// import SwitchSelector from "react-native-switch-selector"

import { layoutColors } from 'src/settings'
import * as selectors from 'state/reducers'
import * as actions from 'state/actions/selects'




const Home = ({navigation, isModalVisible, setModalVisible}) => {

    const toggleModal = () => setModalVisible()

    const deviceWidth = Dimensions.get("window").width
    const deviceHeight = Dimensions.get("window").height


    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Inglés', value: 'eng', icon: () => <Flag code="US" size={32} />},
        {label: 'Italiano', value: 'ita', icon: () => <Flag code="IT" size={32} />},
        {label: 'Frances', value: 'fre', icon: () => <Flag code="FR" size={32} />},
        {label: 'Aleman', value: 'ger', icon: () => <Flag code="DE" size={32} />},
        {label: 'Ruso', value: 'rus', icon: () => <Flag code="RU" size={32} />},
        {label: 'Portugues', value: 'por', icon: () => <Flag code="PT" size={32} />},
     ]);

    const controller = useRef(null);

    const radioGroupList = [{
        label: () => <FontAwesomeIcon icon={faFemale} size={40}/>,
        value: 'female'
      }, {
        label: () => <FontAwesomeIcon icon={faMale} size={40} />,
        value: 'male'
      }];

    return (
        <ImageBackground style={styles.background}>
            <View style={styles.tags}>
                <TouchableOpacity style={styles.btnTagSelected}>
                    <Text style={styles.txtTagSelected}>Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTag}  onPress={ () => navigation.navigate('profile')}>
                    <Text style={styles.txtTag}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTag} onPress={ () => navigation.navigate('settings')}>
                    <Text style={styles.txtTag}>Ajustes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyHeader}>
                    <Text style={styles.txtAllChats}>Todos los chats</Text>
                    <FontAwesomeIcon icon={faSearch} size={18}/>
                </View>
                <TouchableOpacity onPress={ () => navigation.navigate('chat')}>
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
                </TouchableOpacity>
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
            <View>
                <Modal isVisible={isModalVisible}
                    // style={styles.newChatModal}
                    onBackdropPress={toggleModal}
                    backdropOpacity={0.7}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}>   
                    <View style={styles.newChatModal}>
                        <View style={{marginBottom: 20}}>
                            <Text style={styles.txtNewChat}>Nuevo chat</Text>
                        </View>
                        <View style={{zIndex: 1}}>
                            <DropDownPicker
                                items={items}
                                controller={instance => controller.current = instance}
                                onChangeList={(items, callback) => {
                                    Promise.resolve(setItems(items))
                                        .then(() => callback());
                                }}

                                defaultValue={value}
                                onChangeItem={item => setValue(item.value)}
                                containerStyle={{height: 50}}
                                labelStyle={{
                                    fontFamily: 'Poppins-Medium', 
                                    alignSelf: 'center', 
                                    fontSize: 16
                                }}
                                style={{
                                    borderColor: layoutColors.black, 
                                    borderTopLeftRadius: 10, 
                                    borderTopRightRadius: 10, 
                                    borderBottomLeftRadius: 10, 
                                    borderBottomRightRadius: 10,
                                }}
                                dropDownStyle={{
                                    borderBottomLeftRadius: 20, 
                                    borderBottomRightRadius: 20,
                                    borderColor: layoutColors.black
                                }}
                            />
                        </View>
                        <View style={{width: '100%', marginTop: 35}}>
                            <RadioGroup 
                                radioGroupList={radioGroupList}
                                buttonContainerStyle={{borderWidth: 1, borderColor: 'black', width: '48%'}}
                                buttonContainerActiveStyle={{backgroundColor: layoutColors.teaGreen}}
                            />
                        </View>
                        <View style={{width: '100%', marginTop: 35}}>
                                <TextInput 
                                    style={styles.iptBotName}
                                    placeholder='Nombre (Opcional)'
                                />
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnStart}>
                                <Text style={styles.txtStart}>¡Comenzar!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ImageBackground>
    )
}


export default connect(
    state => ({
        isModalVisible: selectors.getIsModalVisible(state)
    }),
    dispatch => ({
        setModalVisible(){
            dispatch(actions.setModalVisible(false))
        }
    })
)(Home)


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
    },
    newChatModal: {
        backgroundColor: layoutColors.white,
        // width: 'auto',
        height: 'auto',
        borderRadius: 50,
        paddingTop: 25,
        paddingLeft: 38,
        paddingRight: 38,
        paddingBottom: 35
    },
    txtNewChat: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20
    },
    btnStart: {
        backgroundColor: layoutColors.teaGreen,
        borderRadius: 10,
        paddingBottom: 14,
        paddingTop: 14,
        marginTop: 40
    },
    txtStart: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        textAlign: 'center'
    },
    iptBotName: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        borderColor: layoutColors.black,
        borderWidth: 1,
        borderRadius: 10,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10
    }
})
