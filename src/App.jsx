import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import Learning from './pages/Learning'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Blog" element={<Blog />} />
           <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App