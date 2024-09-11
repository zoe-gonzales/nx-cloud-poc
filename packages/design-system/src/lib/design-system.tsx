import styled from 'styled-components';
import { add, subtract } from '@nx-cloud-poc/utils';

const StyledDesignSystem = styled.div`
  color: pink;
`;

interface Props {
  theme: string;
}

export function DesignSystem(props: Props) {
  const added = add(4, 2);
  const subtracted = subtract(12, 6)
  return (
    <StyledDesignSystem>
      <h1>Welcome to DesignSystem!</h1>
      <h2>Your theme is: {props.theme}</h2>
      <div>Added: {added}</div>
      <div>Subtracted: {subtracted}</div>
    </StyledDesignSystem>
  );
}

export default DesignSystem;
