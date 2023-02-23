import styles from './example-scaffolded-component.module.scss';

/* eslint-disable-next-line */
export interface ExampleScaffoldedComponentProps {}

export function ExampleScaffoldedComponent(
  props: ExampleScaffoldedComponentProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ExampleScaffoldedComponent!</h1>
    </div>
  );
}

export default ExampleScaffoldedComponent;
