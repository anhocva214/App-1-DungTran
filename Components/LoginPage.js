import React from 'react'
import { View, Text, Button, Image, TextInput } from 'react-native'
import { useState } from 'react'


const LoginPage = ({ navigation }) => {

    const [_statusPage, set_statusPage] = useState(0);
    const [_text, set_text] = useState("");

    const SuccessPage = () => {
        return (
            <View style={{ display: 'flex', justifyContent: 'center', marginTop: 50, flexDirection: 'row', flex: 9 }} >
                <View >
                    <Text style={{ marginBottom: 40, fontSize: 30, textAlign: 'center', color: '#2ac644' }}>N" de matricule correct <Image style={{ width: 30, height: 30 }} source={require('../public/img/img-1.png')} /> </Text>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Benvenue dans i'application</Text>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}> " Management " </Text>

                </View>
            </View>
        )
    }

    const ErrorPage = () => {
        return (
            <View style={{ display: 'flex', justifyContent: 'center', marginTop: 50, flexDirection: 'row', flex: 9 }} >
                <View >
                    <Text style={{ marginBottom: 40, fontSize: 30, textAlign: 'center', color: "#e10f21" }}>N" de matricule incorrect <Image style={{ width: 30, height: 30 }} source={require('../public/img/img-5.png')} /> </Text>
                    <Text style={{ marginBottom: 40, fontSize: 20, textAlign: 'center' }}>Merci de bien vouloir ressaisir votre numero de matricute</Text>
                </View>
            </View>
        )
    }

    const handleLogin = () => {
        if (_text.trim() == "1") {
            set_statusPage(1);
            setTimeout(() => {
                navigation.navigate('MenuPage');
                set_statusPage(0);
            }, 1000);
        }
        else {
            set_statusPage(2);
            setTimeout(() => {
                set_statusPage(0);
            }, 1000);
        }
    }


    const NoACtionPage = () => {
        return (
            <View style={{ display: 'flex', justifyContent: 'center', marginTop: 50, flexDirection: 'row', flex: 9 }} >
                <View >
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Vewillez indiquer</Text>
                    <Text style={{ marginBottom: 40, fontSize: 20, textAlign: 'center' }}>votre n" de matricule</Text>

                    <TextInput onChangeText={(text) => { (text)=>set_text(text); }} value={_text} style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} />

                    <View style={{ paddingLeft: 50, paddingRight: 50, marginTop: 20 }}>
                        <Button title="Enter" color="#e10f21" onPress={() => handleLogin()} />
                    </View>
                </View>

            </View>
        )
    }

    const ShowSection = () => {
        if (_statusPage == 2) {
            return <ErrorPage />
        }
        else if (_statusPage == 1) {
            return <SuccessPage />
        }
        return <NoACtionPage />
    }

    return (
        <>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Image style={{ width: 50, height: 50, margin: 10 }} source={require("../public/img/img-7.png")}></Image>
                </View>
                {ShowSection()}
            </View>
        </>
    )
}

export default LoginPage;