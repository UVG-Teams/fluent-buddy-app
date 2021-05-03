import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'


import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app'
import Flag from 'react-native-flags'
import Modal from 'react-native-modal'
import RadioGroup from 'react-native-custom-radio-group'
import DropDownPicker from 'react-native-dropdown-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faFemale, faMale } from '@fortawesome/free-solid-svg-icons'
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image } from 'react-native'


import { layoutColors } from 'src/settings'
import * as selectors from 'state/reducers'
import * as actions from 'state/actions/selects'
import * as chatroomActions from 'state/actions/chatrooms'


const Home = ({ navigation, isModalVisible, setModalVisible, createChat }) => {
    const [chatrooms, setChatrooms] = useState([])

    useEffect(() => {
        firebase.firestore().collection('chatrooms').onSnapshot(querySnapshot => {
            const temp = []
            querySnapshot.forEach(doc => {
                if (doc.exists) {
                    temp.push({
                        id: doc.id,
                        ...doc.data()
                    })
                }
            })
            setChatrooms(currentChatrooms => temp)
        })
    }, [])

    const toggleModal = () => setModalVisible()

    const deviceWidth = Dimensions.get('window').width
    const deviceHeight = Dimensions.get('window').height

    const radioGroupList = [{
        // label: () => <FontAwesomeIcon icon={ faFemale } size={ 40 } />,
        label: "She",
        value: 'female'
    }, {
        // label: () => <FontAwesomeIcon icon={ faMale } size={ 40 } />,
        label: "He",
        value: 'male'
    }]

    const [language, setLanguage] = useState('us')
    const [gender, setGender] = useState('male')
    const [name, setName] = useState('Luca')

    const [languages, setLanguages] = useState([
        { label: 'Ruso',        value: 'ru', icon: () => <Flag code='RU' size={ 32 } /> },
        { label: 'Inglés',      value: 'us', icon: () => <Flag code='US' size={ 32 } /> },
        { label: 'Aleman',      value: 'de', icon: () => <Flag code='DE' size={ 32 } /> },
        { label: 'Frances',     value: 'fr', icon: () => <Flag code='FR' size={ 32 } /> },
        { label: 'Italiano',    value: 'it', icon: () => <Flag code='IT' size={ 32 } /> },
    ])

    const controller = useRef(null)

    return (
        <ImageBackground style={ styles.background }>
            <View style={ styles.tags }>
                <TouchableOpacity style={ styles.btnTagSelected }>
                    <Text style={ styles.txtTagSelected }>Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.btnTag }  onPress={ () => navigation.navigate('profile') }>
                    <Text style={ styles.txtTag }>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.btnTag } onPress={ () => navigation.navigate('settings') }>
                    <Text style={ styles.txtTag }>Ajustes</Text>
                </TouchableOpacity>
            </View>
            <View style={ styles.body }>
                <View style={ styles.bodyHeader }>
                    <Text style={ styles.txtAllChats }>Todos los chats</Text>
                    <FontAwesomeIcon icon={ faSearch } size={ 18 } />
                </View>
                {
                    chatrooms.map(chatroom => (
                        <TouchableOpacity key={ chatroom.id } onPress={ () => navigation.navigate('chat', { chatroom: chatroom }) }>
                            <View style={ styles.conversation }>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <Image source={ require('assets/USA.jpg') } style={ styles.imgConversation } />
                                    </View>
                                    <View style={ styles.previewConversation }>
                                        <Text style={ styles.txtConversationName }>{ 'NAME' }</Text>
                                        <Text style={ styles.txtConversationPreview }>{ chatroom.last_message && chatroom.last_message.text }</Text>
                                    </View>
                                </View>
                                <View style={ styles.hourConversation }>
                                    <Text style={ styles.txtHourConversation }>{ chatroom.last_message && new Date(chatroom.last_message.sent_at.seconds * 1000).toLocaleTimeString() }</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View>
                <Modal
                    isVisible={ isModalVisible }
                    // style={ styles.newChatModal }
                    onBackdropPress={ toggleModal }
                    backdropOpacity={ 0.7 }
                    deviceWidth={ deviceWidth }
                    deviceHeight={ deviceHeight }
                >
                    <View style={ styles.newChatModal }>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={ styles.txtNewChat }>Nuevo chat</Text>
                        </View>
                        <View style={{ zIndex: 1 }}>
                            <DropDownPicker
                                items={ languages }
                                controller={ instance => controller.current = instance }
                                onChangeList={(languages, callback) => {
                                    Promise.resolve(setLanguages(languages)).then(() => callback())
                                }}
                                defaultValue={ language }
                                onChangeItem={ item => setLanguage(item.value) }
                                placeholder='Seleccionar idioma'
                                containerStyle={{ height: 50 }}
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
                        <View style={{ width: '100%', marginTop: 35 }}>
                            <RadioGroup
                                radioGroupList={ radioGroupList }
                                buttonContainerStyle={{ borderWidth: 1, borderColor: 'black', width: '48%' }}
                                buttonContainerActiveStyle={{ backgroundColor: layoutColors.teaGreen }}
                            />
                        </View>
                        <View style={{ width: '100%', marginTop: 35 }}>
                            <TextInput
                                style={ styles.iptBotName }
                                placeholder='Nombre'
                                value={ name }
                                onChangeText={ text => setName(text) }
                            />
                        </View>
                        <View>
                            <TouchableOpacity style={ styles.btnStart } onPress={ () => createChat(language, gender, name) }>
                                <Text style={ styles.txtStart }>¡Comenzar!</Text>
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
        isModalVisible: selectors.getIsModalVisible(state),
    }),
    dispatch => ({
        setModalVisible() {
            dispatch(actions.setModalVisible(false))
        },
        createChat(language, gender, name) {
            dispatch(chatroomActions.startCreateChatroom({ language, gender, name }))
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
        paddingTop: 11,
        paddingBottom: 11,
        paddingLeft: 10,
        paddingRight: 10
    }
})
