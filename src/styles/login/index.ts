import styled from 'styled-components/native';
import {colors} from '../colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.backgroundColor};
    justify-content: center;
    padding: 6%;
`;

//
// ─── TEXT OF LOGIN IN SCREEN ────────────────────────────────────────────────────
//
export const ContainerTextLogin = styled.View`
    justify-content: center;
    align-items: flex-start;
`;

export const TextLogin = styled.Text`
    font-size: 40px;
    color: ${colors.textColor};
    font-weight: bold;
    font-family: Roboto-Light;
    padding-bottom: 50px;
`;

export const TextMessageError = styled.Text`
    color: red;
`;
