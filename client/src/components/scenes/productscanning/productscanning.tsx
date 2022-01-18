import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../../shared/commonlayout';
import CustomButton from '../../shared/custombutton';
import TextBox from '../../shared/input';

interface productScanning {
  ProductNumber?: number;
  Vendor?: string;
  Master?: number;
  Quantity?: number;
}
const ProductScanning = () => {
  const [productdetails, setproductdetails] = useState<productScanning>();
  return (
    <CommonLayout   Rightbtn={<CustomButton text={'Process'} stack={"summary"}/>}
      >
      <View>
        <TextBox
          label="Product Number"
          value={productdetails?.ProductNumber}
          onChange={(event: any) => {
            const {eventCount, target, text} = event.nativeEvent;
            setproductdetails({...productdetails, ProductNumber: text});
          }}></TextBox>
        <TextBox
          label="Vendor"
          value={productdetails?.Vendor}
          onChange={(event: any) => {
            const {eventCount, target, text} = event.nativeEvent;
            setproductdetails({...productdetails, Vendor: text});
          }}></TextBox>
        <TextBox
          label="Master #"
          value={productdetails?.Master}
          onChange={(event: any) => {
            const {eventCount, target, text} = event.nativeEvent;
            setproductdetails({...productdetails, Master: text});
          }}></TextBox>
        <TextBox
          label="Quantity"
          value={productdetails?.Quantity}
          onChange={(event: any) => {
            const {eventCount, target, text} = event.nativeEvent;
            setproductdetails({...productdetails, Quantity: text});
          }}></TextBox>
        <View style={{alignItems: 'center', marginTop: 16}}>
          <CustomButton
            text="Next Product"
            width={200}></CustomButton>
        </View>
      </View>
    </CommonLayout>
  );
};

export default ProductScanning;
