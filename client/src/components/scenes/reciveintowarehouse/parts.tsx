import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../../shared/commonlayout';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
const Parts = () => {
  const [selectedvalue, setselectedvalue] = useState(0);
  return (
    <CommonLayout>
      <View>
        <Text style={{textAlign: 'center', color: 'white', marginVertical: 8, fontSize: 18, fontWeight: '700'}}>Pallet Summary</Text>
        <Text style={{textAlign: 'center', color: 'white', marginVertical: 8}}>Handling Unit</Text>
        <SegmentedControl values={['All', 'Incomplete']} selectedIndex={selectedvalue} onChange={(event: any) => setselectedvalue(event.nativeEvent.selectedSegmentIndex)} />
        <View style={{borderWidth: 1, marginTop: 16, backgroundColor: 'white', height: 200, borderRadius: 8}}>
          <Text style={{textAlign: 'center', marginTop: 24}}>{selectedvalue ? 'Incomplete Handling Units' : 'All Handling Units'}</Text>
        </View>
      </View>
    </CommonLayout>
  );
};

export default Parts;
