import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, Text, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'

import background from '../../assets/home-background.jpg'

const Home = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
 
    return (
        <ImageBackground source={background} style={styles.image}>
            <View style={styles.bottom}>
                <View>
                    <TouchableOpacity style={styles.btnSignUp} onPress={toggleModal}>
                        <Text style={styles.txtSignUp}>Registrarme</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalVisible}>
                    <View style={{flex: 1}}>
                        <Text>Hello!</Text>

                        <Button title="Hide modal" onPress={toggleModal} />
                    </View>
                    </Modal>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnSignIn}>
                        <Text style={styles.txtSignIn}>Iniciar sesión</Text>
                    </TouchableOpacity>
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
})

