import styled, { css } from 'styled-components'


const Container = styled.SafeAreaView`
flex:1;
background-color: #5e659c;
align-items: center;
`
const StyledInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px;
  border-color: white;
  color: #ffff;
  padding: 10px;
  margin-bottom: 20px
`;

const StyledButton = styled.TouchableOpacity`
width: 200px;
border: 1px;
border-color: white;
  padding: 15px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  text-align: center;
`;


export { Container, StyledInput, StyledButton, ButtonText }