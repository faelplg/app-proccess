import React from 'react';
import {SafeAreaView, Text} from 'react-native';
// import { Container } from './styles';

interface props {
    name: String;
}

const homeScreen: React.FC = () => {
    return (
        <SafeAreaView>
            <Text>Ola tudo bem</Text>
        </SafeAreaView>
    );
};

export default homeScreen;
