import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Navbar from './components/navbar'
import GetQrPage from './pages/get_qr_page'
import ViewMenuPage from './pages/view_menu_page'
import AiChatPage from './pages/ai_chat_page'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div>
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
