import React from 'react';
import { SafeAreaView, Image } from 'react-native'

export default function() {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Image
                style={{ width: '100%', height: '100%' }}
                resizeMode={'cover'}
                source={require('../../assets/pic_sentence.png')}
            />
        </SafeAreaView>
    )
}