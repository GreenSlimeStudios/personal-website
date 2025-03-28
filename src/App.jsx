import { useState } from 'react'
import './App.css'
import MainContent from './components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mt-10'>
        <h1 className='text-center font-bold text-5xl'>Max Berliński</h1>
        {/* <Card title={"womp womp"} /> */}
      </div>
      <MainContent/>

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
