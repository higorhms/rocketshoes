import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
    background: ${colors.dark};
    margin-top: 50px;
`;

export const ProductItem = styled.View`
    background: #fff;
    padding: 10px;
    margin: 15px;
    border-radius: 4px;
    width: 220px;
`;

export const ProductImage = styled.Image`
    width: 200px;
    height: 200px;
`;

export const ProductTitle = styled.Text`
    font-size: 16px;
`;

export const ProductPrice = styled.Text`
    margin: 14px 0px;
    font-size: 20px;
    margin-bottom: 14px;
    font-weight: bold;
`;

export const Button = styled(RectButton)`
    background: ${colors.dark};
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    margin-top: auto;
`;

export const ButtonText = styled.Text`
    flex: 1;
    text-align: center;
    font-weight: bold;
    color: #fff;
`;

export const ProductAmount = styled.View`
    padding: 12px;
    background: ${darken(0.08, colors.dark)};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    flex-direction: row;
    align-items: center;
`;
