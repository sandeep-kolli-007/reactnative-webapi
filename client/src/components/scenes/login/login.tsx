import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import CommonLayout from '../../shared/commonlayout'
import CustomButton from '../../shared/custombutton'
import TextBox from '../../shared/input'

const Login = () => {
  const navigation:any = useNavigation();
    const [userDetails, setUserDetails] = useState({})
const baseurl="https://stage.optimiz.platform.dptsprotrans.com"
const user="Veeru"
const password ="874245ca727bbd54161fd425b0a76023"

    const loginHandler=()=>{
        
        if (!user && !password) {
            Alert.alert('Login credentials are required.', 'Warning');
        } else if (!user && password) {
            Alert.alert('Username is required.', 'Warning');
        } else if (user && !password) {
            Alert.alert('Password is required.', 'Warning');
        }
        else{
        fetch(`${baseurl}/Logon/Account/IsAuthorized?username=${user}&password=${password}`,
        {
            method: 'GET',
            mode:"same-origin",
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then((response:any)  =>response.text())
        .then(result => result.replace('(','').replace(')',''))
        .then(res =>JSON.parse(res))
        .then(data => {(data.isAuthorizedUser === "True")?navigation.navigate("Home"): Alert.alert("loggedin successfully")})
        .catch(e=>console.error("error"+e))
    }
}
    return (
        <CommonLayout>
           <View style={{justifyContent:"center",marginTop:100 }}>
            <View>
                <Image  style={{ width:350,height:100,resizeMode:"contain"}} source={{uri:"https://protrans.com/wp-content/uploads/2020/12/cropped-Protrans_Final_Logo.png"}}   />
               <TextBox label="Username" onChangeText={(text:any)=>{setUserDetails({...userDetails,userName:text})}}/>
               <TextBox label="Password" onChangeText={(text:any)=>{setUserDetails({...userDetails,password:text})}}/>
              <View style={{marginTop:16}}>
                <CustomButton text='Login'width={"100%"}   onPress={loginHandler}/>
              </View>
           </View>
          </View>
        </CommonLayout>
    )
}

export default Login
