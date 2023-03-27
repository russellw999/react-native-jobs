import { useState } from 'react';
import { View, ScrollView, SafeView , Text } from 'react-native';
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES} from '../constants'
import {
      Nearbyjobs, Popularjobs, ScreeHeaderBtn, Welcome 
    } from '../components'



const Home = () => {
    return (
        <View>
            <Text>Home</Text> 
        </View>
    )
}

export default Home