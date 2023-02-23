// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import ExampleScaffoldedComponent from './example-scaffolded-component/example-scaffolded-component';

export function App() {
  return (
    <>
      <NxWelcome title="test-nx-app" />

      <ExampleScaffoldedComponent />
      <div />
    </>
  );
}

export default App;
