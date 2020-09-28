import React from 'react'
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const MenuPage= ({ navigation }) => {

    return (
        <>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <Image style={{ width: 50, height: 50, margin: 10 }} source={require("../public/img/img-7.png")}></Image>
                    {/* <Text>MATÉRIEL</Text>
                    <Image style={{ width: 50, height: 50, margin: 10 }} source={require("../public/img/img-2.png")}></Image> */}
                </View>
                <View style={{ flex: 2, marginTop: 20 }}>
                    <Text style={{textAlign: 'center', flexDirection: 'row', fontSize: 20}} >Que souhaitex-vous declarer?</Text>
                    <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                        <View style={{marginTop: 20, width: 150, marginRight: 20}}>
                            <Button title="Depart" color='#475258' onPress={() => handleLogin()} />
                        </View>
                        <View style={{marginTop: 20, width: 150, marginLeft: 20}}>
                            <Button title="Retour" color='#475258' onPress={() => handleLogin()} />
                        </View>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                        <View style={{marginTop: 20, width: 150, marginRight: 20}}>
                            <Button title="Transferer" color='#475258' onPress={() => handleLogin()} />
                        </View>
                        <View style={{marginTop: 20, width: 150, marginLeft: 20}}>
                            <Button title="MATÉRIEL" color='#475258' onPress={() => navigation.navigate('Matériel')} />
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default MenuPage