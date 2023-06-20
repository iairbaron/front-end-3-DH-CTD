import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';
import Home from './Home';
import Contacto from './Contacto';
import Beer from './Beer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contacto />} />
        <Route path={routes.beer} element={<Beer />} />
      </Routes>
    </Router>
  );
}

export default App;
