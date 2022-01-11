import React from 'react'
import { View, Text } from 'react-native'
import CommonLayout from '../shared/commonlayout'
import CustomButton from '../shared/custombutton'
import TextBox from '../shared/input'

const ExceptionTab = () => {
    return (
        <CommonLayout hidefooter>
            <View>
                <TextBox label="Trailer Barcode"/>
                <View style={{alignItems:"center"}}>
                    <CustomButton text='SEARCH' icon={"search"} style={{marginTop:16}}/>
                    <Text style={{marginVertical:24,color:"white"}}>L9256119 - Loading</Text>
                    <Text style={{marginVertical:24,color:"green",elevation:5}}> No Exceptions Found</Text>
                    <CustomButton text='Complete' icon={"check"} color="#80B0E6" textColor='white'  />
                </View>
            </View>
        </CommonLayout>
    )
}

export default ExceptionTab
