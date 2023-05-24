import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import FetchData from "./FetchData";
import { DataTable } from "react-native-paper";
import PieChart from 'react-native-pie-chart'

export default function Data() {
  const [value, setValue] = useState();
  const widthAndHeight = 250

  useEffect(() => {
    let data = async () => {
      setValue(await FetchData());
    };
    data();
  }, []);
  if (!value) {
    return (
      <ActivityIndicator
        size="large"
        animating={true}
        color="rgba(137,232,207,100)"
      />
    );
  }
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  return (
    <ScrollView>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Age</DataTable.Title>
        </DataTable.Header>
        {value.map((item) => (
          <DataTable.Row>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.age}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
      <PieChart
            widthAndHeight={widthAndHeight}
            series={value.age}
            sliceColor={generateColor()}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 25,
    margin: 20,
    borderWidth: 4,
    borderRadius: 20,
    backgroundColor: "rgba(137,232,207,100)",
    borderColor: "rgba(137,232,207,100)",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",

  },
});
