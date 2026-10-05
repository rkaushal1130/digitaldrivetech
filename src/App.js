import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="nav-spacer"></div>
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
