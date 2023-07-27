
// Directly we are using contextAPI i.e ThemeContext and provide value or state;

// import { useState } from 'react'
// import './App.css'
// import HomePage from './components/HomePage'
// import ThemeContext from './context/ThemeContext'
// function App() {
//   const [theme, setTheme] = useState('orange')
//   return (
//     <div>
//       <ThemeContext.Provider value={theme} >
//         <HomePage />
//       </ThemeContext.Provider>
//     </div>
//   )
// }
// export default App

// With the help of seperate file we are using context for better code


import './App.css'
import HomePage from './components/HomePage'
import AllState from './context/AllState'
function App() {
  return (
    <>
      <AllState>
        <HomePage />
      </AllState>
    </>
  )
}
export default App
