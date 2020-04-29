import React from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.btn} activeOpacity={.8} onPress={() => navigation.navigate('tab')}>
                <Text style={styles.btnText}>启动</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        width: 250,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#F83843',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 18,
        color: '#FFF',
    }
})