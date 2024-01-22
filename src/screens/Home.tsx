import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ListItem } from "../components/ListItem";
import { SearchBar } from "../components/SearchBar";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  return (
    <SafeAreaView edges={['top','right','left']}>
      <ScrollView style={{}} contentContainerStyle={{}}>
        <Text style={styles.title}>Settings</Text>
        <SearchBar />
        {new Array(20).fill(0).map((_, index) => (
          <ListItem key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 33,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#fff",
  },
});
