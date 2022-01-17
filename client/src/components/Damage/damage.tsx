import {NavigationRouteContext, useRoute} from '@react-navigation/core';
import React from 'react';
import {View, Text} from 'react-native';
import {useTreble} from 'treble-gsm';
import {Services} from '../../services/services';
import Addphoto from '../shared/camera/addphoto';
import CommonLayout from '../shared/commonlayout';
import Dropdown from '../shared/dropdown';
import {useNavigation} from '@react-navigation/core';
import TextBox from '../shared/input';
import CustomButton from '../shared/custombutton';

const Damage = () => {
  const route:any = useRoute();
  const navigation :any= useNavigation();
  const {updatedamagedpieces} = Services();
  const [{loadid}, Store] = useTreble();
  const update = () => {
    debugger;
    updatedamagedpieces(loadid, route?.params?.damagephoto, 'Level-2', 'Creased/Crushed', 'notes ')
    navigation.navigate('summary');
  };
  return (
    <CommonLayout Rightbtn={<CustomButton text={'Confirm'} onPress={update}/>}>
      <View >
        <View style={{alignItems: 'center'}}>
          <Addphoto
            text="Add Damage Photo"
            image={route?.params?.damagephoto}
            stack="damage"
            imagename="damagephoto"
          />
        </View>
        <Dropdown
          data={['pallet-1', 'pallet-2']}
          label="Damage Level"></Dropdown>
        <Dropdown data={['1', '2']} label="Damage Type"></Dropdown>
        <TextBox label="Notes" height={100} />
      </View>
    </CommonLayout>
  );
};

export default Damage;
