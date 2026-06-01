import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar'
import './App.css'
import GetQrPage from './pages/get_qr_page'
import ViewMenuPage from './pages/view_menu_page'
import AiChatPage from './pages/ai_chat_page'

function App() {
  return (
        <BrowserRouter>
        <div className='fixed top-0'>
          <Navbar></Navbar>
        </div>
        <div>
          <div className="h-2"/>
          <Routes>
            <Route path="/" element={<GetQrPage />} />
            <Route path="menu" element={<ViewMenuPage />} />
            <Route path="ai" element={<AiChatPage />} />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
