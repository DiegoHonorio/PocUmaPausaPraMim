import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, View, TextInput } from 'react-native';
import { Container, StyledInput, StyledButton, ButtonText, } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


const LoginScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <Container>
            <StatusBar style="auto" />

            <Image
                style={{ width: 250, height: 250, marginTop: 50 }}
                source={require('../../../assets/logo.png')}
            />


            <StyledInput
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <StyledInput

                    secureTextEntry={!showPassword}
                    placeholder="Senha"
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Icon
                        name={showPassword ? 'eye-slash' : 'eye'}
                        size={20}
                        color="white"
                        style={{ position: 'absolute', marginLeft: -30, bottom: 1 }}
                    />
                </TouchableOpacity>
            </View>

            <StyledButton
                onPress={() =>
                    navigation.navigate('HomeScreen')
                }>
                <ButtonText>Entrar</ButtonText>
            </StyledButton>

        </Container>
    )
}


export default LoginScreen