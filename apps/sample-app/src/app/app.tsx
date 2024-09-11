import styled from 'styled-components';

import NxWelcome from './nx-welcome';

import { SharedComponents } from '@nx-cloud-poc/shared-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="sample-app" />
      <SharedComponents />
    </StyledApp>
  );
}

export default App;
