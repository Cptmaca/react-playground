// this is example react code for useState. I wrote examples for
// numerical, string, object and array

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <p>These are examples for useState: numerical, string, object and array</p>
        <Counter />
        <Name />
        <MyObject />
        <Array />
        <LikeButton />
      </header>
    </div>
  );
}

function Greeting() {
  return <h1>Hello, World!</h1>
}

function LikeButton() {
  const [counter, setCounter] = useState(0)

  return (

    <div>
      <button onClick={() => setCounter(counter + 1)}>Like</button>{counter}
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>click me!</button>
    </div>
  )
}

// writing a component that receives the user name and displays it
function Name() {
  const [name, setName] = useState('Zé')

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <p>My name is {name}</p>
    </div>
  )
}

function Array() {
  const [array, setArray] = useState([])

  return (
    <div>
      <button onClick={() => setArray([...array, array.length])}>add item</button>
      <button onClick={() => setArray(array.slice(0, array.length - 1))}>remove item</button>
      <ul>
        {array.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

// also make a function the sets an object in the state
function MyObject() {
  const [myObject, setMyObject] = useState({ name: 'João', age: 30 })
  console.log(myObject)
  // now display this object in the screen
  return (
    <div>
      <p>My name is {myObject.name} and I am {myObject.age} years old</p>
      <button onClick={() => setMyObject({ ...myObject, age: myObject.age - 1 })}>decrease age</button>
      <button onClick={() => setMyObject({ ...myObject, age: myObject.age + 1 })}>increase age</button>
      <input type='text' value={myObject.name} onChange={e => setMyObject({ ...myObject, name: e.target.value })} />
    </div>
  )


}



export default App;
