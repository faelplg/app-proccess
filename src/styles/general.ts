import styled from 'styled-components/native';
import {colors} from '../styles/colors';
import {Props} from '../components/inputComponent';
import {Props as PropItemListText} from '../components/itemsListComponent';
import {Props as PropButton} from '../components/buttonComponent';

export const InputText = styled.TextInput<Props>`
    height: 60px;
    width: ${(props) => props.width};
    border-width: 2px;
    border-radius: 10px;
    border-color: ${colors.inputBorder};
    padding: 15px;
    font-size: 20px;
    background-color: ${(props) => props.bgColor};
`;

export const Button = styled.TouchableOpacity<PropButton>`
    background-color: ${colors.primaryColor};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.width}
    height: ${(props) => props.height}
`;

export const ButtonText = styled.Text<PropButton>`
    color: white;
    font-weight: bold;
    font-size: ${(props) => props.fontsize}px;
    padding: ${(props) => props.paddingArea};
`;

//
// ─── ITEMS COMPONENT LIST PROCCESS FIRST PAGE TAB ───────────────────────────────
//
export const ItemList = styled.TouchableOpacity`
    background-color: white;
`;
export const ItemListTextTitle = styled.Text<PropItemListText>`
    font-size: ${(props) => props?.fontSizeText}px;
    font-family: Roboto-Light;
    color: ${(props) => props?.color};
    font-weight: ${(props) => props?.fontWeight};
    letter-spacing: ${(props) => props?.letterSpacing}px;
`;

//
// ─── PADDIN BOTTOM AREA SCREEN ────────────────────────────────────────────
//
interface propPaddingBottomArea {
    padding: number;
}

export const PaddingBottomArea = styled.View<propPaddingBottomArea>`
    padding-bottom: ${(props) => props.padding}px;
`;

export const StyleSheetView = styled.View`
    border-radius: 100px;
    padding-top: 40px;
    padding-left: 40px;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const StyleSheetViewItems = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const StyleSheetTextItems = styled.Text`
    font-size: 17px;
    padding-left: 20px;
    font-weight: 500;
`;
