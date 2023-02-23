import { render } from '@testing-library/react';

import ExampleScaffoldedComponent from './example-scaffolded-component';

describe('ExampleScaffoldedComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExampleScaffoldedComponent />);
    expect(baseElement).toBeTruthy();
  });
});
