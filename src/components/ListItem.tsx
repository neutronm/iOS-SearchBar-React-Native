import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const {width} = Dimensions.get('screen');
import { Fontisto } from '@expo/vector-icons';
export const ListItem = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="applemusic" size={24} color="red" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        width: 0.9 * width,
        backgroundColor:'#222223',
        marginVertical: 5,
        borderRadius: 10,
        justifyContent:'center',
        paddingHorizontal: 10,
    }
})