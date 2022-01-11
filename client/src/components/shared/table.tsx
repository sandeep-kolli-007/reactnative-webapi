import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Table, TableWrapper, Row, Cell, Col, Rows} from 'react-native-table-component';
const Tables = (props: any) => {
  return (
    <View>
      <ScrollView horizontal style={{marginTop: 16}}>
        <Table borderStyle={{borderWidth: 1, borderColor: 'grey'}}>
          <Row data={props.tableHead} widthArr={props.widthArr} style={{height: 50, backgroundColor: '#363940'}} textStyle={{padding: 8, color: 'white'}} />
          <Rows
            data={props.tableData}
            widthArr={props.widthArr}
            style={{height: 48, backgroundColor: '#fff', justifyContent: 'center'}}
            textStyle={{padding: 4, color: '#363940', textAlign: 'center'}}
          />
        </Table>
      </ScrollView>
    </View>
  );
};

export default Tables;
