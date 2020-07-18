import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Container = styled.View``;
export const Title = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
`;
export const Body = styled.Text`
  color: ${colors['light-black']};
  font-size: 15px;
`;
