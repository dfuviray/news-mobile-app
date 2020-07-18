import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Message = styled.Text`
  color: ${colors['light-black']};
`;
