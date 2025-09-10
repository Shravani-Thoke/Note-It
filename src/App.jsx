import { useState } from 'react'

import './App.css'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (

    <div className="relative w-full h-screen bg-zinc-800">
      {/* <Sidebar /> */}
      {/* <div className="pl-20"> */}
        <Navbar onSearch={setSearchQuery}/>
        <Background />
        <Foreground searchQuery={searchQuery} />
      {/* </div> */}

    </div>


  )
}

export default App
