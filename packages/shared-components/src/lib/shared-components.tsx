import styled from 'styled-components';
import {DesignSystem} from "@nx-cloud-poc/design-system"

const StyledSharedComponents = styled.div`
  color: pink;
`;

export function SharedComponents() {
  return (
    <>
    <StyledSharedComponents>
      <h1>Welcome to SharedComponents!</h1>
    </StyledSharedComponents>
    <DesignSystem theme="my custom theme"/>
    </>
  );
}

export default SharedComponents;
