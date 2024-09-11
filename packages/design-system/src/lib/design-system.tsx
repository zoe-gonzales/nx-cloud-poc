import styled from 'styled-components';

const StyledDesignSystem = styled.div`
  color: pink;
`;

interface Props {
  theme: string;
}

export function DesignSystem(props: Props) {
  return (
    <StyledDesignSystem>
      <h1>Welcome to DesignSystem!</h1>
      <h2>Your theme is: {props.theme}</h2>
    </StyledDesignSystem>
  );
}

export default DesignSystem;
