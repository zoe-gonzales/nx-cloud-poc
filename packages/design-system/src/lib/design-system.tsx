import styled from 'styled-components';
import { add } from '@nx-cloud-poc/utils';

const StyledDesignSystem = styled.div`
  color: pink;
`;

interface Props {
  theme: string;
}

export function DesignSystem(props: Props) {
  add('4', 2);
  return (
    <StyledDesignSystem>
      <h1>Welcome to DesignSystem!</h1>
      <h2>Your theme is: {props.theme}</h2>
    </StyledDesignSystem>
  );
}

export default DesignSystem;
