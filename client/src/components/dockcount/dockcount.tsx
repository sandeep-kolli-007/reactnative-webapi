import React from 'react'
import { View, Text } from 'react-native'
import CommonLayout from '../shared/commonlayout'
import CustomButton from '../shared/custombutton'
import TextBox from '../shared/input'
import Tables from '../shared/table'

const DockCount = () => {
    const tabledata ={
        tableHead: ['Shipment Id', 'Loaded'],
        tableData: [['S31113355', '0']],
        widthArr:[100, 80 ]
      }
    return (
        <CommonLayout isButtons={<><CustomButton text='CLEAR'/><CustomButton text='SAVE' color='#80B0E6' textColor='white'/></>}>
            <View>
                <TextBox label="Directed"/>
                <TextBox label="Location"/>
                <TextBox label="Container Id"/>
                <TextBox label="Qty"/>
                <TextBox label="Ship From"/>
                <TextBox label="Destination"/>
                <TextBox label="Customer"/>
                <TextBox label="Lot ID"/>
                 <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center" ,marginBottom:16 }}>
                     <View>
                         <Text style={{color:"white"}}>Containers</Text>
                     </View>
                     <Tables tableHead={tabledata.tableHead} tableData={tabledata.tableData} widthArr={tabledata.widthArr}/>
                 </View>
            </View>
        </CommonLayout>
    )
}

export default DockCount
