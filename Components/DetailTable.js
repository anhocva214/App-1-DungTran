import React from 'react'
import { View, Text, Button, Image, TouchableOpacity } from 'react-native'

const DetailTable = ({navigation}) => {


    return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: "#e10f21" }}>
                <Image style={{ width: 50, height: 50, margin: 10 }} source={require("../public/img/img-7.png")}></Image>
                <Text style={{ fontSize: 20 }}>MATÉRIEL</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
                    <Image style={{ width: 50, height: 50, margin: 10 }} source={require("../public/img/img-2.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 3, marginTop: 10, alignItems: 'center', flexDirection: 'column' }}>

                <View style={{ backgroundColor: "#f4f6f7", borderBottomColor: '#e5e6e7', borderBottomWidth: 2, padding: 15, flex: 1 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }} >Designation: PX.A.INT1140</Text>
                    <Text style={{ fontSize: 20, textAlign: 'center' }} >GT2800/5/INOX PL/TR CBOX</Text>
                    <Text style={{ fontSize: 20, textAlign: 'center' }} >N" produi: 32051D10</Text>
                    <Text style={{ fontSize: 20, textAlign: 'center' }} >N" RFID: 3031303035</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
                        <TouchableOpacity style={{backgroundColor: '#e5e6e7', backgroundColor: '#d3eced', borderRadius: 5, marginLeft: 50, padding:5, height: 30, paddingRight: 40, paddingLeft: 40}} >
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Historique</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: '#e5e6e7', backgroundColor: '#d3eced', borderRadius: 5, marginLeft: 50, padding:5, height: 30, paddingRight: 40, paddingLeft: 40}} >
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Batterie</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: '#e5e6e7', backgroundColor: '#d3eced', borderRadius: 5, marginLeft: 50, padding:5, height: 30, paddingRight: 40, paddingLeft: 40}} >
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Anomalie</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity style={{backgroundColor: '#e5e6e7', backgroundColor: '#d3eced', borderRadius: 5, marginLeft: 50, padding:5, height: 30, paddingRight: 40, paddingLeft: 40}} >
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Historique</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: '#e5e6e7', backgroundColor: '#d3eced', borderRadius: 5, marginLeft: 50, padding:5, height: 30, paddingRight: 40, paddingLeft: 40}} >
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Batterie</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default DetailTable;