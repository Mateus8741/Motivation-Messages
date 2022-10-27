import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background_W};
  border-color: ${({ theme }) => theme.colors.background_W};
  border-width: 2px;
  border-radius: 5px;
  margin-top: 20px;

  padding: 0 16px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background_D};
  font-size: 24px;
  font-weight: bold;
`;
