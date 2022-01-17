import React from 'react'
import { View, Text } from 'react-native'
import CommonLayout from '../shared/commonlayout'
import CustomButton from '../shared/custombutton'
import TextBox from '../shared/input'

const ShipmentInformation = () => {
    return (
        <CommonLayout isButtons={<><View></View><CustomButton text="Save" stack={"summary"}/></>}>
            <View>
                <TextBox label="Trailer Number"/>
                <TextBox label="Delivery Note"/>
                <TextBox label="Confirm Piece Amount"/>
            </View>
        </CommonLayout>
    )
}

export default ShipmentInformation
