import React from 'react'
import { View, Text } from 'react-native'
import  Icon from 'react-native-vector-icons/FontAwesome5'
import CommonLayout from '../../shared/commonlayout'
import CustomButton from '../../shared/custombutton'
import TextBox from '../../shared/input'

const Photo = () => {
    return (
        <CommonLayout>
            <View>
                <TextBox label="Trailer Bar Code" inputgroup/>
                <View style={{alignItems:"center",marginTop:16}}>
                    <CustomButton text='ADD PHOTO' icon={"camera"} width={140}/>
                </View>

                <View style={{padding:16,backgroundColor:"white",borderRadius:8,marginTop:16,flexDirection:"row",alignItems:"center"}}>
                    <View>
                        <Icon name='image' color={"#0F1924"} size={56}/>
                    </View>
                    <View style={{marginLeft:16}}>
                        <Text style={{fontWeight:"700"}}>L9261576-HOZN53221-1</Text>
                        <Text style={{fontWeight:"700"}}>ProTrans Indianapolis</Text>
                        <Text style={{fontWeight:"700"}}>11/16/2021 01:51 PM EST</Text>
                        <Text style={{fontWeight:"700"}}>hoodro</Text>
                    </View>
                </View>
            </View>
        </CommonLayout>
    )
}

export default Photo
