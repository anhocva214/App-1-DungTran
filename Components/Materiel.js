import React from 'react'
import { View, Text, Button, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import { useState, useRef } from 'react'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const Materiel = ({ navigation }) => {

    const useComponentWillMount = func => { const willMount = useRef(true); if (willMount.current) { func(); } willMount.current = false; };

    const [_diplayTable, set_diplayTable] = useState(false);
    const [_activeArr, set_activeArr] = useState([]);
    const [_dataTable, set_dataTable] = useState({
        tableHead: ['N" RFID', 'N" Produit', 'Désignation', 'Année Fabrication', 'Niveau Batterire (mois)', 'Dernier'],
        tableData: [
            ['132051D10', 'PX A.INT140', '2001', '36', 'Stateco'],
            ['132051D10' ,'PX A.INT140', '2001', '69', 'Stateco'],
            ['132051D10' , 'PX A.INT140', '2002', '40', 'Stateco'],
            ['132051D10' , 'PX A.INT140', '2001', '12', 'Stateco'],
            ['132051D10' , 'PX A.INT140', '2002', '3', 'Stateco'],
        ],
        tableTitle: [
            ['3031303035'],
            ['3031303135'],
            ['3031303136'],
            ['3031303036'],
            ['3031303034'],
            [''],
            [''],
            [''],
            [''],
            ['']
        ]
    });

    useComponentWillMount(() => {
        var temp = _dataTable.tableData;
        var tempActive = [];
        for (var i = 0; i <= temp.length; i++) {
            if (i == temp.length) {
                set_activeArr(tempActive)
            }
            else {
                if (parseInt(temp[i][3]) < 6) tempActive.push(i)
            }
        }
    })

    const displayTable = () => {


        return (
            <View style={{ flex: 3, marginTop: 20 }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#fff' }}>
                            <Row data={_dataTable.tableHead} flexArr={[1, 1, 1, 1, 1, 1]} style={styles.head} textStyle={{ color: "#fff", textAlign: 'center' }} />
                            <Table style={{flexDirection: 'row', flex: 1}} borderStyle={{ borderWidth: 1, borderColor: '#fff' }} >
                                <TableWrapper style={{flex: 1}}  >
                                {
                                        _dataTable.tableTitle.map((value, index) => {
                                            var result = _activeArr.filter(item => item == index);
                                            if (result.length > 0){
                                                return(
                                                    <Col key={index} data={value}  heightArr={[28,28]} style={{...styles.title, backgroundColor: "#e10f21"}} textStyle={{ color: "#fff", textAlign: 'center' }} />
                                                )
                                            }
                                            return (
                                                <Col key={index} data={value}  heightArr={[28,28]} style={styles.title} textStyle={{ color: "#fff", textAlign: 'center' }} />
                                            )
                                        })
                                    }
                                </TableWrapper>
                                <TableWrapper style={{flex: 5}}>
                                    {
                                        _dataTable.tableData.map((value, index) => {
                                            var result = _activeArr.filter(item => item == index);
                                            if (result.length > 0) {
                                                return (
                                                    <Row key={index} data={value} flexArr={[1, 1, 1, 1, 1, 1]} style={{ ...styles.rowTitle, backgroundColor: "#e10f21" }} textStyle={{ color: "#fff", textAlign: 'center' }} />
                                                )
                                            }
                                            return (
                                                <Row key={index} data={value} flexArr={[1, 1, 1, 1, 1, 1]} style={[styles.row, index % 2 && { backgroundColor: '#fff' }]} textStyle={{ color: "#111", textAlign: 'center' }} />
                                            )
                                        })
                                    }
                                </TableWrapper>
                                
                            </Table>

                            {/* <TableWrapper style={styles.wrapper}>
                                <TableWrapper >
                                    {
                                        _dataTable.tableTitle.map((value, index) => {
                                            var result = _activeArr.filter(item => item == index);
                                            if (result.length>0){
                                                return (
                                                    <Row key={index} data={value} widthArr={[131]} style={{...styles.rowTitle, backgroundColor: "#e10f21"}} textStyle={{color: "#fff", textAlign: 'center' }} />
                                                ) 
                                            }
                                            return (
                                                <Row key={index} data={value} widthArr={[131]}  style={styles.rowTitle} textStyle={{color: "#fff", textAlign: 'center' }} />
                                            ) 
                                        })
                                    }
                                </TableWrapper>
                                <TableWrapper >
                                    {
                                        _dataTable.tableData.map((value, index) => {
                                            var result = _activeArr.filter(item => item == index);
                                            if (result.length > 0) {
                                                return (
                                                    <Row key={index} data={value} widthArr={[131,131,131,131,131]} style={{ ...styles.rowTitle, backgroundColor: "#e10f21" }} textStyle={{ color: "#fff", textAlign: 'center' }} />
                                                )
                                            }
                                            return (
                                                <Row key={index} data={value} widthArr={[131,131,131,131,131]} style={[styles.row, index % 2 && { backgroundColor: '#fff' }]} textStyle={styles.text} />
                                            )
                                        })
                                    }
                                </TableWrapper>
                            </TableWrapper> */}
                        </Table>
                    </View>
                </ScrollView>
            </View>
        )
    }

    const ShowSection = () => {
        if (_diplayTable == true) return displayTable()
        return (
            <View style={{ flex: 3, marginTop: 10 }}>
                <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ marginTop: 20, width: 150, marginLeft: 20 }}>
                        <Button title="Scan" color="#e10f21" onPress={() => set_diplayTable(true)} />
                    </View>
                    <Image style={{ width: 70, height: 70, marginTop: 30 }} source={require('../public/img/img-6.png')} />
                    <Text style={{ fontSize: 20, marginTop: 10 }}>Le programe recherche les informations de lelement</Text>
                </View>

            </View>
        )
    }

    return (
        <>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: "#e10f21" }}>
                    <Image style={{ width: 50, height: 50, margin: 10 }} source={require("../public/img/img-7.png")}></Image>
                    <Text style={{ fontSize: 20 }}>MATÉRIEL</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('MenuPage')}>
                    <Image  style={{ width: 50, height: 50, margin: 10 }} source={require("../public/img/img-2.png")}></Image>
                    </TouchableOpacity>
                </View>
                {ShowSection()}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    head: { height: 40, backgroundColor: '#475258' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#475258' },
    row: { height: 28, backgroundColor: "#b8d3e2"},
    rowTitle: { height: 28, backgroundColor: "#475258" },
    text: { textAlign: 'center' }
});


export default Materiel;