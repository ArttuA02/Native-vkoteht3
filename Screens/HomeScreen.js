import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignContent: 'center',
    }
})