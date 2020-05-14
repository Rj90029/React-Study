import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyle.css'
import style from './appStyle.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'

function App() {

    
  return (
    <div className="App">
      <LifecycleA/>
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={style.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/*<UserGreeting/>
      <ParentComponent/>
      <EventBind/>
      <ClassClick/>
      <FunctionClick/>
       <Counter/>
      <Message/> 
       <Greet name = "Bruce" heroname="Batman">
        <p>Batman is tough</p>
      </Greet>
      <Welcome name = "Bruce" heroname="Batman">
        <p>Batman is tough</p>
      </Welcome> 
      <Greet name = "John" heroname="Superman"/>
      <Greet name = "Diana" heroname="Wonder Woman"/>
      
      <Welcome name = "John" heroname="Superman"/>
      <Welcome name = "Diana" heroname="Wonder Woman"/> */}
    </div>
  );
}

export default App;
