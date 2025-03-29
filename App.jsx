import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro rerum iste nesciunt illo vero, tempore amet autem rem optio obcaecati incidunt molestiae facere dolor est mollitia temporibus omnis. Incidunt, architecto?</p>
      <form>
        <input type='text'/><br /><br />
        <button type='submit' class="btn1">Submit</button><br /><br />
        <button class="btn2">add</button>
        <button class="btn3">delete</button>
      </form><br /><br />
      <button class="btn">Click me</button>
    </>
  )
}

export default App
