import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_D};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light_text_W};
  font-size: 24px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.boxType.eletric};
  font-size: 18px;
  font-weight: bold;
`;
