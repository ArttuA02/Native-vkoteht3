import React, { useEffect } from "react";
import { StyleSheet, View, Text, BackHandler } from "react-native";

export default function SecondScreen({route, navigation}) {
    return (
        <View style={styles.container}>
            <Text>Second Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignContent: 'center',
    }
})