import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Fontisto , FontAwesome } from '@expo/vector-icons';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
        <Fontisto name="search" size={15} color="#97979d" />
      <Text style={styles.searchTitle}>Search</Text>
      <FontAwesome name="microphone" size={15} color="#97979d" />
    </View>
  )
}
//#97979d
const styles =  StyleSheet.create({
    container:{
        backgroundColor:'#222223',
        height: 30,
        width: '100%',
        marginTop: 0,
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    searchTitle:{
        color: '#97979d',
        fontWeight:'500',
        flex: 1,
        marginLeft: 10,
    }
})
