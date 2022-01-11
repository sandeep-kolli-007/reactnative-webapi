import React from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import TextBox from '../shared/input';
import Tables from '../shared/table';
 
const SplitOrder = () => {
    const element =()=>(
    <View style={{alignItems:"center"}}>
        <CustomButton text='split'  width={60} small />
    </View>
)
  const tabledata = {
    tableHead: ['Shipment Id', 'Loaded', 'Total Qty',''],
    tableData: [['S31113355', '0', '27',  element()]],
    widthArr:[100, 80, 80, 80]
  }

  return (
    <CommonLayout>
      <View>
        <TextBox label="Trailer / Shipment / HU" />
        <View style={{alignItems: 'center', marginTop: 16}}>
          <CustomButton text="SEARCH" icon={'search'} />
        </View>
        <Tables tableHead={tabledata.tableHead} tableData={tabledata.tableData} widthArr={tabledata.widthArr}/>
      </View>
    </CommonLayout>
  );
};

export default SplitOrder;
