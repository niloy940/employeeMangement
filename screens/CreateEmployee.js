import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const createEmployee = ()=> {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [salary, setSalary] = useState('')
    const [picture, setPicture] = useState('')
    const [modal, setModal] = useState(false)

    return (
        <View style={styles.root}>
            <TextInput
                label="Name"
                style={styles.inputStyle}
                theme={theme}
                value={name}
                mode="outlined"
                onChangeText={text => setName(text)}
            />

            <TextInput
                label="Email"
                style={styles.inputStyle}
                theme={theme}
                value={email}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                label="Phone"
                style={styles.inputStyle}
                theme={theme}
                keyboardType='number-pad'
                value={phone}
                mode="outlined"
                onChangeText={text => setPhone(text)}
            />

            <TextInput
                label="Salary"
                style={styles.inputStyle}
                theme={theme}
                value={salary}
                mode="outlined"
                onChangeText={text => setSalary(text)}
            />

            <Button icon="upload" mode="contained" onPress={() => setModal(true)} style={styles.inputStyle}>
                Upload Image
            </Button>

            <Button icon="content-save" mode="contained" onPress={() => setModal(true)} style={styles.inputStyle}>
                Save
            </Button>

            <Modal 
                animationType="slide"
                visible={modal}
                transparent={true}
                onRequestClose={()=> {
                    setModal(false)
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button icon="camera" mode="contained" onPress={() => setModal(false)}>
                            Camera
                        </Button>

                        <Button icon="image-area" mode="contained" onPress={() => setModal(false)}>
                            Gallery
                        </Button>                     
                    </View>

                    <Button icon="cancel" mode="text" onPress={() => setModal(false)}>
                        Cancel
                    </Button>                    
                </View>
            </Modal>
        </View>
    )
}

const theme = {
    colors: {
        primary: 'blue'
    }
}



const styles = StyleSheet.create({
    root: {
        flex: 1
    },

    inputStyle: {
        margin: 5
    },

    modalButtonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },

    modalView: {
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "white"
    }
})


export default createEmployee;