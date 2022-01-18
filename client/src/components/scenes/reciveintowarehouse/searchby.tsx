import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../../shared/commonlayout';
import CustomButton from '../../shared/custombutton';
import TextBox from '../../shared/input';

const SearchBy = () => {
  //   const Navigation: any = useNavigation();
  const route: any = useRoute();
  const name = route.params.searchby;

  const values = ['Pro Number', 'Packing Slip', 'Handling Unit'];
  const twocontrolvalues = ['Origin & Destination', 'PUL & Trip'];
  return (
    <CommonLayout hidefooter>
      {/* <Text>{route.params.searchby}</Text> */}
      <View>
        {values.includes(name) ? (
          <TextBox label={name} inputgroup />
        ) : (
          <>
            <TextBox label={name[0]} inputgroup={name[0] !== 'Origin'} />
            <TextBox label={name[1]} inputgroup={name[0] !== 'Origin'} />
            {name[0] == 'Origin' && (
              <View style={{alignItems:"center",marginTop:16}}>
                <CustomButton text="SEARCH" icon={'search'} />
              </View>
            )}
          </>
        )}
      </View>
    </CommonLayout>
  );
};

export default SearchBy;
