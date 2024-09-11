import { render } from '@testing-library/react';

import DesignSystem from './design-system';

describe('DesignSystem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesignSystem theme="myTheme" />);
    expect(baseElement).toBeTruthy();
  });
});
