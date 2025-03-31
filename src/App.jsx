import { useState } from 'react'
import './App.css'
import MainContent from './components/MainContent'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Karpportal from './components/Karpportal'
import NotFoundPage from './components/NotFound'



// function App() {
//   const [count, setCount] = useState(0);
//   // const location = useLocation;

//   return (
//     <>
//       <div className='titlebox p-20 sm:p-40 lg:p-60 2xl:p-100 shadow-2xl shadow-black'>
//         {/* <img src='cat1.jpg' /> */}
//         <div className='flex-row items-start'>
//           <h1 className='font-bold text-5xl lg:text-6xl 2xl:text-7xl drop-shadow-lg'>Max Berliński</h1>
//           <p className='text-lg drop-shadow-lg'>Passion is what matters</p>
//         </div>
//       </div>
//       <div className='mt-10'>
//         <div className='grid grid-cols-2'>
//           {/* <Card title={"Karpportal"} />
//           <Card title={"Encrypter Deluxe"} /> */}
//         </div>
//       </div>
//       <div className='mb-50' />
//       <MainContent />
//     </>
//   )
// }

// export default App

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      
      <Routes location={location} key={location.pathname}>
        <Route path="/personal-website/" element={<MainContent />} />
        <Route path="/personal-website/karpportal" element={<Karpportal />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};


export default App;
// const Card = ({ title, description }) => {
//   return (
//     <div className='bg-cyan-700 p-5 m-5 rounded-2xl'>
//       <h1 className='text-2xl font-bold'>{title}</h1>
//     </div>)
// }
