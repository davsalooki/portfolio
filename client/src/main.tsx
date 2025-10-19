import { StrictMode } from 'react'
import { Container, createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import AboutPage from './features/about/AboutPage.tsx';
import BlogPage from './features/blogs/BlogPage.tsx';
import GalleryPage from './features/gallery/GalleryPage.tsx';
import Header from './features/header/Header.tsx';
import Footer from './features/footer/Footer.tsx';

const root = document.getElementById('root')

createRoot(root as Container).render(
  <StrictMode>
    <div className="px-4 md:px-7 lg:px-90">

      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/*" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  </StrictMode>,
)
