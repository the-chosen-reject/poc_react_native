import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const details = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Id : {id}</Text>
    </View>
  )
}

export default details

const styles = StyleSheet.create({})