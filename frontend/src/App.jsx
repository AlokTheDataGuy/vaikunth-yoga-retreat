import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
// import ProgramDetail from './pages/ProgramDetail';
import Accommodations from './pages/Accommodations';
import Testimonials from './pages/Testimonials';
import Booking from './pages/Booking';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ContactPage from './pages/contact/ContactPage';
// import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          {/* <Route path="/programs/:id" element={<ProgramDetail />} /> */}
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton phoneNumber="917300620149" message="Hello! I'm interested in Vaikunth Yoga Retreat." />
      </Router>
    </ThemeProvider>
  );
}

export default App;
