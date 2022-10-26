import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_D};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  justifyContent: "center",
})``;

export const ContainerMessage = styled.View`
  background-color: ${({ theme }) => theme.colors.light_text_D};
  border-color: ${({ theme }) => theme.colors.background_W};
  border-style: solid;
  border-radius: 15px;
  border-width: 2px;
  width: 350px;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
`;

export const ContainerId = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.backgroundCard.eletric};
  justify-content: center;
  align-items: center;
  right: 160px;
  bottom: 10px;
`;

export const IdMessage = styled.Text`
  color: ${({ theme }) => theme.colors.background_D};
  font-size: 20px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.backgroundCard.eletric};
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;
