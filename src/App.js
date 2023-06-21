import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import styles from "./App.module.css";
import EventTest from './component/EventTest';
import StateTest from './component/StateTest';
import UseEffectTest from './component/UseEffect';
import Counter from './component/Counter';
import Props1 from './component/Props1';
import PropsParent from './component/PropsParent';
import LoginRendering from './component/LoginRendering';
import ListExample from './component/ListExample';
import FormExample from './component/FormExample';
import FormExample2 from './component/FormExample2';
import UserForm from './component/UserForm';

export default function App() {
  // 프롭, 조건부렌더링, 리스트 작성
  return (
    <div className={styles.box}>
      <h1>App</h1>
      <Hello />

      <br/><br/>
      <EventTest />

      <br/><br/>
      <StateTest />

      <br/><br/>
      <Counter />

      <br/><br/>
      <Props1 subject="자바" />

      <br/><br/>
      <PropsParent />

      <br/><br/>
      <LoginRendering />

      <br/><br/>
      <ListExample />

      <br/><br/>
      <FormExample />

      <br/><br/>
      <FormExample2 />

      <br/><br/>
      <UserForm />

    </div>
  );
}

