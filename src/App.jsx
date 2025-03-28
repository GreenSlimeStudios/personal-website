import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>wimp womp</h1>
      <div className=''>
        <h1 className='text-center font-extrabold text-4xl'>Max Berliński</h1>
        <Card title={"womp womp"} />
      </div>
    </>
  )
}

export default App


const Card = ({ title }) => {
  return (
  <div className='bg-cyan-700 p-5 m-5'>
    <h1 className='text-red-500'>{title}</h1>
    <h1>{title}</h1>
  </div>)
}
